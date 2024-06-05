import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Dashboard = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;