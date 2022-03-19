import React, {useState} from "react";
import { DealCard } from "./deal/DealCard";
import "./DealSite.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";
import { Stack } from "react-bootstrap";

export const DealSite = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("deal_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("deal_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("deal_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("deal_user") !== null)
      }


      return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </>
)
}

