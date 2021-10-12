import React from 'react'

function Homepage() {
    return (
        <div>

            <section className="slider_section">
                <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="first-slide" src="../assets/images/banner2.jpg" alt="First slide"/>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                                    <strong className="yellow_bold">Product </strong></h1>
                                <p>It is a long established fact that a r <br/>
                                    eader will be distracted by the readable content of a page </p>
                                <a href="#">see more Products</a>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="second-slide" src="../assets/images/banner2.jpg" alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                                    <strong className="yellow_bold">Product </strong></h1>
                                <p>It is a long established fact that a r <br/>
                                    eader will be distracted by the readable content of a page </p>
                                <a href="#">see more Products</a>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="third-slide" src="../assets/images/banner2.jpg" alt="Third slide"/>
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                                    <strong className="yellow_bold">Product </strong></h1>
                                <p>It is a long established fact that a r <br/>
                                    eader will be distracted by the readable content of a page </p>
                                <a href="#">see more Products</a>
                            </div>
                        </div>
                        </div>

                    </div>

                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className='fa fa-angle-right'></i>
                    </a>

                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className='fa fa-angle-left'></i>
                    </a>

                </div>

            </section>

            {/* <!-- service --> */}
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                        <div className="title">
                            <h2>Service <strong className="black">Process</strong></h2>
                            <span>Easy and effective way to get your device repair</span>
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

            {/* <!-- our product --> */}
            <div className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="title">
                            <h2>our <strong className="black">products</strong></h2>
                            <span>We package the products with best services to make you a happy customer.</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bg">
                <div className="product-bg-white">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p1.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p2.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p3.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p4.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p5.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p2.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p6.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="product-box">
                                <i><img src="../assets/icon/p7.png" /></i>
                                <h3>Product Name</h3>
                                <span>$25.00</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Get Quote Box --> */}
                <div className="container">
                    <div className="yellow_bg">
                        <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div className="yellow-box">
                                <h3>REQUEST A FREE QUOTE<i><img src="../assets/icon/call.png" height="50px" width="50px" /></i></h3>
                                <p>Get answers and advice from people you want it from.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div className="yellow-box">
                                <a href="#">Get Quote</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end Quote Box --> */}
            </div>
            {/* <!-- end our product --> */}

        </div>
    )
}

export default Homepage
