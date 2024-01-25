const About = () => {
    return(
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <div className="about-main-contain">
                            <h4>Delicious Restaurant</h4>
                            <h2>ABOUT PIZZON</h2>
                            <p className="mb-5">Founded on a passion for delivering not just pizzas, but memorable moments, Pizzon is more than <br /> a pizza place—it’s a culinary journey. Join us in savoring the artistry of flavors, where every bite <br /> tells a story of quality, creativity, and devotion. Come, indulge in the pizza experience you deserve. <br /> Welcome to the home of extraordinary pizzas, where every slice is an invitation to culinary <br /> delight.</p>
                            <a href="#" className="about-button">VIEW MORE</a>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img src="../../../../public/about.png" alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About