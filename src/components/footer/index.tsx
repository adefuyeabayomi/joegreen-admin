import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

import instagram from "../../assets/Frame 32.png"
import facebook from "../../assets/Frame 31.png"
import twitter from "../../assets/Frame 34.png"
import youtube from "../../assets/Frame 33.png"
import linkedIn from '../../assets/linkedin-logo.png'
import tiktok from '../../assets/tiktok-logo.png'


import './style.css'

function Footer(): React.JSX.Element {
    
    const navigate = useNavigate()
    function goToHome () {
        return navigate('/')
    }
    function goToOrders () {
        return navigate('/order')
    }
    function goToTrainings () {
        return navigate('/trainings')
    }
    function goToAbout () {
        return navigate('/about')
    }    
    function goToContact () {
        navigate('/#contact')
   }
   
   function goToBlog () {
    return navigate('/blog')
}

    return (
        <div id='footer'>
            <div className='mainSpacing'>
                <div className='py-2'></div>
                <div className='upperFooter'>
                    <div className='d-none'></div>
                    <div className='text-main text-center'>
                            <p className='font-p font-medium'>QUICK LINKS</p>
                        <div className='row no-space align-items-center justify-content-center flex-column flex-md-row'>
                            <p className='font-small w-max-content pointer' onClick={goToHome}>HOME</p>
                            <p className='font-small w-max-content pointer' onClick={goToOrders}>ORDER</p>
                            <p className='font-small w-max-content pointer' onClick={goToTrainings}>TRAINING PROGRAMS</p>
                            <p className='font-small w-max-content pointer' onClick={goToBlog}>BLOG</p>
                            <p className='font-small w-max-content pointer' onClick={goToAbout}>ABOUT US</p>
                            <p className='font-small w-max-content pointer' onClick={goToContact}>CONTACT US</p>
                        </div>
                    </div>
                    <div className='py-2' />
                    <div className='text-center'>
                    <p className='font-p font-medium'>FOLLOW ON SOCIAL MEDIA</p>
                        <div className='row no-space align-items-center justify-content-center'>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://www.instagram.com/joegreencafe' target='_blank'>INSTAGRAM <img src={instagram} className='socialIcon' /></a></p>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://www.facebook.com/profile.php?id=61559723398072&mibextid=ZbWKwL' target='_blank'>FACEBOOK <img src={facebook} className='socialIcon' /></a></p>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://x.com/Joegreen_Cafe?t=qHMnfQEooac040PHfp6a3A&s=09' target='_blank'>TWITTER <img src={twitter} className='socialIcon' /></a></p>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://x.com/Joegreen_Cafe?t=qHMnfQEooac040PHfp6a3A&s=09' target='_blank'>LINKEDIN <img src={linkedIn} className='socialIcon' /></a></p>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://x.com/Joegreen_Cafe?t=qHMnfQEooac040PHfp6a3A&s=09' target='_blank'>TIKTOK <img src={tiktok} className='socialIcon' /></a></p>
                            <p className='font-small w-max-content pointer'><a className='text-main' href='https://youtube.com/@joegreencafeteriaservice?si=KsGhmTILyEFz-cv9' target='_blank'>YOUTUBE <img src={youtube} className='socialIcon' /></a></p>
                        </div>
                    </div>                    
                <div className='py-3'></div>
                </div>
            </div>
                <div className='lowerFooter mainSpacing deep-green-bg'>
                    <div className='text-center'>
                        <p className='font-small font-regular'>&copy;copyright of Five and Six Technologies. 2024 June.</p>
                        <p className='font-small font-regular'>Privacy Policy - Terms Of Service</p>
                    </div>
                    <div className='py-1'></div>
                </div>
        </div>
    )
}

export default Footer