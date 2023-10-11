import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";
import { Link } from 'react-router-dom';

function Header() {
    const { data } = useQuery(QUERY_USER);
    let user;
    
    if (data) {
    user = data.user;
    }

        if (Auth.loggedIn()) {
            return (
                <header>
                    <div className="header-container">
                        <div className="logo-container">
                            <img width="100%" height="100%" src="../src/assets/SSLogoOnly" alt="Squabble Sesh Logo"></img>
                            <p>Squabble Sesh</p>
                        </div>
                        <ul className="flex-row">
                                <li className="mx-1">
                                    <p>Welcome { user.firstName } </p>
                                </li>
                                <li className="Logout">
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