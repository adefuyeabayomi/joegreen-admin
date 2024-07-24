import React,{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/image26.png'
import './style.css'

interface FeaturedCardPropType {
    image?: React.JSX.Element | string
    title: string,
    actionFn?: ()=>void,
    description?: string,
    price: string
}

function OrderItem({image,title,actionFn, description='',price}: FeaturedCardPropType): React.JSX.Element {
    return (
        <div className='text-main order-item-container-main'>
            <div className='orders-image-container'>
                <div className='oIFrame'>
                    {image}
                </div>
            </div>
            <div className='order-content-container'>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                    <p className='font-small font-regular no-space'>{description}</p>
                </div>
                <div className='py-1'></div>
                <div className='font-subtitle font-medium'>Addons</div>
                <div className='order-addons font-small font-regular no-space'>
                    <div className='row no-space font-p'>
                        <div className='w-max-content no-space'>
                            <p className='no-space font-medium'>Plantain</p>
                        </div>
                        <div className='col no-space'>
                        <p className='no-space' style={{textAlign: 'right'}}>200/Unit</p>
                        </div>
                    </div>
                </div>
                <div className='py-1'></div>
                <div>
                    <p className='no-space font-subtitle font-regular'>N {price}</p>
                </div>
                <div className='py-1'></div>
                <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p font-regular no-space my-2 my-sm-1 mx-1 mx-sm-1 ">
                            <button onClick={()=>{}} className="vi-button px-2">Edit Dish <FontAwesomeIcon icon={faPen}/></button>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                            <button onClick={()=>{}} className="vi-button green-linear px-2">Publish Dish <FontAwesomeIcon icon={faEye}/></button>
                        </p>
                    </div>
                </div>
            </div>              
            </div>

        </div>
    )
}

export default OrderItem

export function OrderCheckOutItem (): React.JSX.Element {
    return (
        <div className='container-fluid no-space'>
            <div className='row no-space orderCheckOutItemContainer align-items-center'>
                <div className='col-6 no-space'>
                    <div className='OCIImageContainer'>
                        <img src={image} />
                    </div>
                </div>
                <div className='col-6 no-space p-1'>
                    <div>
                        <p className='font-p font-bold no-space'>White Rice and Stew.</p>
                    </div>
                    <div>
                        <p className='font-small font-regular no-space'>12 Plates</p>
                    </div>
                    <div>
                        <p className='font-p font-regular no-space'>Total : N 34,500</p>
                    </div>
                    <div className='row no-space'>
                        <div className='col no-space' >
                            <button className='OCI_Button BEdit font-small font-regular'>Edit Order</button>
                        </div>
                        <div className='w-max-content no-space'>
                            <button className='OCI_Button BRemove font-small font-regular'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}