import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';
import { Blog } from '../pages/Blog';
import { ManageMenu } from '../pages/menu';
import { ManageOrders } from '../pages/orders';
import { OrderRecords } from '../pages/records';
import { CustomerSupport } from '../pages/support';
import { ViewOrder } from '../pages/viewOrder';
import { CreateDish } from '../pages/CreateDish';
import { CreateCategory } from '../pages/CreateCategory';
import { MenuCategory } from '../pages/MenuCategory';
import { CreateBlog } from '../pages/CreateBlog';
import ForgotPassword from '../pages/Forgotpassword';
import Login from '../pages/Login';
import Signup from '../pages/SIgnup';
import PasswordReset from '../pages/PasswordReset';



function Navigation(): React.JSX.Element {
    return (
        <>
            <Router>
                <Header />
                <div style={{marginTop: 55}}></div>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/orders' Component={ManageOrders} />
                    <Route path='/view-order' Component={ViewOrder} />
                    <Route path='/records' Component={OrderRecords} />
                    <Route path='/menu' Component={ManageMenu} />
                    <Route path='/menu-category' Component={MenuCategory} />
                    <Route path='/create-category' Component={CreateCategory} />
                    <Route path='/create-dish' Component={CreateDish} />
                    <Route path='/create-blog' Component={CreateBlog} />
                    <Route path='/support' Component={CustomerSupport} />
                    <Route path='/blog' Component={Blog} />
                    <Route path='/login' Component={Login} />
                    <Route path='/signup' Component={Signup} />
                    <Route path='/forgot-password' Component={ForgotPassword} />
                    <Route path='/reset-password' Component={PasswordReset} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Navigation