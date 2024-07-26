import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";
import { useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import { isValidEmail, generateRandomString, isStringLengthGreaterThan } from "../../functions/utils";
import { authService } from "joegreen-service-library";

import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
 
import './style.css' 

export default function PasswordReset (): React.JSX.Element {   
    const navigate = useNavigate();
    const { setLoading, setLoadingText } = useLoading();
    const {triggerInfo,triggerError,triggerSuccess} = useNotificationTrigger() 
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const resetToken = searchParams.get('resetToken'); // Replace 'someParam' with your query parameter key
  console.log({resetToken})
    const resetPasswordError = () => {
      setPasswordError(false);
    };

    function goToLogin () {
        navigate('/login')
    }

    async function resetPassword() {

        if (!isStringLengthGreaterThan(password, 7)) {
          setPasswordError(true);
          return;
        }
    
        // If inputs are valid, proceed with signup
        setLoading(true);
        setLoadingText("Updating Password...");
        try {
          const response = await authService.resetPassword(resetToken,password);
          triggerInfo({title: 'Success',message: 'Your password has been saved successfully. You can now login with your new password'})
          navigate('/login');
        } catch (error) {
          triggerError({title: 'Reset Error',message: error.message})
          console.error("Error Updating Password:", error);
        } finally {
          setLoading(false);
        }
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
                                <InputMain onFocus={resetPasswordError} type="password" showError={passwordError} errorMessage="Password must be at least 8 characters." value={password} onChange={setPassword} placeholder={'Password'} />
                            </div>               
                            <div className="py-2" />
                            <div className='no-space'>
                                <button onClick={resetPassword} className='pointer green-bg-main login-button'>Reset Password</button>
                            </div>
                            <div className="py-5" />
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


