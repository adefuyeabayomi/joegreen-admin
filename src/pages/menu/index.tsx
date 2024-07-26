import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Dish } from "joegreen-service-library/dist/services/dishService";

import './style.css'
import OrderItem from "../../components/orderItem";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from "joegreen-service-library";
import { useLoading } from "../../components/utils/loadingContext";

import image26 from '../../assets/image26.png'
let image = <img src={image26}/>

export function ManageMenu (): React.JSX.Element {
    let navigate = useNavigate()
    let {triggerError,triggerSuccess} = useNotificationTrigger()
    let {setLoading,setLoadingText} = useLoading()
    let [categories,setCategories] = useState<Dish[]>([])
    const getCategories = async () => {
        try {
            setLoading(true);
            setLoadingText('Fetching Dishes...');
                let data = await dishService.getAllCategory();
                setCategories(data)
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
        getCategories()
    },[])
    function goToMenuCategory(id:string){
        navigate('/menu-category?id='+id)
    }
    function goToCreateCategory(){
        navigate('/create-category')
    }
    interface Category {
        name: string;
        description: string;
        _id: string
    }

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">MANAGE MENU</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                    <p className="font-p font-regular no-space">
                                        <button onClick={goToCreateCategory} className="vi-button green-linear px-2 px-sm-3 px-md-4 px-lg-5">Add Category <FontAwesomeIcon icon={faPlus}/></button>
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
                    <div className="container-fluid no-space">
                    <div className="row no-space">
                        {categories.map((x, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="cat-container p-2 my-2 border-gray-radius">
                                    <div>
                                        <p className="font-subtitle font-medium green-color-main no-space">{x.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-p no-space">{x.description}</p>
                                    </div>
                                    <p className="font-p font-regular no-space my-2 my-sm-1 mx-0 mx-sm-1">
                                        <button onClick={() => goToMenuCategory(x._id)} className="vi-button px-2 px-sm-3 px-md-4 px-lg-5">
                                            View Category
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    </div>
    )
}


