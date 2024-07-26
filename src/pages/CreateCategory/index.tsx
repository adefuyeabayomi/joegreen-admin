import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { InputMain, TextAreaMain } from "../../components/input";
import { isStringLengthGreaterThan } from "../../functions/utils";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from 'joegreen-service-library';

export function CreateCategory(): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { setLoading, setLoadingText } = useLoading();
    const { triggerInfo, triggerError, triggerSuccess } = useNotificationTrigger();
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [catNameError, setCatNameError] = useState<boolean>(false);
    const [catDescError, setCatDescError] = useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);

    useEffect(() => {
        const id = searchParams.get('editId');
        if (id) {
            setEditId(id);
            // Fetch category data to populate the fields if editing
            fetchCategoryData(id);
        }
    }, [searchParams]);

    const fetchCategoryData = async (id: string) => {
        try {
            setLoading(true);
            const response = await dishService.getCategoryById(id);
            console.log({response})
            setCategoryName(response.name);
            setCategoryDescription(response.description);
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to fetch category data' });
        } finally {
            setLoading(false);
        }
    };

    const handleCreateOrUpdateCategory = async () => {
        if (isStringLengthGreaterThan(categoryName, 5) && isStringLengthGreaterThan(categoryDescription, 20) && categoryDescription.length < 40) {
            try {
                setLoading(true);
                setLoadingText('Processing...');
                if (editId) {
                    // Update existing category
                    await dishService.updateCategory(editId, { name: categoryName, description: categoryDescription },token);
                    triggerSuccess({ title: 'Success', message: 'Category updated successfully' });
                    navigate('/');
                } else {
                    // Create new category
                    await dishService.createCategory({ name: categoryName, description: categoryDescription,published: false },token);
                    triggerSuccess({ title: 'Success', message: 'Category created successfully' });
                navigate('/');
                }
            } catch (error) {
                triggerError({ title: 'Error', message: 'Failed to save category' });
                console.error({error})
            } finally {
                setLoading(false);
            }
        } else {
            if (!isStringLengthGreaterThan(categoryName, 5)) {
                setCatNameError(true);
            }
            if (!isStringLengthGreaterThan(categoryDescription, 20) || categoryDescription.length >= 40) {
                setCatDescError(true);
            }
        }
    };

    const resetCatNameError = () => {
        setCatNameError(false);
    };

    const resetCatDescError = () => {
        setCatDescError(false);
    };

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="util-header">
                    <div>
                        <p className="font-heading-6 font-medium green-color-main text-center">
                            {editId ? 'EDIT CATEGORY' : 'CREATE CATEGORY'}
                        </p>
                    </div>
                    <div className="py-1" />
                    <div className="util-divider" />
                </div>
                <div className="py-2" />
                <div className="p-4 border-gray-radius">
                    <div>
                        <p className="font-small no-space">Category Name</p>
                        <div className="py-1" />
                        <InputMain
                            onFocus={resetCatNameError}
                            showError={catNameError}
                            errorMessage="Should be at least 5 characters"
                            value={categoryName}
                            onChange={setCategoryName}
                            placeholder={'What category of dishes is this?'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Description</p>
                        <div className="py-1" />
                        <TextAreaMain
                            onFocus={resetCatDescError}
                            showError={catDescError}
                            errorMessage="Should be between 20 and 40 characters"
                            value={categoryDescription}
                            onChange={setCategoryDescription}
                            placeholder={'Very briefly describe this category of dishes. You can just list out the dishes here.'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                            <button onClick={handleCreateOrUpdateCategory} className="pointer vi-button px-2">
                                {editId ? 'Update Category' : 'Create Category'}
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
