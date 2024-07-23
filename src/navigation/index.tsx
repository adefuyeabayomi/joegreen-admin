import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';
import About from '../pages/about';
import TrainingEnrollment from '../pages/trainingenrollment';
import Trainings from '../pages/trainings';
import Order from '../pages/orders';
import Header from '../components/header';
import Footer from '../components/footer';
import Blog from '../pages/Blog';
import CheckOut from '../pages/CheckOut';
import ForgotPassword from '../pages/Forgotpassword';
import Login from '../pages/Login';
import UserOrders from '../pages/UserOrders';
import SupportPage from '../pages/SupportPage';
import Signup from '../pages/SIgnup';
import UserAccount from '../pages/UserAccount';
import UserTransactionHistory from '../pages/UserTransactionHistory';
import AddToCart from '../pages/AddToCart';
import PasswordReset from '../pages/PasswordReset';



function Navigation(): React.JSX.Element {
    return (
        <>
            <Router>
                <Header />
                <div style={{marginTop: 55}}></div>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/order' Component={Order} />
                    <Route path='/about' Component={About} />
                    <Route path='/trainings' Component={Trainings} />
                    <Route path='/training-enrollment' Component={TrainingEnrollment} />
                    <Route path='/blog' Component={Blog} />
                    <Route path='/checkout' Component={CheckOut} />
                    <Route path='/add-to-cart' Component={AddToCart} />
                    <Route path='/login' Component={Login} />
                    <Route path='/signup' Component={Signup} />
                    <Route path='/forgot-password' Component={ForgotPassword} />
                    <Route path='/reset-password' Component={PasswordReset} />
                    <Route path='/user/orders' Component={UserOrders} />
                    <Route path='/support' Component={SupportPage} />
                    <Route path='/user/account' Component={UserAccount} />
                    <Route path='/user/transaction-history' Component={UserTransactionHistory} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Navigation