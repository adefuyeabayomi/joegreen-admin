import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

export function ManageMenu (): React.JSX.Element {
    let navigate = useNavigate()
    
    function goToMenuCategory(){
        navigate('/menu-category')
    }
    function goToCreateCategory(){
        navigate('/create-category')
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
                            {[1,2,3,4].map((x,index)=>{
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="cat-container p-2 my-2 border-gray-radius">
                                            <div className="">
                                                <p className="font-subtitle font-medium green-color-main no-space">Cravings</p>
                                            </div>
                                            <div className="">
                                                <p className="font-p no-space">Satisfy your sweet tooth.</p>
                                            </div>
                                            <p className="font-p font-regular no-space my-2 my-sm-1 mx-0 mx-sm-1 ">
                                                <button onClick={goToMenuCategory} className="vi-button px-2 px-sm-3 px-md-4 px-lg-5">View Category</button>
                                            </p>
                                        </div>
                                    </div>                                    
                                )
                            })}

                        </div>
                    </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


