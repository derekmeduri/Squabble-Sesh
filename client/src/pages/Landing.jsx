import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingBtns from "../components/LandingBtns";

const Landing = () => {
<body>
    <header>
        <Header />
    </header>
    <div class="main-landing">
        <img src="../assets/SquabbleLogo2.png" alt="Squabble Sesh Logo" id="LPMainLogo"></img>
        <h1>Come join the fun and pick a fight with us!</h1>
            <div class="button-container">
                <LandingBtns />
            </div>
    </div>
    <footer>
        <Footer />
    </footer>
    
</body>

};

export default Landing;