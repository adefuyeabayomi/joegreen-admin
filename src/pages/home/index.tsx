import React,{ useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll, Element } from 'react-scroll';
import scrollToElement from 'scroll-to-element';
import HowItem from '../../components/HowItem';
//images
import tipDots from '../../assets/tipDots.png'
import caretWhite from '../../assets/caret-white.png'

import './style.css'

function Home(): React.JSX.Element {    
    const navigate = useNavigate()
    const location = useLocation();
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


      useEffect(() => {
        console.log({location})
        if (location.hash === '#contact') {
            scrollToElement('#contact', {
                offset: -100,
                ease: 'in-out-sine',
                duration: 1500
            })
        }
        else {
        scroll.scrollToTop({
          duration: 1500, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
        }
      }, [location])

    return (
        <main id='home' className='text-main'>

            <div id='cta-banner' className='mainSpacing'>
                <div className='bannerSectionMain '>
                    <div className='ctaBannerContainer'>
                        <div className='ctaBannerContents py-5 px-2'>
                            <p className='font-subtitle d-md-none font-bold text-center'>JOEGREEN CAFETERIA ADMIN MANAGEMENT PORTAL.</p>
                            <p className='font-heading-6 d-none d-md-block font-bold text-center'>JOEGREEN CAFETERIA ADMIN MANAGEMENT PORTAL.</p>
                            <p className='font-p font-regular text-center'></p>
                            <button className='cta-button-container center' onClick={goToLogin}> 
                                <div className='w-max-content center pointer row no-space align-items-center'>
                                    <div className='w-max-content no-space'><p className='font-p tipTitle no-space'>Sign In</p></div>
                                    <div className='w-max-content no-space'><img className='caretIcon no-space' src={caretWhite} /></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='howItWorks'>
                <div className='howItWorksMainContainer mainSpacing'>
                    <div className='howItWorksContents'>
                        <div className='howItWorksTextsContainer text-center'>
                            <div className='tipContent w-max-content center row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>FST Express System</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer d-sm-none text-main font-subtitle-big font-medium'>AVAILABLE MANAGEMENT <span className='delicious'>SERVICES</span></div>
                            <div className='sectionHeadlineContainer ease d-none d-sm-block text-main font-heading-5 font-medium'>AVAILABLE MANAGEMENT <span className='delicious'>SERVICES</span>.</div>
                            <div className='sectionAfterTextContainer ease'><p className='font-p text-main'>Go to tasks and Management sections</p></div>
                            <div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={goToManageOrders} buttonText={'Go to Manage Orders'} title='Manage User Orders' text='Efficiently track and manage all incoming orders in real-time'></HowItem>
                                        </div>                 
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4 how_img_special'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={goToRecords} buttonText={'View Records'} title='View Order Records' text='Access detailed records of all past orders for analytics and insights.'></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={goToManageMenu} buttonText={'Manage Dishes & Menu'} title='Manage Restaurant Dishes & Menu' text="Update and organize your restaurant's menu effortlessly."></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={goToManageBlog} buttonText={'Manage Site Blog'} title='Manage Blog Content' text='Publish and curate engaging content for your audience.'></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={()=>{}} buttonText={'View Site Analytics'} title='Site Analytics' text='Monitor website performance and visitor behavior with comprehensive analytics.'></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='HIContainerMain'>
                                            <HowItem actionFn={goToCustomerSupport} buttonText={'Go To Customer Support'} title='Customer Support' text='Provide seamless assistance and support to your valued customers.'></HowItem>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home

