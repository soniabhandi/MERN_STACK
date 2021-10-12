import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
                                        <li> <Link to='/'>Home</Link> </li>
                                        <li> <Link to='/about'>About</Link> </li>
                                        <li> <Link to='/product'>product</Link> </li>
                                        <li> <Link to='/blog'> Blog</Link> </li>
                                        <li> <Link to='/contact'>Contact</Link> </li>
                                        <li className="mean-last"> <Link to='/signup'>signup</Link> </li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                            <li><Link to='/login' className="buy">Login</Link></li>
                        </div>
                    </div>
                </div>
                </div>
                {/* <!-- end header inner --> */}
            </header>
        </React.Fragment>
    )
}

export default Navbar
