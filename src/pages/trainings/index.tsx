import React,{ useState, useEffect } from 'react'
import heroImage from '../../assets/trainingHero.png'
import { useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

import TrainingItem from '../../components/trainingsItem'

import tipDots from '../../assets/tipDots.png'
import './style.css'


import image_1 from "../../assets/image1.png"
let image1 = <img src={image_1} />

function Trainings(): React.JSX.Element {
    const navigate = useNavigate();
    function goToEnroll(){
        navigate("/training-enrollment")
    }
    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, []);
    return (
        <main id='training'>
            <div className='mainSpacing'>
                <div className='training-herosection'>
                    <div className='py-2 py-lg-4'/>
                <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container'>
                                    <h1 className='no-space font-black d-md-none d-lg-block font-heading-3 text-main'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6 text-main'>Best in class culinary training programs.</h1>                                    
                                    <p className='font-p text-main'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='hero-image d-block' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-2 py-lg-4' />
                </div>
                <div>
                    <div className='py-2 py-lg-4' />
                    <div className='training-heading'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>Enroll</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>ENROLL IN A <span className='delicious'> TRAINING PROGRAM.</span> </div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>ENROLL IN   A <span className='delicious'>TRAINING PROGRAM.</span> </div>
                        <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                    </div>
                           
                    <div className='py-2 py-lg-4' />                    
                </div>
                <div>
                    <div className='py-2 py-lg-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='HOSPITALITY/CATERING' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CULINARY ARTS' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='PASTRY, DESERTS, PUDDING AND SNACKS' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='BEVERAGES AND DRINKS' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>     
                        <div className='py-2 py-lg-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='BREAD BAKING AND PACKAGING' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CAKES' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='TYPES OF ICING FOR CAKE DECORATIONS' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='WEDDING CAKE' image={image1} text='Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i Lorem ipsum dolor sit amet cnsectur i.'  />
                       </div>     
                       
                       <div className='py-2 py-md-4' />                      
                    <div className='py-2 py-lg-4' />                    
                </div>
            </div>
        </main>
    )
}

export default Trainings