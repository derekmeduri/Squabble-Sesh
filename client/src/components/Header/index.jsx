import AuthService from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";

function Header() {

  

        if (AuthService.loggedIn()) {
            return (
                <header>
                    <div className="header-container">
                        <a className="logo-container" href="/home">
                            <img width="100%" height="100%" src="../src/assets/SSLogoOnly.png" alt="Squabble Sesh Logo"></img>
                            <p>Squabble Sesh</p>
                        </a>
                        <ul className="flex-row">
                                <li className="mx-1">
                                    <p>Welcome</p>
                                </li>
                                <li className="Logout">
                                    <a href="/" onClick={() => AuthService.logout()}>
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
                    <div className="header-container" href="/login">
                    <a className="logo-container" href="/login">
                        <img width="100%" height="100%" src="../src/assets/SSLogoOnly.png" alt="Squabble Sesh Logo"></img>
                        <p>Squabble Sesh</p>
                    </a>
                    </div>
                </header>
        );
    };
  
}

export default Header;