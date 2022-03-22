import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getUserById, updateUser} from "../../modules/UserManager"
import "./UserEditForm.css"

export const UserEditForm = () => {
  const [user, setUser] = useState({ name: "", email: "", image:"" });
  const [isLoading, setIsLoading] = useState(false);

  const {userId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const updateExistingUser = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedUser = {
      id: userId,
      name: user.name,
      email: user.email,
      image: user.image
    };

  updateUser(editedUser)
    .then(() => navigate("/users")
    )
  }

  useEffect(() => {
    getUserById(userId)
      .then(user => {
        setUser(user);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form className="userEditForm">
        <fieldset>
          <div className="formgrid">
          <label htmlFor="name">Username</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={user.name}
            />
            
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={user.email}
            />
           
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingUser}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}