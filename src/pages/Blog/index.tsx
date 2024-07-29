import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { BlogItem } from "../../components/blogItem";
import { blogService } from "joegreen-service-library";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { useLoading } from "../../components/utils/loadingContext";
import { useSearchParams } from "react-router-dom";
import { BlogType } from "joegreen-service-library/dist/services/blogService";

import image1 from '../../assets/image23.png'
let image = <img src={image1} />

export function Blog (): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    let navigate = useNavigate()
    let {triggerError,triggerSuccess} = useNotificationTrigger()
    let {setLoading,setLoadingText} = useLoading()
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id')
    
    let [blogs,setBlogs] = useState<BlogType[]>([])

    function handleGoBack(){
        navigate(-1)
    }

    async function fetchBlogs () {
        console.log('Request Log','FetchBlogs')
        try {
            setLoading(true);
            setLoadingText('Fetching... Please Wait');
            let data = await blogService.getAllBlogPosts()
            console.log({fetchedBlogs: data})
            setBlogs(data)
            triggerSuccess({ title: 'Fetched Blogs Successfully', message: '' })
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed To Fetch Blog, '+error.message });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    
    async function publishBlog (isPublish:boolean,id:string) {
        try {
            setLoading(true);
            setLoadingText(isPublish? 'Publishing blog.....': 'Unpublishing blog....');
            let reqBody = {published: true}
            let data = isPublish? await blogService.updateBlogPost(id,reqBody,token):  await blogService.updateBlogPost(id,{published: false},token);
            let newBlogs = blogs.map(x=>x._id == id? data : x)
            setBlogs(newBlogs)
            triggerSuccess({ title: 'Success: ' + isPublish? 'Published Dish': 'Unpublished Category', message: 'successfully , users will now be able to see this Dish on the website' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to Publish' });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    
    useEffect(()=>{
        fetchBlogs()
    },[])
    
    function goToCreatePost(){
        navigate('/create-blog')
    }

    function editBlogPost(id:string){
        navigate('/create-blog?editId='+id)
    }

    async function deletePost(id:string){
        try {
            setLoading(true);
            setLoadingText('Deleting... Please Wait');
            let data = await blogService.deleteBlogPost(id,token)
            let newBlogs = blogs.filter(x=>x._id !== id)
            setBlogs(newBlogs)
            triggerSuccess({ title: 'Deleted Blogs Successfully', message: '' });
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed To Delete Blog, '+error.message });
            console.error({error})
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">MANAGE BLOG</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                    <p className="font-p font-regular no-space">
                                        <button onClick={goToCreatePost} className="vi-button px-2 px-sm-3 px-md-4 px-lg-5">Add New Post <FontAwesomeIcon icon={faPlus}/></button>
                                    </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="py-1" />
                    <div className="blog-item-container py-2">
                        <div className="container-fluid no-space">
                            <div className="row  no-space">
                                {blogs.map(x=>{
                                    return (
                                        <div key={x._id} className="col-12 col-md-6">
                                            <div className="shadow border-gray-radius my-2">
                                                <BlogItem created={x.created} editFn={()=>editBlogPost(x._id)} publishFn={()=>{publishBlog(!x.published,x._id)}} published={x.published} deleteBlog={()=>{deletePost(x._id)}} image={x.image} title={x.title} description={x.highlightParagraph} actionFn={()=>{}} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


