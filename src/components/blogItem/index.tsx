import React,{useState} from "react";
import './style.css'
import blogImg from '../../assets/trainingHero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLocationArrow,faEye,faPen } from '@fortawesome/free-solid-svg-icons';

interface FeaturedCardPropType {
    image?: React.JSX.Element | string,
    title: string,
    actionFn?: ()=>void,
    description?: string
}

export function BlogItem ({image,title,actionFn, description=''}: FeaturedCardPropType): React.JSX.Element {
    return (
        <div className="blogItemsMain">
            <div className="blogItemContainer">
                <div className="bIContainer">
                    <img src={blogImg} />
                </div>
                <div className='py-1'></div>
                <div>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                    <p className='font-p no-space'>{description}</p>
                </div>
                
                <div className='py-1'></div>
                <div className="font-small font-medium">Published on 24th July, 2024</div>
                <div className='py-1'></div>
                <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p font-regular no-space my-2 my-sm-1 mx-1 mx-sm-1 ">
                            <button onClick={()=>{}} className="vi-button px-2">Edit Post <FontAwesomeIcon icon={faPen}/></button>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                            <button onClick={()=>{}} className="vi-button green-linear px-2">Publish Post <FontAwesomeIcon icon={faEye}/></button>
                        </p>
                    </div>
                </div>
            </div>  
                </div>
            </div>
        </div>
    )
}


