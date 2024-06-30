function AboutMe() {
    return (
        <section class="service_section layout_padding">
            <div class="service_container">
                <div class="container ">
                    <div class="heading_container heading_center">
                        <h2>
                            About <span>Me</span>
                        </h2>
                        <p>
                        My name is Martin Castaneda. I have a B.S in Computer Science from the University of La Verne, I am based out in Los Angeles, CA. Growing up I had a passion for technology and computers always fascinated me. This led me into interest with IT and with programming.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-md-4 ">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s1.png" alt=""/>
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Education 
                                    </h5>
                                    <p>
                                        Bachelor of Science: University of La Verne <br/> - Computer Science <br/>
                                        Certificate: University of Irvine <br/> - Web Development
                                    </p>
                                    {/* <a href="">
                                        Read More
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s2.png" alt=""/>
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Interests
                                    </h5>
                                    <p>
                                        Programming <br/>
                                        Information Technology 
                                    </p>
                                    {/* <a href="">
                                        Read More
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/s3.png" alt=""/>
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        IT
                                    </h5>
                                    <p>
                                        I currently work as a Help Desk Analyst working along side System administrators and Desktop Team. 
                                    </p>
                                    {/* <a href="">
                                        Read More
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="btn-box">
                        <a href="">
                            View All
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default AboutMe;