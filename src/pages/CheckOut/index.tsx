import React,{useState} from "react";
import { OrderCheckOutItem } from "../../components/orderItem";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputMain } from "../../components/input";


export default function CheckOut (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="col-12 no-space">
                            <div>
                                <p className="font-heading-6 green-color-main font-medium">PROCEED TO CHECKOUT</p>
                                <p className="font-p col-12 col-md-9">Check out your cart items. You can edit your meals with our addons. Just click the edit button.</p>
                            </div>
                            <div className="row no-space">
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 no-space">
                            <div className="orderContainer">
                                <div>
                                    <p className="font-heading-6 font-regular">Order Summary</p>
                                </div>
                                <div className="summaryItem">
                                    <div className="order-summary-divider" />
                                    <div className="py-2" />
                                    <div className="container-fluid no-space">
                                        <div className="row no-space font-p font-medium">
                                            <div className="col no-space">
                                                <div>
                                                    <p>Grand Total</p>
                                                </div>
                                            </div>
                                            <div className="w-max-content">
                                                <div>
                                                    <p>N 35,500</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row no-space font-p font-medium">
                                            <div className="col no-space">
                                                <div>
                                                    <p>Delivery Fees</p>
                                                </div>
                                            </div>
                                            <div className="w-max-content">
                                                <div>
                                                    <p>N 5,500</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2" />
                                    <div className="deliveryInformation">
                                        <div className="">
                                            <p className="font-subtitle font-medium">Delivery Information</p>
                                        </div>
                                        <div className="py-1" />
                                        <div className="">
                                            <InputMain value="" onChange={(e)=>{}} placeholder="Phone Number" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                                        </div>
                                        <div className="py-1" />
                                        <div className="">
                                        <InputMain value="" onChange={(e)=>{}} placeholder="Delivery Information" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                                        </div>
                                        <div className="py-2" />
                                        <div>
                                            <button className="checkout-btn">Proceed To Checkout</button>
                                        </div>
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


