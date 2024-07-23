import React,{useState} from "react";
import { InputMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './style.css'

export default function UserAccount (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="accountPageContainer">
                <div className="util-header">
                        <div>
                            <p className="font-heading-6 font-medium green-color-main text-center">ACCOUNT INFORMATION</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-3" />
                </div>
                <div className="accountPageContents col-12 col-sm-10 col-md-8 col-lg-6 center ">
                    <div>
                    <p className="font-small font-regular">Your Email</p>
                        <InputMain icon={<FontAwesomeIcon icon={faShoppingCart}/>} value='' onChange={()=>{}} />
                    </div>
                    <div className="py-1" />
                    <div>
                    <p className="font-small font-regular">Phone number</p>
                        <InputMain icon={<FontAwesomeIcon icon={faShoppingCart}/>} value='' onChange={()=>{}} />
                    </div>
                    <div className="py-1" />
                    <div>
                    <p className="font-small font-regular">Primary Delivery Address </p>
                        <InputMain icon={<FontAwesomeIcon icon={faShoppingCart}/>} value='' onChange={()=>{}} />
                    </div>
                    <div className="py-1" />
                    <div>
                        <button className="support-cta-button">Update Details</button>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


