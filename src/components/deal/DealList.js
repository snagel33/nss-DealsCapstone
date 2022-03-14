import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDeals, deleteDeal } from '../../modules/DealManager';
import { DealCard } from './DealCard';
import Button from 'react-bootstrap/Button';
import "./DealCard.css";

export const DealList = () => {
    const [deals, setDeals] = useState([]);
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
                handleDeleteDeal={handleDeleteDeal}/>)}
        </div>
        </>
    );
}

<Button variant="primary" size="sm">Favorite Deal</Button>


