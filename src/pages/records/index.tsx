import React,{useState,useEffect} from "react";
import filterIcon from '../../assets/filter-icon.png'
import { useNavigate } from "react-router-dom";
import { orderService } from "joegreen-service-library";
import { Order } from "joegreen-service-library/dist/services/orderService";
import './style.css'
import moment from "moment";

export function OrderRecords (): React.JSX.Element {  
    let token = window.localStorage.getItem('accessToken')
    let [orders,setOrders]= useState<Order[]>([])      // State for the date
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

    // Handle date input change
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    let navigate = useNavigate()
    function goToViewOrder(id){
        navigate(`/view-order?order=${id}&record=true`)
    }
    
    useEffect(()=>{
        console.log('fetching orders')
        orderService.fetchOrders(token,{fulfilled: true, date: date}).then(orders=>{
            console.log({orders});
            setOrders(orders)
        })
    },[date])

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="recordsContainerMain">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">ORDER RECORDS</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">
                                            <input
                                                type="date"
                                                value={date}
                                                onChange={handleDateChange}
                                            /></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div>
                        
                    </div>
                    <div className="py-1" />
                    <div className="transactionsContents">
                    <div className="py-1" />
                    <div className="border-gray-radius p-2">
                        <div className="">
                            <p className="font-subtitle font-medium">Orders Summary For the Day : {moment(date).format("MMM Do YY")}</p>
                        </div>
                        <div className="">
                            <p className="font-p"><span className="font-regular">Total Orders: </span>{orders.length}</p>
                        </div>
                    </div>
                        <div className="py-3" />
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
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


