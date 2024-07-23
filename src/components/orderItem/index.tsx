import React,{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <div className=''>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                    <p className='font-small font-regular no-space'>{description}</p>
                </div>
                <div className='py-1'></div>
                <div>
                    <p className='no-space font-subtitle font-regular'>N {price}</p>
                </div>
                <div className='py-1'></div>
                <div className='order-button-container'>
                    <button className='pointer' onClick={actionFn}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
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