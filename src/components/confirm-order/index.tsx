import React,{ LegacyRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
import { useNavigate } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useRef } from 'react';
import caretWhite from '../../assets/caret-white.png'

import './style.css'

interface HowItemPropType {
    image: React.JSX.Element,
    title: string,
    text: string,
    price: number,
    actionFn: ()=> void,
    isOpen: boolean,
    divRef: React.LegacyRef<HTMLDivElement>
}

function ConfirmOrder({image,title,text,price,actionFn,isOpen,divRef}: HowItemPropType): React.JSX.Element {
    const navigate = useNavigate()
    return (
        <div className='ConfirmOrderContainer'>
            <div ref={divRef} className={'mobile-nav-container-main'}>
                <div className='inMenuHamContainerMain'>
                    <Hamburger toggled={isOpen} color='#ffe3e3' size={25} toggle={actionFn} />
                </div>                 
                <div className='mobile-nav-links-container font-bold'>
                    <div className='w-max-content'>
                        <p className='mobile-link'>Contact</p>
                    </div> 
                    <div className='w-max-content'>
                        <p className='mobile-link'>Contact</p>
                    </div> 
                    <div className='w-max-content'>
                        <p className='mobile-link'>Contact</p>
                    </div>                            
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder
