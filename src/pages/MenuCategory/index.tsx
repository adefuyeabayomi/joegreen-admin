import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import OrderItem from "../../components/orderItem";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from "joegreen-service-library";
import { useLoading } from "../../components/utils/loadingContext";
import { useSearchParams } from "react-router-dom";
import { Dish } from "joegreen-service-library/dist/services/dishService";
import CustomDialog from "../../components/customDialog";

export function MenuCategory (): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    let navigate = useNavigate()
    let {triggerError,triggerSuccess} = useNotificationTrigger()
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id')
    let {setLoading,setLoadingText} = useLoading()
    let [dishes,setDishes] = useState<Dish[]>([])
    let [category,setCategory] = useState<Dish>()
    let [confirmCatDelOpen,setConfirmCatDelOpen] = useState(false)
    

    function toggleCatConfirm(){
        setConfirmCatDelOpen(!confirmCatDelOpen)
    }
    
    function goToCreateCategory(){
        navigate('/create-category')
    }

    function handleGoBack(){
        navigate(-1)
    }

    function goToCreateDish(){
        navigate('/create-dish?category='+id)
    }
    
    function goToEditCategory(){
        navigate('/create-category?editId='+id)
    }

    function goToEditDish (dishId){
        navigate('/create-dish?category='+id+'&editId='+dishId)
    }

    async function publishCategory (isPublish:boolean) {
        try {
            setLoading(true);
            setLoadingText(isPublish? 'Publishing Category.....': 'Unpublishing Category....');
                let data = isPublish? await dishService.updateCategory(id,{published: true},token):  await dishService.updateCategory(id,{published: true},token);
                setCategory(data)
                triggerSuccess({ title: 'Success: ' + isPublish? 'Published Category': 'Unpublished Category', message: 'successfully , users will now be able to see this category in the website' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed To Publish' });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    async function deleteCategory () {
        try {
            setLoading(true);
            setLoadingText('Deleting Category');
                let data = await dishService.delete(id,'categories',token)
                console.log({deleteResponse: data})
                triggerSuccess({ title: 'Category Deleted:', message: 'This category has been removed. it would no longer be availble on the database.' });
                handleGoBack()
                toggleCatConfirm()
        } catch (error) {
            triggerError({ title: 'Try Again', message: 'Failed To Delete, '+error.message  });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    async function deleteDish (id:string) {
        try {
            setLoading(true);
            setLoadingText('Deleting Dish... Please Wait');
            let data = await dishService.delete(id,'dishes',token)
                setCategory(data)
                triggerSuccess({ title: 'Dish Deleted', message: 'This dish has been removed. It would no longer be available on the database' });
                handleGoBack()
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed To Delete, '+error.message });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    async function publishDish (isPublish:boolean,id:string) {
        try {
            setLoading(true);
            setLoadingText(isPublish? 'Publishing Category.....': 'Unpublishing Category....');
            let data = isPublish? await dishService.updateDish(id,{published: true},token):  await dishService.updateDish(id,{published: false},token);
            let newDishes = dishes.map(x=>x._id == id? data : x)
            setDishes(newDishes)
            triggerSuccess({ title: 'Success: ' + isPublish? 'Published Dish': 'Unpublished Category', message: 'successfully , users will now be able to see this Dish on the website' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to Publish' });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }


    const getDishes = async () => {
        try {
            setLoading(true);
            setLoadingText('Fetching Dishes...');
                let data = await dishService.getDishes({category: id});
                setDishes(data)
                console.log({dishes: data})
                triggerSuccess({ title: 'Success', message: 'Dishes Fetched successfully' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to retrieve Dishes' });
            console.error({error})
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        getDishes()
    },[])
    
    const getCategory = async () => {
        try {
            setLoading(true);
            setLoadingText('Fetching Dishes...');
                let data = await dishService.getCategoryById(id);
                setCategory(data)
                console.log({data})
                triggerSuccess({ title: 'Success', message: 'Category Fetched successfully' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to retrieve category data' });
            console.error({error})
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        getCategory()
    },[])

    return (
        <div>
            <div className="mainSpacing">
                <CustomDialog onClose={toggleCatConfirm} isOpen={confirmCatDelOpen} >
                    <div>
                        <div>
                            <p className="font-subtitle font-medium no-space">Are you sure you want to delete this Category?</p>
                        </div>
                        <div>
                            <p className="font-p font-medium no-space">Note That This action is Irreversible. If you delete it now. you would need to create it afresh.</p>
                        </div>
                        <div className="container-fluid no-space">
                            <div className="row no-space">
                                <div className="col-12 col-md-6 no-space">
                                    <button className="ATCMButton Continue font-small font-regular pointer" onClick={deleteCategory}>Delete</button>
                                </div>
                                <div className="col-12 col-md-6 no-space px-1">
                                    <button className="ATCMButton PTC font-small font-regular pointer" onClick={toggleCatConfirm}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomDialog>
                <div className="py-3" />
                <div className="">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center justify-content-center">
                            <div className="col-12 text-center no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">{category? category.name : ''}</p>
                                </div>
                                <div className="util-divider" />
                                <div className="py-1" />
                            </div>
                            <div className="no-space">
                                <div className="container-fluid">
                                        <div className="row no-space justify-content-center align-items-center">
                                            <div className="col-xs-12 col-sm-3 col-lg-2 col-md-3 no-space">
                                                <p className="font-p font-regular no-space my-2 my-sm-1 mx-1 mx-sm-1 ">
                                                    <button onClick={goToCreateDish} className="vi-button px-2">New Dish <FontAwesomeIcon icon={faPlus}/></button>
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-sm-3 col-lg-2 col-md-3 no-space">
                                                <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                                                    <button onClick={goToEditCategory} className="vi-button px-2">Edit Category <FontAwesomeIcon icon={faPen}/></button>
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-lg-2 col-md-3 no-space">
                                                <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                                                    {category
                                                    ? category.published
                                                    ? (
                                                    <button onClick={()=>{publishCategory(false)}} className="vi-button px-2">Unpublish Category <FontAwesomeIcon icon={faEyeSlash}/></button>
                                                    ):
                                                    (<button onClick={()=>{publishCategory(true)}} className="vi-button px-2">Publish Category <FontAwesomeIcon icon={faEye}/></button>)
                                                    :null
                                                    }
                                                </p>
                                            </div>
                                            <div className="w-max-content">
                                            <div className="mx-1" />
                                                <button onClick={() => toggleCatConfirm()} className="vi-button px-3" style={{backgroundColor: '#e13b58'}}>
                                                    <FontAwesomeIcon icon={faTrash} /> <span className="d-xs-inline d-sm-none">Delete Category</span> 
                                                </button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="menu-cat-container">
                    <div className="py-1" />
                    <div className="dish-item-container py-2">
                        <div className="container-fluid no-space">
                            <div className="row  no-space">
                                {dishes.map(x=>{
                                    return (
                                        <div key={x._id} className="col-12 col-md-6">
                                            <div className="shadow border-gray-radius my-2">
                                                <OrderItem deleteDish={()=>{deleteDish(x._id)}} title={x.name} published={x.published} publishFn={()=>{publishDish(!x.published,x._id)}} editFn={()=>{goToEditDish(x._id)}} price={String(x.price)} description={x.description} image={x.image}/>
                                            </div>
                                        </div>                                        
                                    )
                                })}

                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


