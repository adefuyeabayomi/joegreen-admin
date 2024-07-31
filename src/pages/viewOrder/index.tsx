import React,{useState} from "react";
import CustomDialog from "../../components/customDialog";

import './style.css'

export function ViewOrder (): React.JSX.Element {
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
            <div>
            <div className="py-1" />
            <p className="font-subtitle font-bold">Confirm Order Successfully fulfilled</p>
            <p className="font-p font-regular">The client would be notified that their order has been fulfilled and currently on the way.</p>
            <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="col-12 col-md-6 no-space">
                        <button className="ATCMButton Continue font-small font-regular pointer" onClick={()=>{}}>Mark As Fufilled</button>
                    </div>
                    <div className="col-12 col-md-6 no-space px-1">
                        <button className="ATCMButton PTC font-small font-regular pointer" onClick={()=>{}}>Cancel</button>
                    </div>
                </div>
            </div>
            <div className="py-2" />
            </div>
    </CustomDialog>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="viewOrderMain col-12 col-sm-10 col-md-8 col-lg-6 center">
                <div className="util-header">
                        <div>
                            <p className="font-subtitle font-medium green-color-main text-center">ORDER DETAILS (x2930xi23j3o9342d)</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                    <div className="orderDetailsContent">
                        <div className="">
                        <p className="font-p"><span className="font-medium">Ordered By: </span> olusegun@gmail.com</p>
                        <p className="font-p"><span className="font-medium">Time: </span> 2 minutes ago</p>
                        <p className="font-p"><span className="font-medium">Order ID: </span> dik2o32038919093919</p>
                        </div>
                        <div className="py-1" />
                        
                        <p className="font-p">If this order has been completed please click the button to mark it as Fulfilled so the client can be notified that their order is ready and on the way.</p>
                        <div className="py-1" />
                        <p className="font-p font-regular no-space">
                            <button onClick={openDialog} className="vi-button">Mark Order As Fulfilled</button>
                        </p>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


