import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { InputMain, TextAreaMain, FileInput } from "../../components/input";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { blogService } from 'joegreen-service-library';
import { isValidUrl } from "../../functions/utils";
import './style.css';

export function CreateBlog(): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const { setLoading, setLoadingText } = useLoading()
    const { triggerInfo, triggerError, triggerSuccess } = useNotificationTrigger()
    
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('https://')
    const [highlightParagraph, setHighlightParagraph] = useState('')
    const [image, setImage] = useState<File | null>(null);
    const [editId, setEditId] = useState<string | null>(null);
    const [titleError, setTitleError] = useState<boolean>(false);
    const [linkError, setLinkError] = useState<boolean>(false);
    const [paragraphError, setParagraphError] = useState<boolean>(false);

    useEffect(() => {
        const id = searchParams.get('editId');
        if (id) {
            setEditId(id);
            fetchBlogData(id);
        }
    }, [searchParams]);

    const fetchBlogData = async (id: string) => {
        try {
            setLoading(true);
            const response = await blogService.getBlogPostById(id);
            setTitle(response.title);
            setHighlightParagraph(response.highlightParagraph);
            setLink(response.link)
            // Set the image preview if needed
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to fetch blog data' });
        } finally {
            setLoading(false);
        }
    };

    const handleCreateOrUpdateBlog = async () => {
        if (title.length > 0 && isValidUrl(link) && highlightParagraph.length >= 20) {
            try {
                setLoading(true);
                setLoadingText('Processing...');
                
                const formData = new FormData();
                formData.append('title', title);
                formData.append('highlightParagraph', highlightParagraph)
                formData.append('link',link)

                if (image) formData.append('files', image);
                console.log({image})

                if (editId) {
                    // Update existing blog
                    await blogService.updateBlogPost(editId, formData,token);
                    triggerSuccess({ title: 'Success', message: 'Blog updated successfully' });
                } else {
                    // Create new blog
                    await blogService.createBlogPost(formData,token);
                    triggerSuccess({ title: 'Success', message: 'Blog created successfully' });
                }
                //navigate(-1);
            } catch (error) {
                triggerError({ title: 'Error', message: 'Failed to save blog' });
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            if (title.length === 0) setTitleError(true);
            if (isValidUrl(link)) setLinkError(true);
            if (highlightParagraph.length < 20) setParagraphError(true);
        }
    };

    const resetTitleError = () => {
        setTitleError(false);
    };

    const resetLinkError = () => {
        setLinkError(false);
    };

    const resetParagraphError = () => {
        setParagraphError(false);
    };

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="util-header">
                    <div>
                        <p className="font-heading-6 font-medium green-color-main text-center">
                            {editId ? 'EDIT BLOG POST' : 'CREATE BLOG POST'}
                        </p>
                    </div>
                    <div className="py-1" />
                    <div className="util-divider" />
                </div>
                <div className="py-2" />
                <div className="p-4 border-gray-radius">
                    <div>
                        <p className="font-small no-space">Title</p>
                        <div className="py-1" />
                        <InputMain
                            onFocus={resetTitleError}
                            showError={titleError}
                            errorMessage="Title is required"
                            value={title}
                            onChange={setTitle}
                            placeholder={'Enter the title of the blog post'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Link</p>
                        <div className="py-1" />
                        <InputMain
                            onFocus={resetLinkError}
                            showError={linkError}
                            errorMessage="Link is required. Please input a valid link."
                            value={link}
                            onChange={setLink}
                            placeholder={'Enter the link to the blog post'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Highlight Paragraph</p>
                        <div className="py-1" />
                        <TextAreaMain
                            onFocus={resetParagraphError}
                            showError={paragraphError}
                            errorMessage="Highlight paragraph should be at least 20 characters"
                            value={highlightParagraph}
                            onChange={setHighlightParagraph}
                            placeholder={'Enter a brief highlight for the blog post'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Image</p>
                        <div className="py-1" />
                        <FileInput
                            onChange={(e) => e.target.files[0]? setImage(e.target.files[0]): null}
                            showPreview={true}
                            placeholder="Upload Cover Image"
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                            <button onClick={handleCreateOrUpdateBlog} className="pointer vi-button px-2">
                                {editId ? 'Update Blog' : 'Create Blog'}
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </p>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    );
}
