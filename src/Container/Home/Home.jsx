import { useEffect, useState } from "react";
import Elementer from "../../Component/Elementer/Elementer"
import Header from "../../Component/Header/Header"
import Speciality from "../../Component/Speciality/Speciality"
import Experts from "../../Component/Experts/Experts";
import Banner from "../../Component/Banner/Banner";
import Booking from "../../Component/Booking/Booking";
import News from "../../Component/News/News";
import Reviews from "../../Component/Reviews/Reviews";
import About from "../../Component/About/About";
import Footer from "../../Component/Footer/Footer";
import ProductView from "../../Component/Form/Form";

const Home = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setIsSticky(currentScroll > 250);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <>
            <header className={isSticky ? "sticky" : ""}>
                <Header/>
            </header>
            <main>
                <section>
                    <Banner/>
                </section>
                <section>
                    <Elementer/>
                </section>
                <section>
                    <Speciality/>
                </section>
                <section>
                    <ProductView/>
                </section>
                <section>
                    <Booking/>
                </section>
                <section>
                    <Experts/>
                </section>
                <section>
                    <News/>
                </section>
                <section>
                    <Reviews/>
                </section>
                <section>
                    <About/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default Home