import React,{useState} from "react";

import filterIcon from '../../assets/filter-icon.png'
import './style.css'

export default function UserTransactionHistory (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="accountPageContainer">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">TRANSACTIONS</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">Last 7 days</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                </div>
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
                                        TRXN ID
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        AGENT
                                    </p>
                                </div>
                                <div className="col no-space">
                                    <p className="font-p font-medium no-space">
                                        ID
                                    </p>
                                </div>
                            </div>
                            <div className="row no-space align-items-center py-2 px-2 tx-item-row gray my-2 my-sm-0">
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        1
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>02/03/2024</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>12:03am</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Transaction ID: </span><span>Prxi2938928918de3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Agent: </span><span>Monnify</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Status: </span><span>Successful</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row no-space align-items-center py-2 px-2 tx-item-row my-2 my-sm-0">
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        1
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>02/03/2024</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>12:03am</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Transaction ID: </span><span>Prxi2938928918de3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Agent: </span><span>Monnify</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Status: </span><span>Successful</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row no-space align-items-center py-2 px-2 tx-item-row gray my-2 my-sm-0">
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        1
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>02/03/2024</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>12:03am</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Transaction ID: </span><span>Prxi2938928918de3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Agent: </span><span>Monnify</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Status: </span><span>Successful</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row no-space align-items-center py-2 px-2 tx-item-row my-2 my-sm-0">
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        1
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>02/03/2024</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>12:03am</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Transaction ID: </span><span>Prxi2938928918de3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Agent: </span><span>Monnify</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Status: </span><span>Successful</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row no-space align-items-center py-2 px-2 tx-item-row gray my-2 my-sm-0">
                                <div className="w-max-content d-none d-sm-block no-space">
                                    <p className="font-p font-regular no-space snWidth">
                                        1
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                        <span className="d-sm-none">Date: </span><span>02/03/2024</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Time: </span><span>12:03am</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Transaction ID: </span><span>Prxi2938928918de3</span>
                                    </p>
                                </div>
                                <div className="col-xs-12  col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Agent: </span><span>Monnify</span>
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm no-space">
                                    <p className="font-p font-regular no-space">
                                    <span className="d-sm-none">Status: </span><span>Successful</span>
                                    </p>
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


