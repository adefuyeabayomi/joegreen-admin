import React,{ useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll, Element } from 'react-scroll';
import scrollToElement from 'scroll-to-element';
import FeaturedCard from '../../components/featuredCard';
import HowItem from '../../components/HowItem';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewItem from '../../components/reviewItem';
import ContactItem from '../../components/contactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//images
import heroImage from "../../assets/hero-img.png"
import tipDots from '../../assets/tipDots.png'
import caretRight from '../../assets/caret right.png'
import caretPink from '../../assets/caret-pink.png'
import caretWhite from '../../assets/caret-white.png'
import image_1 from "../../assets/image1.png"
import image_2 from "../../assets/image2.png"
import image_3 from "../../assets/image3.png"
import image_4 from "../../assets/image4.png"
import image_5 from "../../assets/image5.png"
import image_6 from "../../assets/image6.png"
import image_7 from "../../assets/image7.png"
import image_8 from "../../assets/image8.png"
import image_9 from "../../assets/image9.png"
import image_10 from "../../assets/image10.png"
import image_11 from "../../assets/image11.png"
import image_12 from "../../assets/image12.png"
import image_13 from "../../assets/image13.png"
import image_14 from "../../assets/image14.png"
import image_15 from "../../assets/image15.png"
import image_16 from "../../assets/image16.png"
import image_17 from "../../assets/image17.png"

let image1 = <img src={image_1} />
let image2 = <img src={image_2} />
let image3 = <img src={image_3} />
let image4 = <img src={image_4} />
let image5 = <img src={image_5} />
let image6 = <img src={image_6} />
let image7 = <img src={image_7} />
let image8 = <img src={image_8} />
let image9 = <img src={image_9} />
let image10 = <img src={image_10} />
let image11 = <img src={image_11} />
let image12 = <img src={image_12} />
let image13 = <img src={image_13} />
let image14 = <img src={image_14} />
let image15 = <img src={image_15} />
let image16 = <img src={image_16} />
let image17 = <img src={image_17} />
import './style.css'

