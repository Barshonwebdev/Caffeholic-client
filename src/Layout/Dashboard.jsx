import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import DashboardHome from '../Pages/Dashboard/DashboardHome';

const Dashboard = () => {
    return (
        <div>
            <DashboardHome></DashboardHome>
        </div>
    );
};

export default Dashboard;