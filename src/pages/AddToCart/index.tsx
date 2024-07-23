import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Modal } from "antd";
import CustomDialog from "../../components/customDialog";
import { useNavigate } from 'react-router-dom'
import './style.css'
import image from '../../assets/image25.png'

export default function AddToCart (): React.JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();
    function goToCheckout(){
        navigate("/checkout")
    }
    function goToOrders(){
        navigate('/order')
    }

    const openDialog = () => {
      setIsDialogOpen(true);
    };
  
    const closeDialog = () => {
      setIsDialogOpen(false);
    };
    let [showModal,setShowModal] = useState(false)
    return (
        <div>
            <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
                <div className="py-1" />
                <p className="font-subtitle font-bold">Order Added Successfully</p>
                <p className="font-p font-regular">Your order has been added to your cart. You can proceed to add more items or checkout your order now.</p>
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="col-12 col-md-6 no-space">
                            <button className="ATCMButton Continue font-small font-regular pointer" onClick={goToOrders}>Continue Shopping</button>
                        </div>
                        <div className="col-12 col-md-6 no-space px-1">
                            <button className="ATCMButton PTC font-small font-regular pointer" onClick={goToCheckout}>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
                <div className="py-2" />
            </CustomDialog>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="">
                    <div>
                        <p className="text-center font-heading-6 font-medium green-color-main">ADD TO CART</p>
                    </div>
                    <div className="py-2" />
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col-12 col-md-6">
                                <div className="ATCImageItemContainer">
                                    <img src={image} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="ATCContentsContainer font-p">
                                    <div>
                                        <p className="font-subtitle font-medium">White Rice and Stew.</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Meal Description:</p>
                                    </div>
                                    <div>
                                        <p>This option is for white rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.</p>
                                    </div>
                                    <div>
                                        <p className="font-subtitle">₦ 2500 Per Plate</p>
                                    </div>
                                    <div>
                                        <p className="font-regular">How many plate would you like to order?</p>
                                    </div>
                                    <div>
                                        <button className="ATCButton pointer active">1 Plate</button>
                                        <button className="ATCButton pointer">2 Plates</button>
                                        <button className="ATCButton pointer">3 Plates</button>
                                        <button className="ATCButton pointer">4 Plates</button>
                                        <button className="ATCButton pointer">5 Plates</button>
                                        <button className="ATCButtonGray pointer">More Than 5 Plates</button>
                                    </div>
                                    <div className="py-1" />
                                    <div className='order-button-container'>
                                        <button className='pointer' onClick={()=>{openDialog()}}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                                    </div>
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


