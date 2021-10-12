import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from './components/home/Homepage';
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import Product from './components/product/Product'
import Adminhome from './components/admin/adminhome/Adminhome'
import ManageUsers from './components/admin/manageusers/ManageUsers';
import Userhome from './components/user/userhome/Userhome'
import Cpadmin from './components/admin/Cpadmin'
import Addproduct from './components/admin/addproducts/Addproduct';
import Cpuser from './components/user/Cpuser';
import Cart from './components/user/cart/Cart'

import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';


function Routes() {
    return (
        <Switch>
              <Route path="/adminhome" >
                   <Adminhome/>
              </Route>
              <Route path="/cpadmin">
                    <Provider store={store}>
                            <Cpadmin/>
                    </Provider>
              </Route>
              <Route path="/manageusers">
                  <ManageUsers/>
              </Route>
              <Route path="/addproduct">
                  <Addproduct/>
              </Route>
              <Route path="/userhome">
                  <Userhome/>
              </Route>
              <Route path="/cpuser">
                    <Provider store={store}>
                            <Cpuser/>
                    </Provider>
              </Route>
              <Route path="/cart">
                  <Cart/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/blog">
                  <Blog/>
              </Route>
              <Route path="/product">
                <Provider store={store}>
                    <Product/>
                </Provider>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
              <Route path="/login">
                    <Provider store={store}>
                            <Login/>
                    </Provider>
              </Route>
              <Route path="/signup">
                  <Signup/>
              </Route>
              <Route exact path="/">
                  <Homepage/>
              </Route>
        </Switch>
    )
}

export default Routes
