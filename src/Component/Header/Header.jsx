import { Bag, Telephone } from "react-bootstrap-icons"

const Header = () => {
    return(
        <div id="headre">
            <div className="container">
                <div className="row headre-main">
                    <div className="col-3 d-flex align-items-center">
                        <a href="#"><img src="../../../../public/logo.png" alt="logo" /></a>
                    </div>
                    <div className="col-4 headre-list d-flex align-items-center justify-content-end">
                        <ul className="d-flex p-0 m-0">
                            <li><a href="#" className="home">HOME</a></li>
                            <li><a href="#">MENU</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">RESERVATION</a></li>
                            <li><a href="#">PAGES</a></li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <div className="contact-h d-flex align-items-center">
                            <span><Telephone/></span>
                            <p className="m-0"> +91 123 456 789</p>
                        </div>
                        <div className="item-h ms-4 d-flex align-items-center">
                            <span><Bag/></span>
                            <p className="m-0">0 items - $0.00</p>
                        </div>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end">
                        <div className="headre-button">
                            <a href="#">Order online</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header