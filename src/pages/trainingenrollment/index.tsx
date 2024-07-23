import React,{ useState } from 'react'

import caretWhite from '../../assets/caret-white.png'
import './style.css'

import tipDots from '../../assets/tipDots.png'
function TrainingEnrollment(): React.JSX.Element {
    const [fullname,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNo, setPhoneNo]=useState('')
    return (
        <div id='enrollment'>
            <div className='mainSpacing'>
                <div className='mainVerticalSpace'>
                    <div className='ordersBannerContainer'>
                        <div className='ctaBannerContents py-5 px-2' style={{lineHeight: 1.5}}>
                            <p className='font-subtitle-big d-md-none font-bold text-center'>Fill the form with valid and correct details to register for the training program.</p>
                            <p className='font-heading-6 d-none d-md-block font-bold text-center'>Fill the form with valid and correct details to register for the training program.</p>
                        </div>
                    </div>
                </div>
                <div className='formContainer'>
                    <div>
                        <div className='training-heading'>
                            <div className='tipContent row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>Enroll</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                        </div>
                    </div>
                    <div id='form' className='font-p text-main' >
                        
                        <div className='py-2' />
                        <div>
                            <label>Full Name: </label>
                            <div className='py-1' />
                            <input id='name' className='enrollment-input' />
                        </div>
                        <div className='py-2' />
                        <div>
                            <label>Email: </label>
                            <div className='py-1' />
                            <input id='name' className='enrollment-input' />
                        </div>
                        <div className='py-2' />
                        <div>
                            <label>Phone Number: </label>
                            <div className='py-1' />
                            <input id='name' className='enrollment-input' />
                        </div>

                        <div className='py-2' />
                        <div className='py-2' />
                        
                        <div>
                        <button className='ti-button-container'> 
                            <div className='w-max-content center pointer row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-small tipTitle'>Enroll Now</p></div>
                                <div className='w-max-content no-space'><img className='caretIcon' src={caretWhite} /></div>
                            </div>
                        </button>     
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='py-2' />
            <div className='py-2' />
            <div className='py-2' />
        </div>
    )
}

export default TrainingEnrollment