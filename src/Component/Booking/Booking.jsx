import { Phone } from "react-bootstrap-icons"

const Booking  = () => {
    return(
        <div id="booking">
            <div className="container">
                <div className="row">
                    <div className="col-6 booking-contain">
                        <h4>Fresh From Pizzon</h4>
                        <h2>BOOK ONLINE</h2>
                        <p>Elevate your dining experience with ease! Reserve a table at our restaurant, <br /> where exquisite cuisine meets inviting ambiance. Enjoy impeccable service and <br /> create memorable moments with your loved ones, ensuring a delightful and <br /> unforgettable mealtime.</p>
                        <div className="booking-box d-flex align-items-center">
                            <span><Phone/></span>
                            <p className="m-0">+ 91 123 456 789 0</p>
                        </div>
                    </div>
                    <div className="col-6 form-contain-m">
                        <h4 className="text-center">BOOK A TABLE</h4>
                        <div className="form-input">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="number" placeholder="How many persons" />
                            <input type="date" placeholder="Date" />
                            <div className="booking-button text-center mt-4">
                                <a href="#">BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Booking