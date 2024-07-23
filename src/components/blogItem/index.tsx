import React,{useState} from "react";
import './style.css'
import blogImg from '../../assets/trainingHero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

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
                <div className='order-button-container'>
                    <button className='pointer' onClick={actionFn}>Read Full Post <FontAwesomeIcon icon={faLocationArrow} /></button>
                </div>  
                </div>
            </div>
        </div>
    )
}


