import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import OrderItem from "../../components/orderItem";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from "joegreen-service-library";
import { useLoading } from "../../components/utils/loadingContext";
import { useSearchParams } from "react-router-dom";
import image26 from '../../assets/image26.png'
import { Dish } from "joegreen-service-library/dist/services/dishService";

let image = <img src={image26}/>
export function MenuCategory (): React.JSX.Element {
    let navigate = useNavigate()
    let {triggerError,triggerSuccess} = useNotificationTrigger()
    let {setLoading,setLoadingText} = useLoading()
    let [dishes,setDishes] = useState<Dish[]>([])
    let [category,setCategory] = useState<Dish>()
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id')
    
    function goToCreateCategory(){
        navigate('/create-category')
    }

    function goToCreateDish(){
        navigate('/create-dish?category='+id)
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
                                        <div className="row no-space justify-content-center">
                                            <div className="col-xs-12 col-sm-4 col-lg-2 col-md-3 no-space">
                                                <p className="font-p font-regular no-space my-2 my-sm-1 mx-1 mx-sm-1 ">
                                                    <button onClick={goToCreateDish} className="vi-button px-2">Create New Dish <FontAwesomeIcon icon={faPlus}/></button>
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-lg-2 col-md-3 no-space">
                                                <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                                                    <button onClick={goToCreateCategory} className="vi-button px-2">Edit Category <FontAwesomeIcon icon={faPen}/></button>
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-lg-2 col-md-3 no-space">
                                                <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                                                    <button onClick={()=>{}} className="vi-button px-2">Publish Category <FontAwesomeIcon icon={faEye}/></button>
                                                </p>
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
                                                <OrderItem title={x.name} actionFn={()=>{}} price={String(x.price)} description={x.description} image={x.image}/>
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


