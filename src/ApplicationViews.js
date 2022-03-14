import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { DealCard } from './components/deal/DealCard.js'
import { DealList } from "./components/deal/DealList"
import { DealForm } from "./components/deal/DealForm"
import { CategoryList } from "./components/category/CategoryList"
import { ForumList } from "./components/forum/ForumList"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* <Route exact path="/home" element={<Home />} /> */}
                <Route exact path="/home" element={<DealList />} />
                <Route path="/deals" element={<DealList />} />
                <Route path="/deals/create" element={<DealForm />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/forum" element={<ForumList />} />
            </Routes>
        </>
    )
}