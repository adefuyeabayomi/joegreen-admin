import React,{ useEffect, useState } from 'react'

import { useRef } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

import './style.css'

interface OverlayPropsType {
    children : React.JSX.Element | Array<React.JSX.Element>;
    //ref: React.LegacyRef<HTMLDivElement>;
    toggle: ()=>void,
    isOpen: boolean
}

function Overlay({children,toggle,isOpen}: OverlayPropsType){
    const divRef = useRef(null)
    const overlayRef = useRef(null)
    useEffect(()=>{
        if(isOpen){
            divRef.current.classList.add('active')
            overlayRef.current.classList.add('overlay')
        }
        else {
            divRef.current.classList.remove('active')
            overlayRef.current.classList.remove('overlay')
        }
    },[isOpen])

    return (
        <div>
        <div ref={overlayRef}></div>
        <div ref={divRef} className='jg-overlay-container'>
            <div className='green-color-main jg-overlay-close-container'>
                <Hamburger toggled={true} color='#00A826' size={10} toggle={toggle} />
            </div>
            {children}
        </div>            
        </div>

    )
}

export default Overlay