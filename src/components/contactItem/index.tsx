import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './style.css'

interface HowItemPropType {
    image: React.JSX.Element,
    title: string,
    text: string
}

function ContactItem({image,text,title}: HowItemPropType): React.JSX.Element {
    return (
        <div className='contactItemContainer'>
            <div className='CIContainer'>{image}</div>
            <div>
                <p className=' font-p text-center font-bold  text-main'>{title}</p>
            </div>
            <div className='HITextContainer center'>
                <p className='text-main text-center font-small'>{text}</p>
            </div>
        </div>
    )
}

export default ContactItem