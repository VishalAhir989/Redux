const Speciality = () =>{
    return(
        <div id="speciality">
            <div className="container">
                <div className="speciality-head">
                    <h4 className="text-center">Fresh From Pizzon</h4>
                    <h2 className="text-center">OUR SPECIALITY</h2>
                </div>
                <div className="row">
                    <div className="col-4 d-flex justify-content-center">
                        <div className="speciality-contain">
                            <div className="speciality-img">
                                <li className="speciality-i">
                                    <img src="../../../../public/speciality1.png" alt="speciality1" />
                                </li>
                            </div>  
                            <h3 className="text-center">BURGERS</h3>        
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="speciality-contain">
                            <div className="speciality-img">
                                <li className="speciality-i">
                                    <img src="../../../../public/speciality2.png" alt="speciality2" />
                                </li>
                            </div>  
                            <h3 className="text-center">DESERTS</h3>        
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="speciality-contain">
                            <div className="speciality-img">
                                <li className="speciality-i">
                                    <img src="../../../../public/speciality3.png" alt="speciality3" />
                                </li>
                            </div>  
                            <h3 className="text-center">DOUBLE CHEESE PIZZA</h3>        
                        </div>
                    </div>
                </div>
                <div className="speciality-button text-center">
                    <a href="#">VIEW MORE</a>
                </div>
            </div>
        </div>
    )
}
export default Speciality