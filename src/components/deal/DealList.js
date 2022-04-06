import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDeals, deleteDeal, addFavorite, getAllFavorites, updateDeal } from '../../modules/DealManager';
import { DealCard } from './DealCard';
import Button from 'react-bootstrap/Button';
import "./DealCard.css";

export const DealList = () => {
    const [deals, setDeals] = useState([]);
    const [deal, setDeal] = useState({
        userId: 0,
        dealId: 0,
        image: "",
        title: "",
        price: "",
        originalPrice: "",
        link: "",
        vendor: "",
    });
    const [favorites, setFavorites] = useState([]);
    const sessionUser = JSON.parse(sessionStorage.getItem('deal_user'));
    const sessionUserId = sessionUser.id;
    const dealId = deals.id;
    const userId = sessionUser.id;

    const getDeals = () => {
        return getAllDeals().then(dealsFromAPI => {
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
    
    const handleAddFavorite = (deal) => {
        const favoritedDeal = {
            userId: userId,
            dealId: deal.id,
            favorite: true,
        }
        addFavorite(favoritedDeal)
        .then(() => getAllFavorites(sessionUserId).then(setFavorites));
    }

    // const handleRemoveFavorite = (id) => {
    //     const unfavoritedDeal = {
    //         id: id,
    //         favorite: false,
    //     }
    //     addFavorite(unfavoritedDeal)
    //     .then(() => getAllFavorites(sessionUserId).then(setFavorites));
    // }

    const navigate = useNavigate();

    return (
        <>
        <section className="newDealBtn">
            <Button variant="primary" size="sm" onClick={() => {navigate("/deals/create")}}>Add New Deal</Button>
        </section>

        <div className="container-cards" >
            {deals.map(deal => 
                <DealCard 
                key={deal.id} 
                deal={deal} 
                handleDeleteDeal={handleDeleteDeal}
                handleAddFavorite={handleAddFavorite}
                // handleRemoveFavorite={handleRemoveFavorite}
                />)}
        </div>
        </>
    );
}

<Button variant="primary" size="sm">Favorite Deal</Button>


