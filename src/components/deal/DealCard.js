import React from "react";
import "./DealCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";


export const DealCard = ({ deal, handleDeleteDeal }) => {
    return (
        <>
        <div className="dealCard">
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header as="h6">Found by: {deal.user?.name}</Card.Header>
            {/* <Card.Img variant="top" src={deal.image} /> */}
            {/* <Image src={deal.image} className='img-fluid shadow-4'/> */}
            <img src={deal.image} className='img-thumbnail mx-auto d-block' alt='...' style={{ maxWidth: '12rem' }} />
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
                <Button variant="primary" size="sm">Favorite Deal</Button>
                <Button variant="success" href={deal.link} size="sm">View Deal</Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteDeal(deal.id)}>Delete Deal</Button>
                </Stack>
            </Card.Body>
            </Card>
        </div>
        </>
    );
};
