import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default function PasswordReset (): React.JSX.Element { 
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
                <div>
                    <div className="col-11 col-sm-8 col-lg-6 no-space MFormContainer center">
                        <div className="loginFormContainer">
                            <div className="py-4" />
                            <h3 className="font-heading-6 text-center no-space green-color-main">PASSWORD RESET</h3>
                            <p className="font-p no-space text-center font-regular">Create a new password for your account. Make sure it is a strong password to improve your account security</p>
                            <div className="py-2" />
                            <div>
                                <InputMain icon={<FontAwesomeIcon color="#aeaeae" icon={faEnvelope} />} value={email} onChange={setEmail} placeholder={'New Password'} />
                            </div>               
                            <div className="py-2" />
                            <div className='no-space'>
                                <button onClick={()=>{}} className='pointer green-bg-main login-button'>Reset Password</button>
                            </div>
                            <div className="py-2" />
                            <div className="py-5" />
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


