import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./style.css"

interface FeaturedCardPropType {
    image?: React.JSX.Element,
    title: string,
    actionFn?: ()=>void
}

function FeaturedCard({image,title,actionFn}: FeaturedCardPropType): React.JSX.Element {
    return (
        <div className=''>
            <div className='fc-image-container'>
                {image}
            </div>
            <div className='fc-title-container font-subtitle font-regular text-main'>
                <p>{title}</p>
            </div>
            <div className='fc-button-container'>
                <button className='pointer green-bg-main' onClick={actionFn}>View full menu</button>
            </div>
        </div>
    )
}

export default FeaturedCard