import React,{useState} from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import CustomDialog from "../customDialog";

interface FeaturedCardPropType {
    image?: string;
    title: string;
    actionFn?: ()=>void,
    description?: string,
    deleteBlog: ()=>void;
    published: boolean;
    editFn?:()=>void;
    publishFn:()=>void;
    created:string
}


export function BlogItem ({created,editFn,publishFn,deleteBlog,image,title,actionFn, description='',published = false}: FeaturedCardPropType): React.JSX.Element {
    let [deleteConfirm,setDeleteConfirm] = useState(false)
    let formattedDate = String(new Date(created)).split(' ').slice(0,4).join(' ')

    function toggleDeleteConfirm(){
        setDeleteConfirm(!deleteConfirm)
    }

    return (
        <div className="blogItemsMain">
        <CustomDialog onClose={toggleDeleteConfirm} isOpen={deleteConfirm}>
            <div>
                <div>
                    <p className="font-subtitle font-medium no-space">Are you sure you want to delete this Post?</p>
                </div>
                <div>
                    <p className="font-p font-medium no-space">Note That This action is Irreversible. If you delete it now. you would need to create it afresh.</p>
                </div>
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="col-12 col-md-6 no-space">
                            <button className="ATCMButton Continue font-small font-regular pointer" onClick={()=>{deleteBlog();toggleDeleteConfirm();}}>Delete</button>
                        </div>
                        <div className="col-12 col-md-6 no-space px-1">
                            <button className="ATCMButton PTC font-small font-regular pointer" onClick={toggleDeleteConfirm}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </CustomDialog>
        <div className="w-max-content order-delete-container" style={{right: '20px'}}>
            <div className="py-1 mx-1" />
                <button onClick={() => {toggleDeleteConfirm(); }} className="vi-button px-3" style={{backgroundColor: '#e13b58'}}>
                    <FontAwesomeIcon icon={faTrash} /> <span className="d-xs-inline d-sm-none">Delete Category</span> 
                </button>
            </div>
            <div className="blogItemContainer">
                <div className="bIContainer">
                    <img src={image} />
                </div>
                <div className='py-1'></div>
                <div>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                <div className="font-small font-medium">Highlight Paragraph</div>
                    <p className='font-p no-space'>{description}</p>
                </div>
                
                <div className='py-1'></div>
                <div className="font-small font-medium">Created On : {formattedDate}</div>
                <div className='py-1'></div>
                <div className="container-fluid no-space">
                <div className="row no-space">
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p font-regular no-space my-2 my-sm-1 mx-1 mx-sm-1 ">
                            <button onClick={editFn} className="vi-button px-2">Edit Post <FontAwesomeIcon icon={faPen}/></button>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 no-space">
                        <p className="font-p my-2 my-sm-1  font-regular mx-1 mx-sm-1 no-space">
                        {published
                            ? (
                                <button onClick={publishFn} className="vi-button green-linear px-2">Unpublish Dish <FontAwesomeIcon icon={faEyeSlash}/></button>
                            ):
                            (<button onClick={publishFn} className="vi-button green-linear px-2">Publish Dish <FontAwesomeIcon icon={faEye}/></button>)
                            }
                        </p>
                    </div>
                </div>
            </div>  
                </div>
            </div>
        </div>
    )
}


