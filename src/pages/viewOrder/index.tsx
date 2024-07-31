import React,{useState, useEffect} from "react";
import CustomDialog from "../../components/customDialog";
import { useNavigate, useSearchParams } from "react-router-dom";

import './style.css'
import { orderService } from "joegreen-service-library";
import { Order } from "joegreen-service-library/dist/services/orderService";
import moment from "moment";
import { UserOrderItem } from "../../components/orderItem";
import { useLoading } from "../../components/utils/loadingContext";

export function ViewOrder (): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const {setLoading,setLoadingText} = useLoading()
    const [searchParams] = useSearchParams();
    let [order,setOrder] = useState<Order>()
    const record = searchParams.get('record')
    function markAsFulfilled () {
        setLoading(true)
        closeDialog();
        orderService.updateOrder(order._id,{fulfilled: true}, token).then(res=>{
            console.log({res})
            setOrder(res.order)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>{
                setLoading(false)
            })
    }
    useEffect(() => {
        const id = searchParams.get('order');
        console.log('fetching order')
        if (id) {
            orderService.fetchOrderById(id,token).then(res=>{
                setOrder(res)
                console.log({res})
            }).catch(error=>{
                console.log(error)
            })
        }
    }, [searchParams]);

    const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };

      if(!order){
        return (<div>
                    <p>Loading Order...</p>
                </div>)
      }

    return (
        <div>            
        <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
            <div>
            <div className="py-1" />
            <p className="font-subtitle font-bold">Confirm Order Successfully fulfilled</p>
            <p className="font-p font-regular">The client would be notified that their order has been fulfilled and currently on the way.</p>
            <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="col-12 col-md-6 no-space px-1">
                        <button className="ATCMButton PTC font-small font-regular pointer" onClick={()=>{markAsFulfilled()}}>Mark As Fulfilled</button>
                    </div>
                    <div className="col-12 col-md-6 no-space">
                        <button className="ATCMButton Continue font-small font-regular pointer" onClick={()=>{closeDialog()}}>Cancel</button>
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
                            <p className="font-subtitle font-medium green-color-main text-center">ORDER ID ({order._id})</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                    <div className="orderDetailsContent">
                        <div className="">
                        <p className="font-p"><span className="font-medium">Ordered By: </span> {order.email}</p>
                        <p className="font-p"><span className="font-medium">Delivery Information: </span> {order.deliveryInfo}</p>
                        <p className="font-p"><span className="font-medium">Phone Number: </span> {order.phoneNumber}</p>
                        <p className="font-p"><span className="font-medium">Order Placed: </span>{moment(order.createdAt).startOf('hour').fromNow()} ({moment(new Date(order.createdAt)).format('LL')})</p>
                        <p className="font-p"><span className="font-medium">Order ID: </span> {order._id}</p>
                        <p className="font-p"><span className="font-medium">Transaction Reference: </span> {order.transactionRef}</p>
                        <p className="font-p"><span className="font-medium">Payment Reference: </span> {order.paymentRef}</p>
                        <p className="font-p"><span className="font-medium">Payment Status: </span> {order.paymentStatus}</p>
                        <p className="font-p"><span className="font-medium">Time of Order: </span> {moment(order.createdAt).startOf('hour').fromNow()}</p>
                        </div>
                    </div>
                    <div>
                        <div className="py-3" />
                        <div>
                            <p className="font-subtitle font-medium green-color-main text-center">ORDER DETAILS</p>
                        </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                        <div className="py-2" />
                        {order.cartItems.map((dish,index)=>{
                            return (
                                <div key={index} style={{marginBottom: '20px'}}>
                                    <UserOrderItem dish={dish} />
                                </div> 
                        )
                        })}
                    </div>
                    {
                        record ? null:  (
                            <div>
                                <div className="py-1" />
                                <p className="font-p">If this order has been completed please click the button to mark it as Fulfilled so the client can be notified that their order is ready and on the way.</p>
                                <div className="py-1" />
                                <p className="font-p font-regular no-space">
                                    <button onClick={openDialog} className="vi-button">Mark Order As Fulfilled</button>
                                </p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


