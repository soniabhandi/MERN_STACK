import React from 'react'

function About() {
    return (
        <div>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="titlepage">
                            <h2>about us</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box">
                                <figure><img src="../assets/images/pc_layout.png" /></figure>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box">
                                <h3>Who we are</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* <!-- service --> */}
            <div className="service">
                    <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <div className="title">
                                        <h2>our <strong className="black">service process</strong></h2>
                                        <span>Easy and effective way to get your device repaired.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="service-box">
                                        <i><img src="../assets/icon/service1.png" /></i>
                                        <h3>Fast service</h3>
                                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="service-box">
                                        <i><img src="../assets/icon/service2.png" /></i>
                                        <h3>Secure payments</h3>
                                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="service-box">
                                        <i><img src="../assets/icon/service3.png" /></i>
                                        <h3>Expert team</h3>
                                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="service-box">
                                    <i><img src="../assets/icon/service4.png" /></i>
                                    <h3>Affordable services</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="service-box">
                                    <i><img src="../assets/icon/service5.png" /></i>
                                    <h3>90 Days warranty</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="service-box">
                                    <i><img src="../assets/icon/service6.png" /></i>
                                    <h3>Award winning</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <!-- end service --> */}
        </div>
    )
}

export default About
