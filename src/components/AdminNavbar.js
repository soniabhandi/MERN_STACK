import React from 'react'
import { Link } from 'react-router-dom'
import Logoutbtn from './Logoutbtn'

function AdminNavbar() {
  
    return (
        <React.Fragment>
            <header>
            {/* <!-- header inner --> */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo"> <a href="index.html"><span className="brand">DCX</span></a> </div>
                                    <div className="logo"><span className="sub_brand">Tech Store &reg;</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-11 col-sm-11">
                        <div class="menu-area">
                            <div class="limit-box">
                                <nav class="main-menu">
                                    <ul class="menu-area-main">
                                        <li><a href='/adminhome'>Admin Home</a></li>
                                        <li><Link to='/addproduct'>Add Products</Link></li>
                                        <li><Link to='/manageusers'>ManageUser</Link></li>
                                        <li><Link to='/cpadmin'>Change Password</Link></li>
                                        <Logoutbtn/>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
                </div>
                {/* <!-- end header inner --> */}
            </header>
        </React.Fragment>
    )
}

export default AdminNavbar
