function HomePage() {
    return <>
        <section class="slider_section ">
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-6 ">
                                    <div class="detail-box">
                                        <h1>
                                            About Me <br/>
                                                
                                        </h1>
                                        <p>
                                        My name is Martin Castaneda. I have a B.S in Computer Science from the University of La Verne, I am based out in Los Angeles, CA. Growing up I had a passion for technology and computers always fascinated me. This led me into wanting to pursue programming.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/pictureOfMartin.png" alt="Picture of Martin"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-6 ">
                                    <div class="detail-box">
                                        <h1>
                                            Document Project <br/>
                                                Manager
                                        </h1>
                                        <p>
                                        The document-project-manager application provides a destination for documents/images to be uploaded for others to provide input. Users can create a profile to make posts and comment on them.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/documentProjectManager.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container ">
                            <div class="row">
                                <div class="col-md-6 ">
                                    <div class="detail-box">
                                        <h1>
                                            Note <br/>
                                                Taker
                                        </h1>
                                        <p>
                                            Note Taker allows users to create and save notes when the application is launched.
                                        </p>
                                        <div class="btn-box">
                                            <a href="" class="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/Note-TakerApp.png" alt="Initial page of note taker application"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol class="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                    <li data-target="#customCarousel1" data-slide-to="1"></li>
                    <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
            </div>

        </section>
        </>
};
export default HomePage; 