import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDeals } from '../../modules/DealManager';
import { DealCard } from '../deal/DealCard';
import Button from 'react-bootstrap/Button';
import { deleteDeal } from '../../modules/DealManager';
import { getAllCategories } from '../../modules/CategoryManager';
import './CategoryList.css'

export const CategoryList = () => {
    const [deals, setDeals] = useState([]);

    const getDeals = () => {
        return getAllDeals().then(dealsFromAPI => {
            setDeals(dealsFromAPI);
            });
        };

    const getCategories = () => {
        return getAllCategories().then(categoriesFromAPI => {
            setCategories(categoriesFromAPI);
            });
        };

    useEffect(() => {
        getDeals();
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    const handleDeleteDeal = (id) => {
        deleteDeal(id)
        .then(() => getAllDeals().then(setDeals));
    }

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [deal] = useState({});

    const handleControlledInputChange = (event) => {
        const newDeal = {...deal};
        let selectedVal = event.target.value;
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal);
        }
        newDeal[event.target.id] = selectedVal;
        setDeals(newDeal);
    };

    const [category, setCategory] = useState(false);

    const categoryId = deal.categoryId

    return (
        <>
        <form className="categoryForm">
                    <h2 className="dealForm__title">Product Category</h2>
            <fieldset>
				<div className="form-group" onClick={() => setCategory((prev) => !prev)}>
					<label htmlFor="categoryId">Product category: </label>
					<select value={deal.categoryId} name="category" id="categoryId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Please choose the product category</option>
						{categories.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
        </form>

        <div className="container-cards" >
            {deals.map(deal =>
                <DealCard 
                key={deal.id} 
                deal={deal} 
                handleDeleteDeal={handleDeleteDeal}/>)}
        </div>
        </>
    );
}
