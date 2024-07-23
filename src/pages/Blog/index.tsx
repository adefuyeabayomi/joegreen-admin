import React,{useState} from "react";
import { BlogItem } from "../../components/blogItem";

import './style.css' 
import tipDots from '../../assets/tipDots.png'
export default function Blog (): React.JSX.Element {
    return (
        <main id="blog">
            <div className="mainSpacing">
                <div className="py-4" />
                <div className='tipContent row no-space align-items-center'>
                    <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>STAY UPDATED</p></div>
                    <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                </div>
                <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>TRENDING UPDATES ON <span className='delicious'>JOEGREENCAFE BLOG</span></div>
                <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>TRENDING UPDATES ON <span className='delicious'>JOEGREENCAFE BLOG</span></div>
                <div className='sectionAfterTextContainer features'><p className='font-p text-main'>Stay informed with the freshest news, exciting events, and culinary insights from JoeGreen. Discover delicious recipes, expert tips, and the latest trends in the food world. Join us on our journey of Cullinary delights and innovation!</p></div>
                <div className="row no-space">
                    {[0,1,2,3,4].map((x,index)=>{
                        return (
                        <div className="no-space col-12 col-md-6 col-lg-4" key={index}>
                            <BlogItem description={'Summer is the perfect time to experiment with fresh, seasonal ingredients. From juicy tomatoes to sweet berries, learn how to make the most of what this vibrant season has to offer.'}  title={'Exploring Seasonal Ingredients: Summer Delights'} />
                        </div>
                        )
                    })}
                </div>
                <div className="py-4" />
            </div>
        </main>
    )
}


