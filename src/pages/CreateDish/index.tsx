import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { InputMain, TextAreaMain, FileInput } from "../../components/input"; // Assuming FileInput is a component you've created
import { isStringLengthGreaterThan } from "../../functions/utils";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from 'joegreen-service-library';
import {Dish, Addons} from 'joegreen-service-library/dist/services/dishService'

export function CreateDish(): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken');
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    let category = searchParams.get('category')
    const [editId, setEditId] = useState<string | null>(null);
    const { setLoading, setLoadingText } = useLoading();
    const { triggerInfo, triggerError, triggerSuccess } = useNotificationTrigger();
    const [dishName, setDishName] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [dishPrice, setDishPrice] = useState<number>(0);
    const [addOns, setAddOns] = useState<Addons[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [dishNameError, setDishNameError] = useState<boolean>(false);
    const [dishDescError, setDishDescError] = useState<boolean>(false);
    const [dishPriceError, setDishPriceError] = useState<boolean>(false);

    useEffect(() => {
        const id = searchParams.get('editId');
        if (id) {
            setEditId(id);
            // Fetch dish data to populate the fields if editing
            fetchDishData(id);
        }
    }, [searchParams]);

    const fetchDishData = async (id: string) => {
        try {
            setLoading(true);
            const response = await dishService.getDishById(id);
            setDishName(response.name);
            setDishDescription(response.description);
            setDishPrice(response.price);
            setAddOns(response.addons);
            // Handle image if necessary
        } catch (error) {
            triggerError({ title: 'Error', message: 'Failed to fetch dish data' });
        } finally {
            setLoading(false);
        }
    };

    const handleAddOnChange = (index: number, field: 'name' | 'price', value: string | number) => {
        const newAddOns = [...addOns];
        newAddOns[index] = { ...newAddOns[index], [field]: value };
        setAddOns(newAddOns);
    };

    const handleAddOnAdd = () => {
        setAddOns([...addOns, { name: '', price: 0, quantity: 0, _id: '' }]);
    };

    const handleAddOnDelete = (index: number) => {
        const newAddOns = addOns.filter((_, i) => i !== index);
        setAddOns(newAddOns);
    };
    const handleGoBack = () => {
        navigate(-1); // Go back one page
      };

    const handleCreateOrUpdateDish = async () => {
        if (isStringLengthGreaterThan(dishName, 5) &&
            isStringLengthGreaterThan(dishDescription, 20) &&
            !isNaN(Number(dishPrice))) {
            
            try {
                setLoading(true);
                setLoadingText('Proceessing...'+editId?'Creating Dish' : 'Updating Dish');
                
                const dishData = {
                    name: dishName,
                    description: dishDescription,
                    price: dishPrice,
                    addons: addOns,
                    category
                };

                if (editId) {
                    // Update existing dish
                    await dishService.updateDish(editId, dishData, token);
                    triggerSuccess({ title: 'Success', message: 'Dish updated successfully' });
                    console.log({editId})
                    await dishService.updateDishImage(editId,selectedImage,token)
                    triggerSuccess({ title: 'Success', message: 'Dish Image updated successfully' });
                } else {
                    // Create new dish
                    let added = await dishService.createDish(dishData, token);
                    triggerSuccess({ title: 'Success', message: 'Dish created successfully' });
                    await dishService.updateDishImage(added._id,selectedImage,token)
                    triggerSuccess({ title: 'Success', message: 'Dish Image updated successfully' });
                }
                handleGoBack()
            } catch (error) {
                triggerError({ title: 'Error', message: 'Failed to save dish' });
                console.error(error);
                handleGoBack()
            } finally {
                setLoading(false);
            }
        } else {
            if (!isStringLengthGreaterThan(dishName, 5)) {
                setDishNameError(true);
            }
            if (!isStringLengthGreaterThan(dishDescription, 20)) {
                setDishDescError(true);
            }
            if (isNaN(Number(dishPrice))) {
                setDishPriceError(true);
            }
        }
    };

    const resetDishNameError = () => setDishNameError(false);
    const resetDishDescError = () => setDishDescError(false);
    const resetDishPriceError = () => setDishPriceError(false);

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="util-header">
                    <div>
                        <p className="font-heading-6 font-medium green-color-main text-center">
                            {editId ? 'EDIT DISH' : 'CREATE DISH'}
                        </p>
                    </div>
                    <div className="py-1" />
                    <div className="util-divider" />
                </div>
                <div className="py-2" />
                <div className="p-4 border-gray-radius">
                    <div>
                        <p className="font-small no-space">Dish Name</p>
                        <div className="py-1" />
                        <InputMain
                            onFocus={resetDishNameError}
                            showError={dishNameError}
                            errorMessage="Should be at least 5 characters"
                            value={dishName}
                            onChange={setDishName}
                            placeholder={'What is the name of this dish?'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Description</p>
                        <div className="py-1" />
                        <TextAreaMain
                            onFocus={resetDishDescError}
                            showError={dishDescError}
                            errorMessage="Should be between 20 and 40 characters"
                            value={dishDescription}
                            onChange={setDishDescription}
                            placeholder={'Very briefly describe this dish.'}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Price</p>
                        <div className="py-1" />
                        <InputMain
                            onFocus={resetDishPriceError}
                            showError={dishPriceError}
                            errorMessage="Enter a valid price"
                            value={dishPrice}
                            onChange={(value) => setDishPrice(Number(value))}
                            placeholder={'Price of the dish'}
                            type="number"
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Add-ons (Name / Price)</p>
                        {addOns.map((addOn, index) => (
                            <div key={index} className="container-fluid no-space">
                                <div className="row no-space add-on-container align-items-center justify-content-center">
                                    <div className="col-12 col-sm no-space">
                                <div className="py-1" />
                                        <InputMain
                                            value={addOn.name}
                                            onChange={(value) => handleAddOnChange(index, 'name', value)}
                                            placeholder={'Add-on name'}
                                        />
                                    </div>
                                    <div className="w-max-content no-space" style={{width: '10px'}}></div>
                                    <div className="col-12 col-sm no-space">
                                    <div className="py-1" />
                                        <InputMain
                                            value={addOn.price}
                                            onChange={(value) => handleAddOnChange(index, 'price', value)}
                                            placeholder={'Add-on price'}
                                            type="number"
                                            icon={<FontAwesomeIcon icon={faDollar} />}
                                        />
                                    </div>
                                    <div className="w-max-content">
                                    <div className="py-1 mx-1" />
                                        <button onClick={() => handleAddOnDelete(index)} className="vi-button px-3" style={{backgroundColor: '#e13b58'}}>
                                            <FontAwesomeIcon icon={faTrash} /> <span className="d-xs-inline d-sm-none">Delete Add On</span> 
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))}
                        <div className="py-2" />
                        <button onClick={handleAddOnAdd} className="vi-button px-2">
                            <FontAwesomeIcon icon={faPlus} /> Add Add-on
                        </button>
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-small no-space">Image</p>
                        <div className="py-1" />
                        <FileInput
                            onChange={(e) => setSelectedImage(e.target.files ? e.target.files[0] : null)}
                            placeholder={'Upload an image'}
                            showPreview={true}
                        />
                    </div>
                    <div className="py-1" />
                    <div>
                        <p className="font-p my-2 my-sm-1 font-regular mx-1 mx-sm-1 no-space">
                            <button onClick={handleCreateOrUpdateDish} className="pointer vi-button px-2">
                                {editId ? 'Update Dish' : 'Create Dish'} 
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

