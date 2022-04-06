import React, {useState, useEffect} from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DealCard } from "../deal/DealCard";
import { getAllDeals, deleteDeal, getAllFavorites } from "../../modules/DealManager";
import { useNavigate } from "react-router-dom";
import "./UserCard.css"

// export const UserCard = () => (
//     <section className="user">
//         <h3 className="user__name">Doodles</h3>
//         <div className="user__email">Email: Poodle</div>
//     </section>
// )

export const UserCard = ({user}) => {

    return (
        <>
        <div className="userContainer" style={{ display: "inline-flex", alignItems: "center"}}>
        <div className="userCard">
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header as="h6">{user.name}</Card.Header>
            {/* <Card.Img variant="top" src={user.image} />
            <Image src={user.image} className='img-fluid shadow-4'/> */}
            <img src={user.image} className='img-thumbnail mx-auto d-block' alt='...' style={{ maxWidth: '12rem', maxHeight: '7rem' }} />
            <Card.Body>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>DailyDeals user since {user.joinDate}</Card.Text>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
                <Stack gap={1} className="col-md-5 mx-auto">
                {/* <Button variant="primary" size="sm">Favorite Deal</Button> */}
                {/* <Button variant="success" href={deal.link} size="sm">View Deal</Button> */}
                <Button variant="danger" size="sm" href={`/users/${user.id}/edit`}>Edit User</Button>
                {/* <Link to={`/users/${user.id}/edit`}>
                    <button>Edit</button>
                </Link> */}
                </Stack>
            </Card.Body>
            </Card>
            
        </div>
        </div>
        </>
    );
};

export const DealList = () => {
    const [deals, setDeals] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const sessionUser = JSON.parse(sessionStorage.getItem('deal_user'));
    const sessionUserId = sessionUser.id;
    const getDeals = () => {
        return getAllFavorites().then(dealsFromAPI => {
            setDeals(dealsFromAPI);
            });
        };
            
    useEffect(() => {
        getDeals();
    }, []);

    const handleDeleteDeal = (id) => {
        deleteDeal(id)
        .then(() => getAllDeals().then(setDeals));
    }

    const navigate = useNavigate();



    return (
        <>
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