function Home(): React.JSX.Element {    
    const navigate = useNavigate()
    const location = useLocation();

    function goToOrders () {
        return navigate('/order')
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
            <div className='mainSpacing'>

                <div className='hero-section'>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container '>
                                    <p className='hAccentItem font-regular'>Satisfy those cravings here</p>
                                    <div className='py-2' />
                                    <h1 className='text-main headline'><span className='green-color-main'>Delicious</span> Meals That <span className='green-color-main'>Delight</span> Your Senses.</h1>
                                    <p className='font-p text-main'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                    <div className='py-2' />
                                    <div className='py-2 py-sm-0 hbcontainer'>
                                        <button className='headlinebutton font-p' onClick={goToOrders}>Order Now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 no-space pt-4 pt-md-0'>
                                <img className='d-block hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

            <div id='featuredDishes'>
                <div className='featuredMainContainer green-bg mainSpacing'>
                    <div className='featuredContents'>
                            <div className='tipContent row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>DISCOVER</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                            <div className='featuredItemsContainer'>
                                <div className='row no-space'>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container firstchild center'>
                                            <FeaturedCard image={image4} title='Rice Specials: Flavorful Jollof, Savory Fried Rice, White Rice Stew' actionFn={goToOrders} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image2} title='Pasta Delights: Creamy Alfredo, Zesty Marinara, Pesto & More' actionFn={goToOrders} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image3} title='Light Cravings: Savory BBQ and Sauce served to satisfy your buds.' actionFn={goToOrders} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image1} title='Nigerian Soups: Rich Egusi, Ogbono, Banga, Vegetable & More' actionFn={goToOrders} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-3'></div>
                            <div className='orderspageLinkContainer' onClick={goToOrders}>
                                <div className='pointer new-delight row no-space align-items-center'>
                                    <div className='no-space'><p className='font-p font-regular text-main'>Visit our orders page to view the menu <FontAwesomeIcon className='text-main' icon={faCaretRight} /></p></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
            <div id='howItWorks'>
                <div className='howItWorksMainContainer mainSpacing'>
                    <div className='howItWorksContents'>
                        <div className='howItWorksTextsContainer text-center'>
                            <div className='tipContent w-max-content center row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>CONVINIENT</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer d-sm-none text-main font-subtitle-big font-medium'>HOW OUR <span className='delicious'>DELIVERY SERVICE</span> WORKS</div>
                            <div className='sectionHeadlineContainer ease d-none d-sm-block text-main font-heading-5 font-medium'>HOW OUR <span className='delicious'>DELIVERY SERVICE</span> WORKS.</div>
                            <div className='sectionAfterTextContainer ease'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                            <div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <div className='HIContainerMain'>
                                            <HowItem image={image8} title='Browse through the menu' text='Choose your pick from our menu.'></HowItem>
                                        </div>                                        
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 how_img_special'>
                                        <div className='HIContainerMain'>
                                            <HowItem image={image7} title='Place your Order' text='Check and confirm your order'></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <div className='HIContainerMain'>
                                            <HowItem image={image5} title='Make Payment' text='Proceed to payment. Pay for the order'></HowItem>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <div className='HIContainerMain'>
                                            <HowItem image={image6} title='Fast Delivery To You' text='Now wait. Your meal is on the way!'></HowItem>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4'></div>
                            <div>                                    
                                <div className='py-2 py-sm-0 col-12 col-md-8 col-lg-6 center' onClick={goToOrders}>
                                    <button className='moreMenuBtn font-p' onClick={goToOrders}>See The Menu <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reviewsContainer'>
                <div className='green-bg mainSpacing'>
                    <div className='reviewsContents'>
                        <div className='tipContent w-max-content center row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>OUR CUSTOMERS</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer d-sm-none text-main text-center font-subtitle-big font-medium'>REVIEWS FROM <span className='delicious'>OUR CUSTOMERS.</span></div>
                        <div className='sectionHeadlineContainer ease d-none d-sm-block  text-center text-main font-heading-5 font-medium'>REVIEWS FROM <span className='delicious'>OUR CUSTOMERS.</span></div>
                        <div className='sectionAfterTextContainer ease text-center'><p className='font-p text-main'>See what our loyal customers have to say about their experiences with our services.</p></div>
                        <div className='py-3' />
                       
                        <div>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2500} showArrows={true}>
                                <div>
                                    <ReviewItem 
                                    name='Olaniyi Joseph' 
                                    occupation='Staff at UBA, Arida, Ikotun.' 
                                    image={image9} 
                                    review="“I have been a loyal customer of Joe's Restaurant for years. The food is always delicious and the delivery service is prompt and reliable.”"  
                                    />
                                </div>
                                <div>
                                    <ReviewItem
                                        name='Adesola Adekunle'
                                        occupation='Accountant at GTBank, Victoria Island.'
                                        image={image10}
                                        review="“Joe's Restaurant never disappoints! Their dishes are consistently flavorful and the portions are generous. Highly recommended!”"
                                        />
                                </div>
                                <div>
                                    <ReviewItem
                                        name='Chidinma Okonkwo'
                                        occupation='IT Specialist at Chevron, Lekki.'
                                        image={image12}
                                        review="“I always look forward to ordering from Joe's Restaurant. Their pepper soup is my favorite comfort food after a long day at work. Delicious every time!”"
                                        />
                                </div>
                                <div>
                                    <ReviewItem
                                        name='Bisi Ogunleye'
                                        occupation='Teacher at Corona School, Gbagada.'
                                        image={image13}
                                        review="“I recently hosted a party and ordered catering from Joe's Restaurant. The guests couldn't stop raving about the delicious food! Thank you for making my event memorable.”"
                                        />
                                </div>
                                <div>
                                    <ReviewItem
                                        name='Emeka Nwosu'
                                        occupation='Marketing Manager at MTN Nigeria, Surulere.'
                                        image={image11}
                                        review="“Joe's Restaurant is my go-to spot for authentic Nigerian cuisine. Their jollof rice is the best I've ever tasted. Keep up the great work!”"
                                        />
                                </div>
                                <div>
                                    <ReviewItem
                                        name='Amina Ibrahim'
                                        occupation='Doctor at Lagos University Teaching Hospital (LUTH), Idi-Araba.'
                                        image={image14}
                                        review="“As a busy professional, I appreciate the convenience of ordering from Joe's Restaurant. The online ordering process is seamless and the delivery is always on time. Plus, the food is absolutely delicious!”"
                                        />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div id='cta-banner' className='mainSpacing'>
                <div className='bannerSectionMain '>
                    <div className='ctaBannerContainer'>
                        <div className='ctaBannerContents py-5 px-2'>
                            <p className='font-subtitle d-md-none font-bold text-center'>DELICIOUS FOOD, AMAZING DINING EXPERIENCE.</p>
                            <p className='font-heading-6 d-none d-md-block font-bold text-center'>DELICIOUS FOOD, AMAZING DINING EXPERIENCE.</p>
                            <p className='font-p font-regular text-center'>What are you waiting for? Place an order now!</p>
                            <button className='cta-button-container center' onClick={goToOrders}> 
                                <div className='w-max-content center pointer row no-space align-items-center'>
                                    <div className='w-max-content no-space'><p className='font-p tipTitle no-space'>Order Now</p></div>
                                    <div className='w-max-content no-space'><img className='caretIcon no-space' src={caretWhite} /></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contact' className='contactSectionMain green-bg'>
            <Element name={'contact_target'} />
                <div className='mainSpacing'>
                    <div className='CSContainer'>
                        <div>
                        <div className='tipContent w-max-content center row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>CONTACT US</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer d-sm-none text-main text-center font-subtitle-big font-medium'><span className='delicious'>GET IN TOUCH</span> WITH US.</div>
                        <div className='sectionHeadlineContainer ease d-none d-sm-block  text-center text-main font-heading-5 font-medium'><span className='delicious'>GET IN TOUCH</span> WITH US.</div>
                        <div className='sectionAfterTextContainer ease text-center'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>

                        </div>
                        <div>
                            <div className='row no-space align-items-center justify-content-center'>
                                <div className='col-12 col-md-4 col-lg-3'>
                                    <ContactItem image={image15} title='Email: ' text='joegreencafeteriaservice@gmail.com'></ContactItem>
                                </div>
                                <div className='col-12  col-md-4 col-lg-3'>
                                    <ContactItem image={image16} title='Phone: ' text='0916478 0187, 07043536861'></ContactItem>                                    
                                </div>
                                <div className='col-12 col-md-4 col-lg-3'>
                                    <ContactItem image={image17} title='Location: ' text='25 Trans-woji road Port Harcourt. Rivers State'></ContactItem>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home

