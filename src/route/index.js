import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages';
import DetailRepo from '../pages/Repositories';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/repositories/:username" element={<DetailRepo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router