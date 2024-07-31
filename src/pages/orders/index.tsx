import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { orderService } from "joegreen-service-library";
import { Order } from "joegreen-service-library/dist/services/orderService";
import moment from 'moment';

import './style.css'

export function ManageOrders (): React.JSX.Element {
    let token = window.localStorage.getItem('accessToken')
    let navigate = useNavigate()
    let [orders,setOrders]= useState<Order[]>([])
    function goToViewOrder(id){
        navigate(`/view-order?order=${id}`)
    }
    useEffect(()=>{
        console.log('fetching orders')
        orderService.fetchOrders(token,{paymentStatus: 'Completed', fulfilled: false}).then(orders=>{
            console.log({orders});
            setOrders(orders)
        })
    },[])
    if(orders.length == 0){
        return (
            <div>
                No Orders Present!
            </div>
        )
    }
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="util-header">
                        <div>
                            <p className="font-heading-6 font-medium green-color-main text-center">MANAGE PENDING ORDERS</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                    <div className="transactionsContents">
                    <div className="tableHeader">
                        <div className="container-fluid no-space">
                            <div className="d-none d-sm-flex row no-space align-items-center py-1 px-2 my-2 my-sm-0">
                                <div className="w-max-content no-space">
                                    <p className="font-p font-medium no-space snWidth">
                                        S/N
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        DATE
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        TIME
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        ORDER ID
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        STATUS
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        ACTION
                                    </p>
                                </div>
                            </div>
                            {orders.map((x,index)=>{
                                return (

                            <div className={`row no-space align-items-center py-2 px-2 tx-item-row ${index%2 == 0 ? 'gray' : ''} my-2 my-sm-0`}>
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        {index + 1} 
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>{moment(x.createdAt).format("MMM Do YY")}</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>{moment(x.createdAt).startOf('hour').fromNow()}</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Order ID: </span><span>{x._id}</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space px-2">
                                    <span className="d-sm-none">Status: </span><span>{x.fulfilled ? 'Fulfilled': 'Pending'}</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <button onClick={()=>goToViewOrder(x._id)} className="vi-button">View Order</button>
                                    </p>
                                </div>
                            </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


