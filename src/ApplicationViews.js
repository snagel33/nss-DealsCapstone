import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { DealCard } from './components/deal/DealCard.js'
import { DealList } from "./components/deal/DealList"
import { DealForm } from "./components/deal/DealForm"
import { CategoryList } from "./components/category/CategoryList"
import { ForumList } from "./components/forum/ForumList"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
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
            <Routes>
                {}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/clearUser" element={<Login clearUser={clearUser} />} />
                {}
                <Route exact path="/" element={<PrivateRoute><DealList /></PrivateRoute>} />
                <Route exact path="/home" element={<PrivateRoute><DealList /></PrivateRoute>} />
                <Route path="/deals" element={<PrivateRoute><DealList /></PrivateRoute>} />
                <Route path="/deals/create" element={<PrivateRoute><DealForm /></PrivateRoute>} />
                <Route path="/categories" element={<PrivateRoute><CategoryList /></PrivateRoute>} />
                <Route path="/forum" element={<PrivateRoute><ForumList /></PrivateRoute>} />
            </Routes>
        </>
    )
}