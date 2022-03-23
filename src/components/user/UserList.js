import React, {useContext, useEffect, useState} from 'react';
import { DealContext } from '../../modules/DealManager';
import { getAllUsers } from '../../modules/UserManager';
import { DealList, UserCard } from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const sessionUser = JSON.parse(sessionStorage.getItem('deal_user'));
    const sessionUserId = sessionUser.id;
    // const [deals, getDeals] = useContext(DealContext);



    const getUsers = () => {
        return getAllUsers(sessionUserId).then(usersFromAPI => {
          setUsers(usersFromAPI);
        });
      };
    
      useEffect(() => {
        getUsers();
      }, []);

    return (
        <div className="container-cards">
            {users.map(user => <UserCard key={user.id} user={user} />)}
            <DealList />
        </div>
    );
};

