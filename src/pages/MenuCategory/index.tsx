import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import OrderItem from "../../components/orderItem";
import image26 from '../../assets/image26.png'
let image = <img src={image26}/>
export function MenuCategory (): React.JSX.Element {
    let navigate = useNavigate()
    
    function goToCreateCategory(){
        navigate('/create-category')
    }

    function goToCreateDish(){
        navigate('/create-dish')
    }
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
                                    <p className="font-heading-6 font-medium green-color-main">CRAVINGS</p>
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
                                {[1,2,3,4,5].map(x=>{
                                    return (
                                        <div className="col-12 col-md-6">
                                            <div className="shadow border-gray-radius my-2">
                                                <OrderItem title="White Rice and Stew" actionFn={()=>{}} price="2500" description="This option is for white rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges." image={image}/>
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


