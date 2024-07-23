import React,{ useState } from 'react'

import './style.css'

function ReviewItem({review='', image=<img />,name='',occupation=''}): React.JSX.Element {
    return (
        <div className='RIContainerMain'>
            <div className='RIIContainer'>
                {image}
            </div>
            <div className='RIReviewContainer font-subtitle text-main font-regular'>
                <p>{review}</p>
            </div>
            <div className='RIDetailsContainer'>
                <p className='font-p font-medium no-space'>{name}</p>
                <p className='font-small no-space'>{occupation}</p>
                <p className='py-1' ></p>
            </div>
        </div>
    )
}

export default ReviewItem