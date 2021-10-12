import React from 'react'

function Footer() {

    return (
        <div>
            {/* <!--  footer --> */}
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="contact">
                                    <h3>conatct us</h3>
                                    <span>Apt No, Building Name,<br/>
                                        Street, Landmark,<br/>
                                        Address Line 2,<br/>
                                        City, State. Zip Code<br/>
                                        +987 654 3210
                                    </span>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="contact">
                                    <h3>services</h3>
                                    <ul className="links">
                                        <li> <a href="#">Service Name 1</a></li>
                                        <li> <a href="#">Service Name 2</a></li>
                                        <li> <a href="#">Service Name 3</a></li>
                                        <li> <a href="#">Service Name 4</a></li>
                                        <li> <a href="#">Service Name 5</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">

                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="contact">
                                    <h3><span>DCX</span><br/>TECH STORE &reg;</h3>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2021 &copy; All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
            {/* <!-- end footer --> */}
            
        </div>
    )
}

export default Footer
