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
        userId: 0,
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
        // <Form>
		// 	<Form.Group className='mb-3' controlId="userId">
        //         <div className="form-group">
		// 			<label htmlFor="userId">Posted by: </label>
		// 			<select value={deal.userId} name="userId" id="userId" onChange={handleControlledInputChange} className="form-control" >
		// 				<option value="0">Select User</option>
		// 				{users.map(c => (
		// 					<option key={c.id} value={c.id}>
		// 						{c.name}
		// 					</option>
		// 				))}
		// 			</select>
		// 		</div>
        //     </Form.Group>

        //     <Form.Group className="mb-3" id="image">
        //         <Form.Label>Product Image Link</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the product's image link" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="title">
        //         <Form.Label>Product Name</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the product's name" />
        //     </Form.Group>

        //     <Row className="mb-3">
        //     <Form.Group as={Col} controlId="price">
        //         <Form.Label>Product Sale Price</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the product's sale price" />
        //     </Form.Group>

        //     <Form.Group as={Col} controlId="originalPrice">
        //         <Form.Label>Product Original Price</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the product's original price" />
        //     </Form.Group>
        //     </Row>

        //     <Form.Group className="mb-3" controlId="link">
        //         <Form.Label>Product Link</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the product's website link" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="vendor">
        //         <Form.Label>Product Vendor</Form.Label>
        //         <Form.Control type="text" placeholder="Please enter the vendor for the product" />
        //     </Form.Group>

        //     <Button variant="primary" onClick={handleClickSaveDeal}>
        //         Submit Deal
        //     </Button>
        // </Form>

        <form className="dealForm">
			<h2 className="dealForm__title">Add New Deal</h2>
            <fieldset>
				<div className="form-group">
					<label htmlFor="userId">Confirm user: </label>
					<select value={deal.userId} name="customer" id="userId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Please confirm the user</option>
						{users.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
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
			{/* <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset> */}

			<button className="btn-primary"
				onClick={handleClickSaveDeal}>
				Add Deal
          </button>
		</form>
    );
};