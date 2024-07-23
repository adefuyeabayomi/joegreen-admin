import React,{ useState,useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { Button, notification, Space, Spin } from 'antd';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import tipDots from '../../assets/tipDots.png'
import OrderItem from '../../components/orderItem'
import Overlay from '../../components/overlay';
 
import { useNavigate } from 'react-router-dom';

import image_1 from '../../assets/image1.png'
let image1 = <img src={image_1} />

import image_4 from '../../assets/image4.png'
let image4 = <img src={image_4} />

import image_18 from '../../assets/image18.png'
let image18 = <img src={image_18} />

import image_19 from '../../assets/image19.png'
let image19 = <img src={image_19} />

import image_20 from '../../assets/image20.png'
let image20 = <img src={image_20} />

import image_21 from '../../assets/image21.png'
let image21 = <img src={image_21} />

import image_22 from '../../assets/image22.png'
let image22 = <img src={image_22} />

import image_23 from '../../assets/image23.png'
let image23 = <img src={image_23} />

import image_24 from '../../assets/image24.png'
let image24 = <img src={image_24} />

import image_25 from '../../assets/image25.png'
let image25 = <img src={image_25} />

import image_26 from '../../assets/image26.png'
let image26 = <img src={image_26} />

import './style.css'
import useNotification from 'antd/es/notification/useNotification';
type NotificationType = 'success' | 'info' | 'warning' | 'error';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

function Order(): React.JSX.Element {
    const navigate = useNavigate()
    function goToAddToCart(){
      navigate('/add-to-cart')
    }
    const [spinning,setSpinning] = useState(false)
    const [api,contextHolder] = notification.useNotification()
    const [customerName , setCustomerName]= useState('')
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('')
    const openNotificationWithIcon = (type: NotificationType,placement: NotificationPlacement,title: string,description: string) => {
        api[type]({
          message: title,
          placement,
          duration: 7,
          description
        })
      }
    let [currentMeal,setCurrentMeal] = useState(
        {
            price: '',
            image: image1,
            title: '',
            description: '',
            actionFn: () => {openOrder('jollofRiceAndFriedRice', 'riceSpecials')},
        }
    )
    const [currentAddons,setCurrentAddons] = useState([])
    const [currentAddonsAmounts,setCurrentAddonsAmount]= useState([])
    const updateAddonCount = (name='', action='') => {
        setCurrentAddonsAmount(prevCounts => {
          // Find the addon by name
          const updatedCounts = prevCounts.map(addon => {
            if (addon.name === name) {
              // Increase or decrease the count based on the action
              return {
                ...addon,
                count: action === 'increase' ? addon.count + 1 : Math.max(addon.count - 1, 0)
              };
            }
            return addon;
          });
          return updatedCounts;
        });
      };
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [isOpen, setOpen] = useState(false)
    function toggle () {
        setOpen(!isOpen)
    }
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      function truncateStringByWordCount(str, wordCount) {
        // Split the string by spaces to get an array of words
        const words = str.split(' ');
      
        // Check if the array length is greater than the specified word count
        if (words.length > wordCount) {
          // Return the first `wordCount` words joined by a space, followed by '...'
          return words.slice(0, wordCount).join(' ') + '...';
        }
      
        // If the array length is less than or equal to the word count, return the original string
        return str;
      }
      function truncateStringByCharCount(str, charCount) {
        // Check if the string length is greater than the specified character count
        if (str.length > charCount) {
          // Return the first `charCount` characters followed by '...'
          return str.slice(0, charCount) + '...';
        }
      
        // If the string length is less than or equal to the character count, return the original string
        return str;
      }
      
    const calculateTotalPrice = (addons) => {
        return addons.reduce((total, addon) => {
          return total + (parseFloat(addon.price) * addon.count);
        }, 0);
      };
    function openOrder(dish='',category=''){
        toggle();
        console.log('dish',dish,'category',category)
        let currentAddons = menu2[category][dish]['addOn']
        let currentMeal = menu2[category][dish]
        let currentAddonsCount = menu2[category][dish]['addOn'].map(x=>{
            return {name: x.name,price: x.price, count: 0,increase: x.increase, decrease: x.decrease}
        })
        setCurrentMeal(currentMeal)
        setCurrentAddons(currentAddons)
        setCurrentAddonsAmount(currentAddonsCount)
    }

    function confirmOrder (){
        let addons = currentAddonsAmounts.map(x=>{
            let {name,price,count} = x;
            return {name,price,count}
        })
        let totalPrice = Number(currentMeal.price) + calculateTotalPrice(addons)
        let meal = {...currentMeal, image: undefined}
        let data = {addons,meal,totalPrice}
        let requestBody = {
          addons,
          meal,
          totalPrice,
          contactNumber: customerPhoneNumber,
          name: customerName
        }
        console.log('confirming order', requestBody)
        if(customerName == ''){
          openNotificationWithIcon('error','bottomLeft','Add Your Name', 'Please Input your name to process the order.')
          return ''
        }
        if(customerPhoneNumber.length !== 11 ){
          openNotificationWithIcon('error','bottomLeft','Phone Number Incorrect', 'Make sure your phone number is up to 11 digits.')
          return ''
        }
        setSpinning(true)
        axios.post('https://joe-server-gkwg.onrender.com/process-order', requestBody)
          .then(response => {
            setSpinning(false)
            toggle()
            openNotificationWithIcon('info','topRight','Order Processed Successfully', 'Thanks for your patronage. We would contact you on via call/whatsapp to follow up on your order.')
            console.log('Order processed successfully:', response.data);
          })
          .catch(error => {
            setSpinning(false)
            openNotificationWithIcon('error','topRight','Unable to process order At The Moment.', 'It appears that our server is down at the moment. Please try again.')
            console.error('Error processing order:', error)
    })
    }

    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, [])

      const menu2 = {
        lightCravings: {
          brownNoodlesSoupWithSunnySideUp: {
            price: '1500',
            image: image18,
            title: 'Brown Noodles Soup with Sunny Side Up',
            description: 'A delicious soup made with brown noodles, topped with a perfectly cooked sunny side up egg.',
            actionFn: () => {openOrder('brownNoodlesSoupWithSunnySideUp', 'lightCravings')},
            addOn: []
          },
          grilledChickenWithColeslawSaladAndPotatoChips: {
            price: '2500',
            image: image19,
            title: 'Grilled Chicken with Coleslaw Salad and Potato Chips',
            description: 'Tender grilled chicken accompanied by coleslaw salad and crispy potato chips.',
            actionFn: () => {openOrder('grilledChickenWithColeslawSaladAndPotatoChips', 'lightCravings')},
            addOn: []
          },
          sotehMeatWithBrownSauce: {
            price: '3200',
            image: image20,
            title: 'Soteh Meat with Brown Sauce',
            description: 'Tender soteh meat served with a savory brown sauce, perfect for a hearty meal.',
            actionFn: () => {openOrder('sotehMeatWithBrownSauce', 'lightCravings')},
            addOn: []
          },
          beefPlatterKebab: {
            price: '2500',
            image: image21,
            title: 'Beef Platter Kebab',
            description: 'A savory assortment of grilled beef kebabs, perfect for any occasion.',
            actionFn: () => {openOrder('beefPlatterKebab', 'lightCravings')},
            addOn: []
          }
        },
        nigerianSpecials: {
          jollofRiceWithAvocadoSalad: {
            price: '2000',
            image: image22,
            title: 'Jollof Rice with Avocado Salad',
            description: 'Flavorful Jollof Rice served with a side of fresh avocado salad.',
            actionFn: () => {openOrder('jollofRiceWithAvocadoSalad', 'nigerianSpecials')},
            addOn: [
                { name: 'Plantain', price: '500', increase: () => updateAddonCount('Plantain', 'increase'), decrease: () => updateAddonCount('Plantain', 'decrease') },
            ]
          },
          pericandyWithNativeSauce: {
            price: '3000',
            image: image23,
            title: 'Pericandy with Native Sauce',
            description: 'Pericandy served with traditional native sauce, bursting with local flavors.',
            actionFn: () => {openOrder('pericandyWithNativeSauce', 'nigerianSpecials')},
            addOn: []
          },
          whiteRiceWithAssortedMeatGarnishedWithNapoSauce: {
            price: '2800',
            image: image4,
            title: 'White Rice with Assorted Meat Garnished with Napo Sauce',
            description: 'Steamed white rice served with assorted meats and garnished with Napo sauce for a flavorful meal.',
            actionFn: () => {openOrder('whiteRiceWithAssortedMeatGarnishedWithNapoSauce', 'nigerianSpecials')},
            addOn: []
          },
          jollofRiceWithBBQSauce: {
            price: '2200',
            image: image24,
            title: 'Jollof Rice with BBQ Sauce',
            description: 'Delicious Jollof Rice finished with BBQ sauce, served with a side of pepper sauce.',
            actionFn: () => {openOrder('jollofRiceWithBBQSauce', 'nigerianSpecials')},
            addOn: []
          },
          bangaSoup: {
            price: '3500',
            image: image25,
            title: 'Banga Soup',
            description: 'Traditional Banga Soup made with fresh palm fruit extract, rich in flavor and perfect with any choice of swallow.',
            actionFn: () => {openOrder('bangaSoup', 'nigerianSpecials')},
            addOn: []
          },
          omiobeYorubaStew: {
            price: '2800',
            image: image26,
            title: 'Omiobe Yoruba Stew',
            description: 'Authentic Yoruba stew known for its rich flavors and aromatic spices.',
            actionFn: () => {openOrder('omiobeYorubaStew', 'nigerianSpecials')},
            addOn: []
          },
          addOn: []
        }
      }
      
      const menu = {
        riceSpecials: {
          whiteRiceAndStew: {
            price: '3500',
            image: image1,
            title: 'White Rice and Stew',
            description: 'This option is for white rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {openOrder('whiteRiceAndStew', 'riceSpecials')},
          },
          jollofRiceAndFriedRice: {
            price: '4500',
            image: image1,
            title: 'Jollof and Fried Rice',
            description: 'This option is for jollof and fried rice. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {openOrder('jollofRiceAndFriedRice', 'riceSpecials')},
          },
          ofadaRiceAndStew: {
            price: '5000',
            image: image1,
            title: 'Ofada Rice and Stew',
            description: 'This option is for ofada rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {openOrder('ofadaRiceAndStew', 'riceSpecials')},
          },
          addOn: [
            { name: 'Plantain', price: '500', increase: () => updateAddonCount('Plantain', 'increase'), decrease: () => updateAddonCount('Plantain', 'decrease') },
            { name: 'Chicken', price: '1000', increase: () => updateAddonCount('Chicken', 'increase'), decrease: () => updateAddonCount('Chicken', 'decrease') },
            { name: 'Beef', price: '700', increase: () => updateAddonCount('Beef', 'increase'), decrease: () => updateAddonCount('Beef', 'decrease') },
            { name: 'Turkey', price: '1200', increase: () => updateAddonCount('Turkey', 'increase'), decrease: () => updateAddonCount('Turkey', 'decrease') },
            { name: 'Beans', price: '400', increase: () => updateAddonCount('Beans', 'increase'), decrease: () => updateAddonCount('Beans', 'decrease') },
            { name: 'Coleslaw', price: '300', increase: () => updateAddonCount('Coleslaw', 'increase'), decrease: () => updateAddonCount('Coleslaw', 'decrease') },
            { name: 'Moi Moi', price: '500', increase: () => updateAddonCount('Moi Moi', 'increase'), decrease: () => updateAddonCount('Moi Moi', 'decrease') },
          ]
        },
        pastaSpecials: {
          creamyAlfredo: {
            price: '5500',
            image: image1,
            title: 'Creamy Alfredo',
            description: 'Rich and creamy Alfredo pasta with a hint of garlic and Parmesan cheese. Add chicken or shrimp at additional charges.',
            actionFn: () => {openOrder('creamyAlfredo', 'pastaSpecials')},
          },
          zestyMarinara: {
            price: '5200',
            image: image1,
            title: 'Zesty Marinara',
            description: 'Pasta in a zesty marinara sauce made with fresh tomatoes and herbs. Add meatballs or sausage at additional charges.',
            actionFn: () => {openOrder('zestyMarinara', 'pastaSpecials')},
          },
          pestoPasta: {
            price: '5400',
            image: image1,
            title: 'Pesto Pasta',
            description: 'Delicious pasta tossed in a fresh basil pesto sauce. Satiate your Craving. Add chicken or shrimp at additional charges.',
            actionFn: () => {openOrder('pestoPasta', 'pastaSpecials')},
          },
          addOn: [
            { name: 'Garlic Bread', price: '500', increase: () => updateAddonCount('Garlic Bread', 'increase'), decrease: () => updateAddonCount('Garlic Bread', 'decrease') },
            { name: 'Chicken', price: '1000', increase: () => updateAddonCount('Chicken', 'increase'), decrease: () => updateAddonCount('Chicken', 'decrease') },
            { name: 'Shrimp', price: '1200', increase: () => updateAddonCount('Shrimp', 'increase'), decrease: () => updateAddonCount('Shrimp', 'decrease') },
            { name: 'Extra Sauce', price: '300', increase: () => updateAddonCount('Extra Sauce', 'increase'), decrease: () => updateAddonCount('Extra Sauce', 'decrease') },
            { name: 'Parmesan Cheese', price: '200', increase: () => updateAddonCount('Parmesan Cheese', 'increase'), decrease: () => updateAddonCount('Parmesan Cheese', 'decrease') },
          ]
        },
        peppersoupVarieties: {
          spicyCatfish: {
            price: '6000',
            image: image1,
            title: 'Catfish Peppersoup',
            description: 'Hot and spicy catfish peppersoup that will warm you up. Add yam or plantain at additional charges.',
            actionFn: () => {openOrder('spicyCatfish', 'peppersoupVarieties')},
          },
          heartyGoatmeat: {
            price: '6200',
            image: image1,
            title: 'Goatmeat Peppersoup',
            description: 'Delicious goatmeat peppersoup, good for chilling. Add yam or plantain at additional charges.',
            actionFn: () => {openOrder('heartyGoatmeat', 'peppersoupVarieties')},
          },
          cowtailPeppersoup: {
            price: '6400',
            image: image1,
            title: 'Cowtail Peppersoup',
            description: 'Flavorful cowtail peppersoup with a blend of spices. Add yam or plantain at additional charges.',
            actionFn: () => {openOrder('cowtailPeppersoup', 'peppersoupVarieties')},
          },
          cowlegPeppersoup: {
            price: '6500',
            image: image1,
            title: 'Cowleg Peppersoup',
            description: 'Delicious cowleg peppersoup. Perfect for chilling. Enjoy with yam or plantain at added costs.',
            actionFn: () => {openOrder('cowlegPeppersoup', 'peppersoupVarieties')},
          },
          addOn: [
            { name: 'Yam', price: '500', increase: () => updateAddonCount('Yam', 'increase'), decrease: () => updateAddonCount('Yam', 'decrease') },
            { name: 'Plantain', price: '500', increase: () => updateAddonCount('Plantain', 'increase'), decrease: () => updateAddonCount('Plantain', 'decrease') },
            { name: 'Extra Meat', price: '1000', increase: () => updateAddonCount('Extra Meat', 'increase'), decrease: () => updateAddonCount('Extra Meat', 'decrease') },
            { name: 'Pepper Sauce', price: '300', increase: () => updateAddonCount('Pepper Sauce', 'increase'), decrease: () => updateAddonCount('Pepper Sauce', 'decrease') },
            { name: 'Fish', price: '1200', increase: () => updateAddonCount('Fish', 'increase'), decrease: () => updateAddonCount('Fish', 'decrease') },
          ]
        },
        nigerianSoups: {
          egusiSoup: {
            price: '6500',
            image: image1,
            title: 'Rich Egusi Soup',
            description: 'Traditional Nigerian Egusi soup with melon seeds, leafy greens, and assorted meats. Served with your choice of swallow.',
            actionFn: () => {openOrder('egusiSoup', 'nigerianSoups')},
          },
          ogbonoSoup: {
            price: '6300',
            image: image1,
            title: 'Flavorful Ogbono Soup',
            description: 'Thick and flavorful Ogbono soup made with wild mango seeds and assorted meats. Served with your choice of swallow.',
            actionFn: () => {openOrder('ogbonoSoup', 'nigerianSoups')},
          },
          vegetableSoup: {
            price: '6100',
            image: image1,
            title: 'Vegetable Soup',
            description: 'Healthy and delicious vegetable soup with a mix of leafy greens and assorted meats. Served with your choice of swallow.',
            actionFn: () => {openOrder('vegetableSoup', 'nigerianSoups')},
          },
          bangaSoup: {
            price: '6800',
            image: image1,
            title: 'Banga Soup',
            description: 'Rich and savory Banga soup made from palm nut extract, with assorted meats and fish. Served with your choice of swallow.',
            actionFn: () => {openOrder('bangaSoup', 'nigerianSoups')},
          },
          afangSoup: {
            price: '6700',
            image: image1,
            title: 'Afang Soup',
            description: 'Delicious Afang soup made with a blend of okazi and waterleaf, and assorted meats. Served with your choice of swallow.',
            actionFn: () => {openOrder('afangSoup', 'nigerianSoups')},
          },
          edikangIkongSoup: {
            price: '6900',
            image: image1,
            title: 'Edikang Ikong Soup',
            description: 'Edikang Ikong soup made with pumpkin leaves and waterleaf, with assorted meats and fish. Served with any swallow.',
            actionFn: () => {openOrder('edikangIkongSoup', 'nigerianSoups')},
          },
          addOn: [
            { name: 'Pounded Yam', price: '500', increase: () => updateAddonCount('Pounded Yam', 'increase'), decrease: () => updateAddonCount('Pounded Yam', 'decrease') },
            { name: 'Garri', price: '400', increase: () => updateAddonCount('Garri', 'increase'), decrease: () => updateAddonCount('Garri', 'decrease') },
            { name: 'Semovita', price: '450', increase: () => updateAddonCount('Semovita', 'increase'), decrease: () => updateAddonCount('Semovita', 'decrease') },
            { name: 'Wheat', price: '450', increase: () => updateAddonCount('Wheat', 'increase'), decrease: () => updateAddonCount('Wheat', 'decrease') },
            { name: 'Extra Meat', price: '1000', increase: () => updateAddonCount('Extra Meat', 'increase'), decrease: () => updateAddonCount('Extra Meat', 'decrease') },
            { name: 'Fish', price: '1200', increase: () => updateAddonCount('Fish', 'increase'), decrease: () => updateAddonCount('Fish', 'decrease') },
            { name: 'Snail', price: '1500', increase: () => updateAddonCount('Snail', 'increase'), decrease: () => updateAddonCount('Snail', 'decrease') },
          ]
        }
      };
      

    return (
        <main id='orders-page' className='mainSpacing'>
            {contextHolder}
            <div className='mainVerticalSpace'>
            <Spin fullscreen tip={'Logging In, Please Wait'} spinning={spinning}></Spin>
                <Overlay isOpen={isOpen} toggle={toggle}>
                    <div className='co-container-main'>
                        <div className='pt-5' />
                        <div className='confirm-header text-center'>
                            <div className='sectionHeadlineContainer d-sm-none white font-subtitle-big font-medium'><span className='delicious'>CONFIRM</span> ORDER</div>
                            <div className='sectionHeadlineContainer d-none d-sm-block white font-heading-5 font-medium'><span className='delicious'>CONFIRM</span> ORDER</div>
                        </div>
                        <div className='row no-space p-3'>
                            <div className='col-12 no-space'>
                                <div className='row no-space align-items-center justify-content-center'>
                                    <div className='col-11 col-sm-9 col-md-6 col-lg-6 col-xl-5 no-space'>
                                        <div className='co-img-container'>
                                            {currentMeal.image}
                                        </div>
                                        <div className='d-block d-md-none py-3' />
                                    </div>
                                    <div className='col-11 col-sm-9 col-md-6 col-lg-4 no-space'>
                                        <div className='confirm-contents px-md-3'>
                                            <p className='no-space font-subtitle font-bold delicious'>{currentMeal.title}</p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-medium'>Description: </p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-light'>{currentMeal.description}</p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-bold delicious'>Add to your order</p>
                                            
                                            <div className='border addOnDivide' />
                                            <div>
                                                {
                                                    currentAddonsAmounts.map(addon=>{
                                                        let {name,price,increase,decrease,count}=addon
                                                        let addOnRender = (
                                                            <div>
                                                                <div className='py-1' />
                                                                <div className='row no-space align-items-center font-p font-light'>
                                                                    <div className='col no-space'><p className='no-space'>{name} ({price})</p></div>
                                                                    <div className='w-max-content no-space order-mod'> <button className='p-1 font-bold font-subtitle' onClick={increase}>+</button> <span className='font-subtitle'>{count}</span> <button className='p-1 font-bold  font-subtitle' onClick={decrease}> - </button> </div>
                                                                </div>
                                                                <div className='border addOnDivide' />
                                                            </div>                                                            
                                                        )
                                                        return addOnRender
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3' />
                            </div>  
                            <div className='col-12 co-divider'/>
                            <div className='col-12  no-space'>
                                        <div className='py-3' />
                                <div className='order-summary-container border-gray p-2 col-12 col-sm-10 col-md-7 col-lg-6 center'>
                                    <div className=''>                                
                                        <div className='py-1' />
                                        <p className='no-space font-subtitle white font-regular text-center'>Summary</p> 
                                                                    
                                        <div className='py-1' />
                                        <div className='row no-space'>
                                            <div className='col'>                                        
                                                <p className='no-space font-regular font-p'>{currentMeal.title}</p> 
                                            </div>
                                            <div className='w-max-content'>
                                                <p className='no-space font-p font-regular'>(NGN) {currentMeal.price}</p> 
                                            </div>
                                        </div>                                         
                                        <div>
                                            {
                                                currentAddonsAmounts.map(x=>{

                                                    let summaryItem = (
                                                        <div>                        
                                                            <div className='py-2' />
                                                            <div className='row no-space'>
                                                                <div className='col'>                                        
                                                                    <p className='no-space font-p font-regular'>{x.name} ({x.count})</p> 
                                                                </div>
                                                                <div className='w-max-content'>
                                                                    <p className='no-space font-p font-regular'>(NGN) {x.price * x.count}</p> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                    return x.count > 0 ? summaryItem : null
                                                })
                                            }
                                        </div>
                                        
                                        <div className='py-2' />
                                        <div className='row no-space font-subtitle'>
                                            <div className='col'>                                        
                                                <p className='no-space'>Total: </p> 
                                            </div>
                                            <div className='w-max-content'>
                                                <p className='no-space' style={{letterSpacing: '1px'}}> = {formatNumberWithCommas(Number(currentMeal.price) + calculateTotalPrice(currentAddonsAmounts))}</p> 
                                            </div>
                                        </div>

                                        <div className='py-3' />
                                        <div className='col-12 co-divider'/>
                                        <div className='py-3' />

                                        <div className='p-1'>
                                            <div>
                                                <p className='no-space font-subtitle white font-regular text-center'>Contact Details</p> 
                                                <p>Please input your contact details to proceed.</p>
                                                <div className='input-container-order'>
                                                    <label className='d-block py-2 font-small'>Name: </label>
                                                    <input placeholder='Please input your name' value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} />
                                                </div>
                                                <div className='py-2' />
                                                <div className='input-container-order'>
                                                    <label className='d-block py-2 font-small'>Phone / Whatsapp Number: </label>
                                                    <input placeholder='Please input your phone number' maxLength={11} value={customerPhoneNumber} onChange={(e)=>{setCustomerPhoneNumber(e.target.value)}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-2' />
                                    </div>
                                    <div className='co-button-container p-2'>
                                        <button className='font-p' onClick={confirmOrder}>Confirm Order</button>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </Overlay>
                <div className='ordersBannerContainer'>
                    <div className='ctaBannerContents py-5 px-2' style={{lineHeight: 1.5}}>
                        <p className='font-subtitle-big d-md-none font-bold text-center'>Browse through the menu, place your order!</p>
                        <p className='font-heading-6 d-none d-md-block font-bold text-center'>Browse through the menu, place your order!</p>
                    </div>
                </div>

                <div className='py-2'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 1: BBQ, SAUCE, CHIPS....</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>LIGHT</span> CRAVINGS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>LIGHT</span> CRAVINGS</div>    
                    </div>
                    
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            {
                                Object.keys(menu2.lightCravings).map(item=>{
                                    let {price,image,title,description,actionFn} = menu2.lightCravings[item]
                                    if(item === 'addOn') return null
                                    description = truncateStringByCharCount(description,70)
                                    title = truncateStringByCharCount(title,35)
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={goToAddToCart} />
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>                    
                </div>
                
                <div className='py-4'></div>
            
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 2: NIGERIAN SPECIAL DISHES.JOLLOF AND OTHER LOCAL DISHES</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>NIGERIAN</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>NIGERIAN</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            {
                                Object.keys(menu2.nigerianSpecials).map(item=>{
                                    let {price,image,title,description,actionFn} = menu2.nigerianSpecials[item]
                                    if(item === 'addOn') return null
                                    title = truncateStringByCharCount(title,35)
                                    description = truncateStringByCharCount(description,70)
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={goToAddToCart} />
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>              
                </div>
                        
            </div>
        </main>
    )
}

export default Order