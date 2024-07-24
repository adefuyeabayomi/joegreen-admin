import React,{ useState } from 'react'

import './style.css'

interface HowItemPropType {
    title: string,
    text: string,
    buttonText: string,
    actionFn: ()=>void
}

function HowItem({title,text,buttonText,actionFn}: HowItemPropType): React.JSX.Element {
    return (
        <div className='howItemContainer'>
            <div>
                <p className=' font-subtitle font-bold  text-main'>{title}</p>
            </div>
            <div className='HITextContainer center'>
                <p className='text-main font-small'>{text}</p>
            </div>
            <div className='py-2' />
            <div>
                <button onClick={actionFn}>{buttonText}</button>
            </div>
            <div className='py-1' />
        </div>
    )
}

export default HowItem