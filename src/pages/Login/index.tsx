import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";
import { useAuth } from "../../navigation/AuthContext";
import { useLoading } from "../../components/utils/loadingContext";
import { isValidEmail, generateRandomString, isStringLengthGreaterThan } from "../../functions/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import facebookIcon from '../../assets/icons8-facebook.svg'
import googleIcon from '../../assets/icons8-google.svg'
import xIcon from '../../assets/icons8-x.svg'

import './style.css' 
import { authService } from "joegreen-service-library";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
 
export default function Login (): React.JSX.Element {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { setLoading, setLoadingText } = useLoading();
    const {triggerInfo,triggerError,triggerSuccess} = useNotificationTrigger() 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const resetEmailError = () => {
        setEmailError(false);
      };
    
      const resetPasswordError = () => {
        setPasswordError(false);
      };
    
    function goToSignup(){
        navigate('/signup')
    }
    function goToForgotPassword(){
        navigate('/forgot-password')
    }

    async function sendLogin() {
        // Validate inputs
        if (!isValidEmail(email)) {
          setEmailError(true);
          return;
        }
    
        if (!isStringLengthGreaterThan(password, 7)) {
          setPasswordError(true);
          return;
        }
    
        // If inputs are valid, proceed with signup
        setLoading(true);
        setLoadingText("Logging in...");
    
        try {
          const response = await authService.login(email, password);
          login(response.token,email);
          triggerInfo({title: 'Login Success',message: 'Your Login is successful. You can now use the full functions of the site'})
          navigate('/');
        } catch (error) {
            triggerError({title: 'Login Error',message: error.message})
          console.error("Login error:", error);
        } finally {
          setLoading(false);
        }
      }

    async function handleResendVerificationEmail(email) {
        try {
          const response = await authService.resendVerificationEmail(email);
          console.log('Verification email sent:', response);
        } catch (error) {
          console.error('Error resending verification email:', error.message);
        }
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
                                    <InputMain onFocus={resetEmailError} showError={emailError} errorMessage="Email is invalid" icon={<FontAwesomeIcon color="#aeaeae" icon={faAt} />} value={email} onChange={setEmail} placeholder={'UserID/Email'} />
                                </div>
                                <div className="py-1" />
                                <div>
                                    <InputMain onFocus={resetPasswordError} type="password" showError={passwordError} errorMessage="Password must be at least 8 characters." value={password} onChange={setPassword} placeholder={'Password'} />
                                </div>                  
                                <div className="py-2" />
                                <div className='no-space'>
                                    <button onClick={sendLogin} className='pointer green-bg-main login-button '>Login</button>
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
                                        <div className="w-max-content no-space"><img className="sIcon" src={googleIcon} /></div>
                                        <div className="col px-1 font-small">Signin With Google</div>
                                    </div>
                                </div>
                                <div className="socialButtonContainer pointer container-fluid">
                                    <div className="row no-space align-items-center">
                                        <div className="w-max-content no-space"><img className="sIcon" src={facebookIcon} /></div>
                                        <div className="col px-1 font-small">Signin With Facebook</div>
                                    </div>
                                </div>  
                                <div className="socialButtonContainer pointer container-fluid">
                                    <div className="row no-space align-items-center">
                                        <div className="w-max-content no-space"><img className="sIcon" src={xIcon} /></div>
                                        <div className="col px-1 font-small">Signin With Apple</div>
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
                                <div className="py-2"></div>
                                <div className="center">
                                    <button className="FSupportButton font-medium pointer" onClick={()=>handleResendVerificationEmail('adefuyeabayomi16@gmail.com')}>Resend Verification Mail</button>
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


