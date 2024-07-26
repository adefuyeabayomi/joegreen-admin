import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";
import { isValidEmail } from "../../functions/utils";
import { authService } from "joegreen-service-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";

import './style.css' 

export default function ForgotPassword (): React.JSX.Element {   
  const navigate = useNavigate();
    const { setLoading, setLoadingText } = useLoading();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const {triggerInfo,triggerError,triggerSuccess} = useNotificationTrigger() 
  
    const resetEmailError = () => {
      setEmailError(false);
    };
    async function sendForgotPassword() {
        // Validate inputs
        if (!isValidEmail(email)) {
          setEmailError(true);
          return;
        }
    
        // If inputs are valid, proceed with signup
        setLoading(true);
        setLoadingText("Sending reset link...");
    
        try {
          const response = await authService.forgotPassword(email);
          triggerInfo({title: 'Email Sent Successfully',message: 'Your password reset link has been sent. Use it to reset your password.'})
          navigate('/');
        } catch (error) {
          console.error("Error sending reset link:", error);
          triggerError({title: 'An Error Occured',message: error.message})
        } finally {
          setLoading(false);
        }
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
                                    <InputMain onFocus={resetEmailError} showError={emailError} errorMessage="Email is invalid" icon={<FontAwesomeIcon color="#aeaeae" icon={faAt} />} value={email} onChange={setEmail} placeholder={'UserID/Email'} />
                                </div>
                                <div className="py-2" />
                                <div className='no-space'>
                                    <button onClick={sendForgotPassword} className='pointer green-bg-main login-button '>Send Reset Email</button>
                                </div>
                                <div className="py-2" />
                                <div>
                                    <p className="font-small text-center no-space" onClick={sendForgotPassword}><span className="font-regular pointer">I didn't get Any Mail. Resend it</span> </p>
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


