import AuthService from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";
import ProfileButton from "../Profilebtn";

function Header() {

  

        if (AuthService.loggedIn()) {
            return (
                <div className="base-header">
                    <div className="header-container">
                        <a className="logo-container" href="/home">
                            <img width="100%" height="100%" src="../src/assets/SSLogoOnly.png" alt="Squabble Sesh Logo"></img>
                            <p>Squabble Sesh</p>
                        </a>
                        <ul className="flex-row">
                                <li className="mx-1">
                                    <p>Welcome</p>
                                </li>
                                <ProfileButton/>
                                <li className="Logout">
                                    <a className="button" href="/" onClick={() => AuthService.logout()}>
                                    Logout
                                    </a>
                                </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="base-header2">
                    <div className="header-container" href="/login">
                    <a className="logo-container" href="/login">
                        <img width="100%" height="100%" src="../src/assets/SSLogoOnly.png" alt="Squabble Sesh Logo"></img>
                        <p>Squabble Sesh</p>
                    </a>
                    </div>
                </div>
        );
    };
  
}

export default Header;