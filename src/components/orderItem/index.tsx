import React,{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/image26.png'
import './style.css'
import CustomDialog from '../customDialog';

interface FeaturedCardPropType {
    image?: string;
    title: string;
    editFn?: ()=>void;
    publishFn?: ()=>void;
    description?: string;
    price: string;
    published?:boolean;
    deleteDish: ()=>void;
}

function OrderItem({deleteDish,image,title,editFn,publishFn, description='',price,published}: FeaturedCardPropType): React.JSX.Element {
    let [confirmDishDelOpen,setConfirmDishDelOpen] = useState(false)
    
    function toggleDishConfirm(){
        setConfirmDishDelOpen(!confirmDishDelOpen)
    }

    return (
        <div className='text-main order-item-container-main'>            
            <CustomDialog onClose={toggleDishConfirm} isOpen={confirmDishDelOpen}>
                    <div>
                        <div>
                            <p className="font-subtitle font-medium no-space">Are you sure you want to delete this Dish?</p>
                        </div>
                        <div>
                            <p className="font-p font-medium no-space">Note That This action is Irreversible. If you delete it now. you would need to create it afresh.</p>
                        </div>
                        <div className="container-fluid no-space">
                            <div className="row no-space">
                                <div className="col-12 col-md-6 no-space">
                                    <button className="ATCMButton Continue font-small font-regular pointer" onClick={deleteDish}>Delete</button>
                                </div>
                                <div className="col-12 col-md-6 no-space px-1">
                                    <button className="ATCMButton PTC font-small font-regular pointer" onClick={toggleDishConfirm}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomDialog>
            <div className="w-max-content order-delete-container">
            <div className="py-1 mx-1" />
                <button onClick={() => {toggleDishConfirm(); toggleDishConfirm();}} className="vi-button px-3" style={{backgroundColor: '#e13b58'}}>
                    <FontAwesomeIcon icon={faTrash} /> <span className="d-xs-inline d-sm-none">Delete Category</span> 
                </button>
            </div>
            <div className='orders-image-container'>
                <div className='oIFrame'>
                    <img src={image} />
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
                            <button onClick={editFn} className="vi-button px-2">Edit Dish <FontAwesomeIcon icon={faPen}/></button>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                            {published
                            ? (
                                <button onClick={publishFn} className="vi-button green-linear px-2">Unpublish Dish <FontAwesomeIcon icon={faEyeSlash}/></button>
                            ):
                            (<button onClick={publishFn} className="vi-button green-linear px-2">Publish Dish <FontAwesomeIcon icon={faEye}/></button>)
                            }
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