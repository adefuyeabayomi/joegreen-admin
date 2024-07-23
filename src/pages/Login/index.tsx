import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default function Login (): React.JSX.Element { 
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
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid MFormContainer">
                    <div className="row no-space">
                        <div className="col-12 col-sm-6 no-space">
                            <div className="loginFormContainer">
                                <div className="py-2" />
                                <h3 className="font-heading-6 text-center no-space green-color-main">LOGIN</h3>
                                <p className="font-p no-space text-center font-regular">Please input your valid credentials</p>
                                <div className="py-2" />
                                <div>
                                    <InputMain icon={<FontAwesomeIcon color="#aeaeae" icon={faEnvelope} />} value={email} onChange={setEmail} placeholder={'UserID/Email'} />
                                </div>
                                <div className="py-1" />
                                <div>
                                    <InputMain icon={<FontAwesomeIcon color="#aeaeae" icon={faEnvelope} />} value={''} onChange={setEmail} placeholder={'Password'} />
                                </div>                
                                <div className="py-2" />
                                <div className='no-space'>
                                    <button onClick={()=>{}} className='pointer green-bg-main login-button '>Login</button>
                                </div>
                                <div className="py-2" />
                                <div>
                                    <p className="font-small text-center no-space">Forgot Password? <span className="font-regular pointer" onClick={goToForgotPassword}>Click to recover it now.</span> </p>
                                </div>
                                <div className="py-2" />
                                <div className="green-divider"></div>
                                <div className="py-2" />
                                <div className="socialButtonContainer pointer container-fluid">
                                    <div className="row no-space align-items-center">
                                        <div className="w-max-content no-space">G</div>
                                        <div className="col no-space font-small">Signin With Google</div>
                                    </div>
                                </div>
                                <div className="socialButtonContainer pointer container-fluid">
                                    <div className="row no-space align-items-center">
                                        <div className="w-max-content no-space">F</div>
                                        <div className="col no-space font-small">Signin With Facebook</div>
                                    </div>
                                </div>  
                                <div className="socialButtonContainer pointer container-fluid">
                                    <div className="row no-space align-items-center">
                                        <div className="w-max-content no-space">A</div>
                                        <div className="col no-space font-small">Signin With Apple</div>
                                    </div>
                                </div>
                                <div className="py-2" />
                            </div>
                        </div>
                        <div className="formSupport col-12 col-sm-6 no-space align-items-center row">
                        <div className="py-5 py-md-0" />
                            <div className="py-5 py-md-0" />
                            <div>
                                <div className="center text-center" style={{width: '80%'}}>
                                    <h4 style={{color: 'white'}} className="font-heading-6 text center">Don't have an account? Sign Up Now!</h4>
                                </div>
                                <div className="center">
                                    <button className="FSupportButton font-medium pointer" onClick={goToSignup}>Sign Up</button>
                                </div>
                            </div>
                            <div className="py-5 py-md-0" />
                            <div className="py-5 py-md-0" />
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


