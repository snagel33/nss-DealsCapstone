import React, {useEffect, useState} from 'react';
import { getAllUsers } from '../../modules/UserManager';
import { DealList, UserCard } from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
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

