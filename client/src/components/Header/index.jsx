import AuthService from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";

function Header() {

    const { user } = useQuery(QUERY_USER);
  

        if (AuthService.loggedIn()) {
            return (
                <header>
                    <div className="header-container">
                        <div className="logo-container">
                            <img width="100%" height="100%" src="../src/assets/SSLogoOnly" alt="Squabble Sesh Logo"></img>
                            <p>Squabble Sesh</p>
                        </div>
                        <ul className="flex-row">
                                <li className="mx-1">
                                    <p>Welcome { user?.firstName } </p>
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
                    <div className="header-container">
                    <div className="logo-container">
                        <img width="100%" height="100%" src="../src/assets/SSLogoOnly.png" alt="Squabble Sesh Logo"></img>
                        <p>Squabble Sesh</p>
                    </div>
                    </div>
                </header>
        );
    };
  
}

export default Header;