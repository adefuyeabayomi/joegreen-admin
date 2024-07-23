import React,{useState} from "react";

import call from '../../assets/image16.png'
import message from '../../assets/image15.png'

import './style.css'
import { InputMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function SupportPage (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="support-page-container">
                    <div className="util-header">
                        <div>
                            <p className="font-heading-6 font-medium green-color-main text-center">Support Page</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-3" />
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center justify-content-center">
                            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                                <div className="contact-contents">
                                    <div>
                                        <p className="font-subtitle font-medium deep-green">Contact Us</p>
                                    </div>
                                    
                                <div className="py-1" />
                                    <div className="container-fluid no-space">
                                        <div className="row no-space align-items-center">
                                            <div className="w-max-content no-space">
                                                <div className="SIImageContainer">
                                                    <img src={message} />
                                                </div>
                                                
                                <div className="py-2" />
                                            </div>
                                            <div className="col-6 no-space">
                                                <div className="px-1">
                                                    <p className="font-subtitle font-medium no-space">Email</p>
                                                </div>
                                                <div className="px-1">
                                                    <p className="font-p font-medium no-space">support@joegreencafe.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-fluid no-space">
                                        <div className="row no-space align-items-center">
                                            <div className="w-max-content no-space">
                                                <div className="SIImageContainer">
                                                    <img src={call} />
                                                </div>
                                            </div>
                                            <div className="col-6 no-space">
                                                <div className="px-1">
                                                    <p className="font-subtitle font-medium no-space">Call</p>
                                                </div>
                                                <div className="px-1">
                                                    <p className="font-p font-medium no-space">+234 90-8374-4758</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-6  col-lg-5 col-xl-4">
                                <div className="py-3 py-md-0" />
                                <div className="supportFormContainer">
                                    <div>
                                        <p className="font-subtitle font-medium">Send An Instant Message</p>
                                    </div>
                                    <div>
                                        <p className="font-small font-regular">Your Email</p>
                                        <InputMain icon={<FontAwesomeIcon icon={faShoppingCart}/>} value='' onChange={()=>{}} />
                                    </div>
                                    
                                    <div>
                                        <p className="font-small font-regular">Your Email</p>
                                        <textarea className="SFTextArea">
                                            
                                        </textarea>
                                    </div>
                                    <div className="py-1" />
                                    <div>
                                        <button className="support-cta-button">Send Message</button>
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

