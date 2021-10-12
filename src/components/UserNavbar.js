import React from 'react'
import { Link } from 'react-router-dom'
import Logoutbtn from './Logoutbtn'

function UserNavbar() {
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
                        <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                    <ul className="menu-area-main">
                                        <li> <Link to='/userhome'>UserHome</Link> </li>
                                        <li> <Link to='/product'>product</Link> </li>
                                        <li> <Link to='/cart'> Cart</Link> </li>
                                        <li> <Link to='/cpuser'> Change Password</Link> </li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <Logoutbtn/>
                    </div>
                </div>
                </div>
                {/* <!-- end header inner --> */}
            </header>
        </React.Fragment>
    )
}

export default UserNavbar
