import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDeal, getDealById } from '../../modules/DealManager';
import { getAllUsers } from '../../modules/UserManager';
import './DealEditForm.css'


export const DealEditForm = () => {
    const [deal, setDeal] = useState({ title: "", price: "", originalPrice: "", image: "", link: "", vendor: "", categoryId: "", favorite: "" });
    const [isLoading, setIsLoading] = useState(false);

    const {dealId} = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(setUsers);
    }, []);

    const handleFieldChange = (event) => {
        const stateToChange = { ...deal };
        stateToChange[event.target.id] = event.target.value;
        setDeal(stateToChange);
    };

    const updateExistingDeal = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const editedDeal = {
            userId: parseInt(deal.userId),
            id: dealId,
            title: deal.title,
            price: deal.price,
            originalPrice: deal.originalPrice,
            link: deal.link,
            vendor: deal.vendor,
            image: deal.image,
            categoryId: deal.categoryId,
            favorite: deal.favorite
        };

        updateDeal(editedDeal)
            .then(() => navigate("/deals")
            );
    };

    useEffect(() => {
        getDealById(dealId)
            .then(deal => {
                setDeal(deal);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form className="dealEditForm">
                <fieldset>
                    {/* <div className="formgrid">
                        <select value={deal.userId} onChange={handleFieldChange} id="userId">
                            <option value="0">
                                Select a User
                            </option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="userId">Confirm user:</label>
                        <input type="text" id="userId" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Please confirm user" value={deal.userId} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="title"
                            value={deal.title}
                            />

                    <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="price"
                            value={deal.price}
                            />
                            
                    <label htmlFor="originalPrice">Original Price</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="originalPrice"
                            value={deal.originalPrice}
                            />
                        
                    <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="image"
                            value={deal.image}
                            />
                         
                    <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="link"
                            value={deal.link}
                            />
                            
                    <label htmlFor="vendor">Vendor</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="vendor"
                            value={deal.vendor}
                            />
                            
                    <label htmlFor="categoryId">Category</label>
                        <input
                            type="text"
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="categoryId"
                            value={deal.categoryId}
                            />
                            
                    <label htmlFor="favorite">Favorite</label>
                        <input
                            type="text" 
                            required
                            className='form-control'
                            onChange={handleFieldChange}
                            id="favorite"
                            value={deal.favorite}
                            />
                            

                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingDeal}
                            className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};
