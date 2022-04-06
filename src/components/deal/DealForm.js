import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDeal } from '../../modules/DealManager';
import './DealForm.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllUsers } from '../../modules/UserManager';
import { getAllCategories } from '../../modules/CategoryManager';

export const DealForm = () => {
    const [deal, setDeal] = useState({
        userId: "",
        image: "",
        title: "",
        price: "",
        originalPrice: "",
        link: "",
        vendor: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newDeal = {...deal};
        let selectedVal = event.target.value;
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal);
        }
        newDeal[event.target.id] = selectedVal;
        setDeal(newDeal);
    };

    useEffect(() => {
        getAllUsers().then(setUsers);
    }, []);

    useEffect(() => {
        getAllCategories().then(setCategories);
    }, []);

    const handleClickSaveDeal = (event) => {
        event.preventDefault();

        const userid = deal.userid

        if (userid === 0) {
            window.alert("Please select a user");
        }
        else {
            addDeal(deal)
            .then(() => navigate("/deals"));
        }
    };

    return (
        <form className="dealForm">
			<h2 className="dealForm__title">Add New Deal</h2>
            <fieldset>
				{/* <div className="form-group">
					<label htmlFor="userId">Confirm user: </label>
					<select value={deal.userId} name="customer" id="userId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Please confirm the user</option>
						{users.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div> */}
				<div className="form-group">
					<label htmlFor="userId">Confirm user:</label>
					<input type="text" id="userId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please confirm user" value={deal.userId} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
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
			<fieldset>
				<div className="form-group">
					<label htmlFor="image">Image URL:</label>
					<input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Add image URL here" value={deal.image} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Product name:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please add product name here" value={deal.title} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="price">Product price:</label>
					<input type="text" id="price" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please add product price here" value={deal.price} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="originalPrice">Original product price:</label>
					<input type="text" id="originalPrice" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter original product price here" value={deal.originalPrice} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="link">Product URL:</label>
					<input type="text" id="link" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter product URL here" value={deal.link} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="vendor">Vendor:</label>
					<input type="text" id="vendor" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter product vendor here" value={deal.vendor} />
				</div>
			</fieldset>

			<button className="btn-primary"
				onClick={handleClickSaveDeal}>
				Add Deal
          </button>
		</form>
    );
};