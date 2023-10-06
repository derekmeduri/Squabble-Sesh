import Auth from "../../utils/auth";
// import { Link } from 'react-router-dom';

function Header ()  {

        if (Auth.loggedIn()) {
            return (
                <header>
                    <div class="header-container">
                        <div class="logo-container">
                            <img width="100%" height="100%" src="../assets/Squabble Sesh Logo Only.png" alt="Squabble Sesh Logo"></img>
                            <p>Squabble Sesh</p>
                        </div>
                        <ul className="flex-row">
                                <li className="mx-1">
                                    <p>Welcome { firstname } </p>
                                </li>
                                <li className="Logout">
                                    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                                    <a href="/" onClick={() => Auth.logout()}>
                                    Logout
                                    </a>
                                </li>
                        </ul>
                    </div>
                </header>
            );
        } else {
            return (
                <header>
                    <div class="header-container">
                    <div class="logo-container">
                        <img width="100%" height="100%" src="../assets/Squabble Sesh Logo Only.png" alt="Squabble Sesh Logo"></img>
                        <p>Squabble Sesh</p>
                    </div>
                    </div>
                </header>
        );
    };
}

export default Header;