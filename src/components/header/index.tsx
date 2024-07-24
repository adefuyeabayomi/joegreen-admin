import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import Overlay from '../overlay';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';

import "./style.css"
import logo from "../../assets/logo.png"

function Header(): React.JSX.Element {
    const [isOpen, setOpen] = useState(false)
    function toggleHamburger () {
        setOpen(!isOpen)
    }

    const navigate = useNavigate()

    function goToHome () {
        return navigate('/')
    }

    function goToManageOrders () {
        return navigate('/orders')
    }

    function goToRecords () {
        return navigate('/records')
    }

    function goToCustomerSupport () {
        return navigate('/support')
    }

    function goToManageMenu () {
        return navigate('/menu')
    }

    function goToManageBlog () {
        return navigate('/blog')
    }

    function goToLogin () {
        navigate('/login')
    }

    function goToSignup(){
        navigate('/signup')
    }

    
    

    return (
        <div className='container-fluid no-space'>
            <div className='row no-space align-items-center green-bg header-container'>
                <div className='w-max-content'>
                    <div className='logo-container'>
                        <img className='header-logo' src={logo} />
                    </div>
                </div>
                <div className='col d-none d-lg-block font-p font-light text-main'>
                    <div className='nav-container-desktop'>
                        <div className='row h-nav-container justify-content-center w-100'>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={goToHome}>Home</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={goToManageOrders}>Orders</p>
                            </div>
                            <div className='w-max-content'>
                                <p  className='header-link' onClick={goToRecords}>Records</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={goToCustomerSupport}>Customer Support</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={goToManageMenu}>Menu</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={goToManageBlog}>Blog</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='header-link' onClick={()=>{}}>Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col d-block d-lg-none'></div>
                <div className='d-none d-sm-block w-max-content no-space'>
                    <div className='row align-items-center'>
                        <div className='w-max-content header-login-button no-space'>
                            <button onClick={()=>{goToLogin()}} className='pointer font-regular text-main'>Login</button>
                        </div>
                        <div className='w-max-content button-container no-space'>
                            <button onClick={goToSignup} className='green-bg-main header-button'>Sign Up <FontAwesomeIcon icon={faUser} /> </button>
                        </div>
                    </div>
                </div>
                <div className='w-max-content d-block d-lg-none'>
                    <div className='nav-container-mobile'>
                        <Hamburger toggled={isOpen} color='#00A826' size={20} toggle={toggleHamburger} />
                        <Overlay isOpen={isOpen} toggle={toggleHamburger} >
                            <div className='py-4' />
                            <div className='row no-space align-items-center px-3'>
                                <div className='w-max-content no-space'>
                                    <div className='menu-image-container'></div>
                                </div>
                                <div className='col no-space'>
                                    <p style={{lineHeight: '0.8'}} className='font-p font-medium no-space'>Guest User</p>
                                    <small style={{lineHeight: '0.8'}} className='font-mini no-space'>Not Logged In</small>
                                </div>
                            </div>
                            <div className='mobileLinksContainer'>
                                <div>
                                    <p className='font-p font-medium'>Management Activities</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToHome()
                                    }}>Home</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToManageOrders()
                                    }}>Orders</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToRecords()
                                    }}>Records</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToCustomerSupport()
                                    }}>Customer Support</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToManageMenu()
                                    }}>Menu</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                        goToManageBlog()
                                    }}>Blog</p>
                                    <p className='font-small font-regular pointer' onClick={()=>{
                                        setOpen(!isOpen)
                                    }}>Analytics</p>
                                </div>
                                <div className='py-1' />
                            </div>
                            <div className='py-3' />
                                <div className='no-space px-3 py-2'>
                                    <button onClick={()=>{goToLogin(); setOpen(!isOpen)}} className='green-bg-main mobile-menu-login font-small font-regular'>Login <FontAwesomeIcon icon={faShoppingCart} /> </button>
                                </div>
                                <div className='no-space px-3 py-2'>
                                    <button onClick={()=>{goToSignup(); setOpen(!isOpen)}} className='mobile-menu-signin font-small font-regular'>Sign Up <FontAwesomeIcon icon={faShoppingCart} /> </button>
                                </div>
                            <div className='py-3' />
                                <div className='no-space px-3'>
                                    <button onClick={()=>{ setOpen(!isOpen) }} className='green-bg-main mobile-menu-login font-small font-regular'>Sign Out<FontAwesomeIcon icon={faShoppingCart} /> </button>
                                </div>
                            <div className='py-5' />
                        </Overlay>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header