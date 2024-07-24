import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { InputMain } from "../../components/input";


export function CreateCategory (): React.JSX.Element {
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
                <div className="util-header">
                        <div>
                            <p className="font-heading-6 font-medium green-color-main text-center">CREATE CATEGORY</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                    <div className="p-2 border-gray-radius">
                        <div>
                            <p className="font-small no-space">Value</p>
                            <div className="py-1" />
                            <InputMain value="" onChange={()=>{}} icon={<FontAwesomeIcon icon={faEye}/>}/>
                        </div>
                        <div>
                            <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                                <button onClick={()=>{}} className="vi-button px-2">Publish Category <FontAwesomeIcon icon={faEye}/></button>
                            </p>
                        </div>
                    </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


