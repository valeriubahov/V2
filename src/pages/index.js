import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Main from './Main';

const Pages = ({ user }) => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={(<Main user={user} />)} />
            </Routes>
        </HashRouter >
    );
}

export default Pages;