import React from 'react';
import errorpage from '../assets/error.jpg'
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
const ErrorPage = () => {
    return (
       <div>
        <Header></Header>
         <div className='min-h-screen flex justify-center items-center'>
            <img className='md:w-1/2' src={errorpage} alt="" />
        </div>
        <Footer></Footer>
       </div>
    );
};

export default ErrorPage;