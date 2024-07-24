import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { BlogItem } from "../../components/blogItem";
import image1 from '../../assets/image23.png'
let image = <img src={image1} />

export function Blog (): React.JSX.Element {
    let navigate = useNavigate()
    
    function goToCreatePost(){
        navigate('/create-blog')
    }

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">MANAGE BLOG</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                    <p className="font-p font-regular no-space">
                                        <button onClick={goToCreatePost} className="vi-button px-2 px-sm-3 px-md-4 px-lg-5">Add New Post <FontAwesomeIcon icon={faPlus}/></button>
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
                    <div className="py-1" />
                    <div className="blog-item-container py-2">
                        <div className="container-fluid no-space">
                            <div className="row  no-space">
                                {[1,2,3,4,5].map(x=>{
                                    return (
                                        <div className="col-12 col-md-6">
                                            <div className="shadow border-gray-radius my-2">
                                                <BlogItem image={image} title="Blog Title" description="Highlight part of the article" actionFn={()=>{}} />
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


