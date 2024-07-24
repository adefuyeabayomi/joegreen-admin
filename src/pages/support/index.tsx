import React,{useState} from "react";
import CustomDialog from "../../components/customDialog";

import filterIcon from '../../assets/filter-icon.png'
import './style.css'
import { InputMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function CustomerSupport (): React.JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };
    return (
        <div>
        <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
            <div className="py-1" />
            <p className="font-subtitle font-bold">Replying: jideibrahim@gmail.com</p>
            <p className="font-p font-regular">Message: Lorem ipsum dolor sit amet consectetur. Enim
            condimentum non diam neque et bibendum.....</p>
            <div>
                <p>Reply Message: </p>
                <div className="py-1" />
                <InputMain icon={<FontAwesomeIcon icon={faEnvelope}/>} value="" onChange={()=>{}} />
            </div>
            <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="py-2" />
                <p className="font-p font-regular no-space">
                    <button onClick={closeDialog} className="vi-button">Send Reply</button>
                </p>
                </div>
            </div>
            <div className="py-2" />
        </CustomDialog>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">CUSTOMER SUPPORT</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">Today</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="customerSupportContents">
                        <div className="container-fluid no-space">
                            <div className="row no-space">
                                {[1,2,3,4,5].map((x,index)=>{
                                    return (
                                <div key={index} className="col-12 col-sm-6 col-lg-4 no-space">
                                    <div className="messageContainer p-2">
                                        <div>
                                            <div className="messageFrom p-2 border-gray-radius">
                                                <p className="font-mini">Not Replied</p>
                                                <p className="font-p font-medium no-space">From: jideibrahim@gmail.com</p>
                                                <p className="font-p font-regular no-space">3 hours ago</p>
                                                <p className="font-p no-space">Lorem ipsum dolor sit amet consectetur. Enim
                                                        condimentum non diam neque et bibendum.
                                                        Eget quis urna a vivamus velit amet ligula.
                                                        Molestie pulvinar luctus sit proin dui. Quis dui
                                                        quam commodo tempus cras non tortor.</p>
                                                        <div className="py-1" />
                                                        <p className="font-p font-regular no-space">
                                    <button onClick={openDialog} className="vi-button">Reply</button>
                                    </p>
                                            </div>
                                        </div>
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


