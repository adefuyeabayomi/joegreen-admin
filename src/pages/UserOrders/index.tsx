import React,{useState} from "react";

import filterIcon from '../../assets/filter-icon.png'

import './style.css'

export default function UserOrders (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="userOrdersPageContainer">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">MY ORDERS</p>
                                </div>
                            </div>                         
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">Pending</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-3" />
                </div>
                <div className="userOrdersContents">
                    <div className="container-fluid no-space">
                        <div className="row no-space">
                            {
                                [1,2,3,4,5,5,6,7].map((x,index)=>{
                                    return (
                                        <div className="col-12 col-md-6 col-xl-4" key={index}>
                                            <div className="UserOrderItemContainer">
                                                <div>
                                                    <div className="orderName">
                                                        <p className="font-subtitle font-medium">White Rice and Stew (12)</p>
                                                    </div>
                                                    <div className="">
                                                        <p className="font-p font-regular">Addons: Shrimp, coleslaw, plantain,chicken(2)</p>
                                                    </div>
                                                    <div className="py-1" />                            
                                                    <div className="util-divider" />
                                                </div>
                                                <div>
                                                    <div className="orderName">
                                                        <p className="font-subtitle font-medium">White Rice and Stew (12)</p>
                                                    </div>
                                                    <div className="">
                                                        <p className="font-p font-regular">Addons: Shrimp, coleslaw, plantain,chicken(2)</p>
                                                    </div>
                                                    <div className="py-1" />                            
                                                    <div className="util-divider" />
                                                </div>
                                            <div>
                                                <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Field: Value</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


