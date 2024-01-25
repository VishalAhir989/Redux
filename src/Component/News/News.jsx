const News = () => {
    return(
        <div id="news">
            <div className="container">
                <div className="row">
                    <div className="news-head">
                        <h4 className="text-center mt-4 mb-2">Recent Events</h4>
                        <h2 className="text-center mb-4">LATEST NEWS</h2>
                    </div>
                    <div className="col-4 news-c">
                        <div className="news-contain-main">
                            <div className="news-img">
                                <img className="col-12" src="../../../../public/news1.png" alt="news1" />
                            </div>
                            <div className="news-contain mt-3">
                                <div className="news-subtext d-flex">
                                    <span>By Pizadmin</span>
                                    <p className="mb-2">1 Comments</p>
                                </div>
                                <a href="#">PIZZON WHERE CRUST MEETS CREATIVITY.</a>
                                <div className="rews-read-more mt-4">
                                    <a href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 news-c">
                        <div className="news-contain">
                            <div className="news-img">
                                <img className="col-12" src="../../../../public/news2.png" alt="news2" />
                            </div>
                            <div className="news-contain mt-3">
                                <div className="news-subtext d-flex">
                                    <span>By Pizadmin</span>
                                    <p className="mb-2">3 Comments</p>
                                </div>
                                <a href="#">POSSESSION SO COMPARISON INQUIETU</a>
                                <div className="rews-read-more mt-4">
                                    <a href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 news-c">
                        <div className="news-contain">
                            <div className="news-img">
                                <img className="col-12" src="../../../../public/news3.png" alt="news3" />
                            </div>
                            <div className="news-contain mt-3">
                                <div className="news-subtext d-flex">
                                    <span>By Pizadmin</span>
                                    <p className="mb-2">5 Comments</p>
                                </div>
                                <a href="#">OFFERS MADE SPECIALLY FOR KIDS</a>
                                <div className="rews-read-more mt-4">
                                    <a href="#">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News