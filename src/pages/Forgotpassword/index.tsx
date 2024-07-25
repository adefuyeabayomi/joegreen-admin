import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default function ForgotPassword (): React.JSX.Element { 
    const navigate = useNavigate()
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    function goToLogin () {
        navigate('/login')
    }

    function goToSignup(){
        navigate('/signup')
    }
    
    function goToForgotPassword(){
        navigate('/forgot-password')
    }

    function goToSupport(){
        navigate('/support')
    }

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid">
                    <div className="row no-space justify-content-center">
                        <div className="col-12 col-sm-8 no-space col-lg-8 MFormContainer">
                            <div className="loginFormContainer">
                                <div className="py-4" />
                                <h3 className="font-heading-6 text-center no-space green-color-main">PASSWORD RECOVERY</h3>
                                <p className="font-p no-space text-center font-regular">Please input the email you used to create the account. If it is in our database, a password reset email would be sent to you. Please note, the link is only valid for 30mins</p>
                                <div className="py-2" />
                                <div>
                                    <InputMain icon={<FontAwesomeIcon color="#aeaeae" icon={faEnvelope} />} value={email} onChange={setEmail} placeholder={'UserID/Email'} />
                                </div>               
                                <div className="py-2" />
                                <div className='no-space'>
                                    <button onClick={()=>{}} className='pointer green-bg-main login-button '>Send Reset Email</button>
                                </div>
                                <div className="py-2" />
                                <div>
                                    <p className="font-small text-center no-space"><span className="font-regular pointer">I didn't get Any Mail. Resend it</span> </p>
                                </div>
                                <div className="py-2" />

                                <div className="py-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


