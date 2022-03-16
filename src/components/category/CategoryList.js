import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDeals } from '../../modules/DealManager';
import { DealCard } from '../deal/DealCard';
import Button from 'react-bootstrap/Button';
import { deleteDeal } from '../../modules/DealManager';
import { getAllCategories } from '../../modules/CategoryManager';
import './CategoryList.css'
import { getAllDealsByCategoryId } from '../../modules/CategoryManager';

export const CategoryList = () => {
    const [deals, setDeals] = useState([]);
    const [dealsByCategoryId, setDealsByCategoryId] = useState([]);

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

    // const getDealsByCategoryId = () => {
    //     return getAllDealsByCategoryId().then(dealsFromAPI => {
    //         setDealsByCategoryId(dealsFromAPI);
    //         });
    //     };

    useEffect(() => {
        getDeals();
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    // useEffect(() => {
    //     getDealsByCategoryId();
    // }, []);

    const handleDeleteDeal = (id) => {
        deleteDeal(id)
        .then(() => getAllDeals().then(setDeals));
    }

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const [category, setCategory] = useState(false);

    function filterDeals(categoryId) {
        return deals.filter(deal => {
            return deal.categoryId === categoryId})
    }

    const handleClickShowDeals = (event) => {
        event.preventDefault();
        const deals = filterDeals(category)
        // setCategory(event.target.value);
        setDeals(deals);
    }


    return (
        <>
        {/* filter by category:
        <select onChange={(event) => setCategory(event.target.value)}>
            <option value="">All</option>
            {categories.map(category =>
                <option key={category.id} value={category.id}>{category.name}</option>
            )}
        </select> */}
        <form className="categoryForm">
                    <h2 className="dealForm__title">Product Category</h2>
            <fieldset>
				<div className="form-group">
					<label htmlFor="categoryId">Product category: </label>
					<select name="category" id="categoryId" onChange={(e) => setCategory(parseInt(e.target.value))} className="form-control" >
						<option value="0">Please choose the product category</option>
						{categories.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <Button variant="primary" type="submit" onClick={(handleClickShowDeals)}>
                View Deals
            </Button>
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
