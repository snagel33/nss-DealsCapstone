import React from "react";
import { DealCard } from "./deal/DealCard";
import "./DealSite.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";
import { Stack } from "react-bootstrap";


export const DealSite = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)

