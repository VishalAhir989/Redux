import { Apple, Facebook, Instagram, Twitter } from "react-bootstrap-icons"

const Footer = () => {
    return(
        <div id="footer">
            <div className="container">
                <div className="row footer-main-contain">
                    <div className="col-4 footer-contain">
                        <a href="#"><img src="../../../../public/logo.png" alt="logo" /></a>
                        <p>20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK <br /> 69QJ+2F Alexandria, United Kingdom</p>
                        <span>PHONE – +91 123 456 789 0, +91 123 456 789 0</span>
                        <div className="footer-email">EMAIL – Info@gmail.com</div>
                    </div>
                    <div className="col-4 footer-contain-2">
                        <h6>OPENING HOURS</h6>
                        <div className="d-flex col-12">
                            <div className="col-6 mt-4">
                                <ul className="footer-contain001 p-0 m-0">
                                    <li className="mb-3"><a href="#">Mon – Tues :</a></li>
                                    <li className="mb-3"><a href="#">Wednes – Thurs :</a></li>
                                    <li className="mb-3"><a href="#">Launch :</a></li>
                                    <li className="mb-3"><a href="#">Sunday :</a></li>
                                </ul>
                            </div>
                            <div className="col-6 mt-4">
                                <ul className="footer-contain001 pe-5 m-0">
                                    <li className="mb-3 text-end"><a href="#">6.00 am – 10.00 pm</a></li>
                                    <li className="mb-3 text-end"><a href="#">6.00 am – 10.00 pm</a></li>
                                    <li className="mb-3 text-end"><a href="#">Everyday</a></li>
                                    <li className="mb-3 text-end footer-button"><a href="#">Closed</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 footer-contain-3">
                        <h6>OPENING HOURS</h6>
                        <ul className="m-0 p-0 mt-4 footer-contain003">
                            <li className="mb-1"><a href="#">Privacy Policy</a></li>
                            <li className="mb-1"><a href="#">Order Tracking</a></li>
                            <li className="mb-1"><a href="#">Warranty and Services</a></li>
                            <li className="mb-1"><a href="#">About Us</a></li>
                            <li className="mb-1"><a href="#">Contact</a></li>
                            <li className="mb-1"><a href="#">My account</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright-main">
                    <div className="col-6">
                        <div className="copyright-contain-1 d-flex align-items-center">
                            <p className="m-0">© Pizzon all Rights Reserved. Designed by</p>
                            <span className="m-0">TemplatesCoder</span>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <ul className="d-flex copyright-contain-2 m-0">
                            <li className="mx-2"><a href="#"><Facebook/></a></li>
                            <li className="mx-2"><a href="#"><Twitter/></a></li>
                            <li className="mx-2"><a href="#"><Apple/></a></li>
                            <li className="mx-2"><a href="#"><Instagram/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer