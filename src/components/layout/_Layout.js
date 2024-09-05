import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
    return(
        <>
        <Header />
        <Sidebar />
        <main id="main" className="main">
            <Outlet />
        </main>
        </>
    );
}

export default Layout;