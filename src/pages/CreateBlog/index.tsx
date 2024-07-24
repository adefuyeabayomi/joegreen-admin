import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";


export function CreateBlog (): React.JSX.Element {
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
                            <p className="font-heading-6 font-medium green-color-main text-center">CREATE BLOG POST</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                <div className="py-3" />
            </div>
        </div>
    )
}


