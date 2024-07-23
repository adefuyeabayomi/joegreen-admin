import React,{ useState,useEffect } from 'react'
import heroImage from '../../assets/trainingHero.png'
import { animateScroll as scroll } from 'react-scroll';

import './style.css'

function About(): React.JSX.Element {
    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, []);
    return (
        <div id='about'>
            <div className='mainSpacing'>
                <div className='about-herosection'>
                    <div className='py-4 py-lg-6'/>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container text-main'>
                                    <h1 className='no-space font-black d-md-none font-heading-6'>Learn More About Us At Joes Green Catering Services.</h1>
                                    <h1 className='no-space font-black d-none d-lg-block font-heading-3'>Learn More About Us At Joes Green Catering Services.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Learn More About Us At Joes Green Catering Services.</h1>                                    
                                    <p className='font-p'>Joe's Green Catering is one of Lagos's most prominent food vendors. What began in a small location has now spread to every nook and cranny of Lagos, becoming a beloved favorite among Lagosians</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space TItext-content-left'>
                                <img className='d-block hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-4 py-lg-6' />
                </div>
            </div>

            <div className='mainSpacing green-bg'>
                <div className='about-herosection'>
                    <div className='py-4 py-lg-6'/>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-row-reverse no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space TItext-content-left'>
                                <div className='htext-container text-main'>
                                    <h1 className='no-space font-black d-md-none font-heading-6'>Our Story.</h1>
                                    <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Our Story.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Our Story.</h1>                                    
                                    <p className='font-p'>Joe's Green Catering began with a simple dream: to share the joy of delicious, home-cooked meals with the people of Lagos. From our humble beginnings in a small kitchen, we dedicated ourselves to perfecting recipes that bring people together. Over the years, word of our mouthwatering dishes spread, and what started as a local favorite quickly blossomed into a citywide sensation. Today, Joe's Green Catering is proud to serve every corner of Lagos, delivering culinary excellence and warm, friendly service that makes every meal feel special.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='d-block hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-4 py-lg-6' />
                </div>
            </div>

            <div className='mainSpacing'>
                <div className='about-herosection'>
                        <div className='py-4 py-lg-6'/>
                        <div className='hContainerMain container-fluid no-space'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 col-12 no-space'>
                                    <div className='htext-container text-main'>
                                        <h1 className='no-space font-black d-md-none font-heading-6'>Mission and Values.</h1>
                                        <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Mission and Values.</h1>
                                        <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Mission and Values.</h1>                                    
                                        <p className='font-p'>At Joe's Green Catering, our mission is to bring the joy of exceptional food to every table. We are dedicated to crafting delicious, high-quality meals that celebrate the rich culinary traditions of Lagos while embracing innovation and creativity. Our goal is to provide an unforgettable dining experience, whether it’s a casual meal at home or a grand celebration.<br></br> Our Values revolves around Quality,Customer Satisfaction,Community,Innovation,Integrity</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 pt-4 pt-md-0 no-space TItext-content-left'>
                                    <img className='d-block hero-image' src={heroImage} />
                                </div>
                            </div>
                        </div>  
                        <div className='py-4 py-lg-6' />
                    </div>
            </div>            

            <div className='mainSpacing green-bg'>
                <div className='about-herosection'>
                        <div className='py-4 py-lg-6'/>
                        <div className='hContainerMain container-fluid no-space'>
                            <div className='row flex-row-reverse no-space align-items-center'>
                                <div className='col-md-6 col-12 no-space'>
                                    <div className='htext-container text-main TItext-content-left'>
                                        <h1 className='no-space font-black d-md-none font-heading-6'>Awards and Recognition.</h1>
                                        <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Awards and Recognition.</h1>
                                        <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Awards and Recognition.</h1>
                                        <div className='font-p font-regular'>
                                            <p><span className='font-medium'>Best Catering Service in Lagos (2022)</span> - Lagos Culinary Awards</p>
                                            <p><span className='font-medium'>Outstanding Food Vendor (2021)</span> - Lagos Food Festival</p>
                                            <p><span className='font-medium'>Top 10 Must-Try Caterers in Lagos (2020)</span> - Lagos Eats Magazine</p>
                                            <p><span className='font-medium'>Excellence in Customer Service (2019)</span> - Nigerian Hospitality Awards</p>
                                            <p><span className='font-medium'>Innovation in Culinary Arts (2018)</span> - Lagos Chef Association</p>
                                        </div> 
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                    <img className='d-block hero-image' src={heroImage} />
                                </div>
                            </div>
                        </div>  
                        <div className='py-4 py-lg-6' />
                    </div>
            </div>

                


        </div>
    )
}

export default About