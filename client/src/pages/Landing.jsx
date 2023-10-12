import LandingBtns from "../components/LandingBtns";
import '../components/LandingBtns/index.scss'

function Landing() {
    return (

        <main className="main-landing">
            <img src="../src/assets/SquabbleLogo2.png" alt="Squabble Sesh Logo" id="LPMainLogo"></img>
            <h1>Come join the fun and pick a fight with us!</h1>
            <div className="button-container">
                <LandingBtns />
            </div>
                
        </main>
);

};

export default Landing;