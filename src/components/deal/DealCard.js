import React, {useState} from "react";
import "./DealCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { getAllFavorites } from "../../modules/DealManager";


export const DealCard = ({ deal, userFavorites, handleDeleteDeal, handleAddFavorite, handleRemoveFavorite }) => {

    let result = ""
    if (deal.favorite === true) {
        result = "logo"
    } else {
        result= "nologo"
    }

    return (
        <>
        <div className="dealContainer" style={{ display: "inline-flex", alignItems: "center"}}>
        <div className="dealCard">
            <Card border="primary" style={{ width: '18rem' }}>
            {/* <Card.Header as="h6"> Found by: {deal.userId?.name}</Card.Header> */}
            {/* <Card.Img variant="top" src={deal.image} /> */}
            {/* <Image src={deal.image} className='img-fluid shadow-4'/> */}
            <img src={deal.image} className='img-thumbnail mx-auto d-block' alt='...' style={{ maxWidth: '12rem', maxHeight: '7rem' }} />
            <Card.Body>
                <Card.Title>{deal.title}</Card.Title>
                <Card.Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{deal.originalPrice}</Card.Text>
                <Card.Text>${deal.price}</Card.Text>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
                <Stack gap={1} className="col-md-5 mx-auto">
                <Button variant="primary" size="sm" onClick={() => {
                    if (deal.favorite === false) {
                        handleAddFavorite(deal.id);
                    }
                    else if (deal.favorite === true) {
                        handleRemoveFavorite(deal.id);
                    }}}>Favorite Deal</Button>
                <Button variant="success" href={deal.link} size="sm">View Deal</Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteDeal(deal.id)}>Delete Deal</Button>
                <Button variant="warning" size="sm" href={`/deals/${deal.id}/edit`}>Edit Deal</Button>
                </Stack>
            </Card.Body>
            </Card>
        </div>
        </div>
        </>
    );
};
