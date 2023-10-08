// import Shortcuts from "../Shortcut";

function Nav() {
    return (
        <nav className='left-sidebar'>
            <div className='top-section'>
                <ul className='menu-item'>
                    <li>Top Squabbles</li>
                    <li>Username's Posts</li>
                    <li>Ongoing Beef</li> 
                </ul>
            </div>
            <div className='bottom-section menu-item'>
                <h1>Your Shortcuts</h1>
                <ul className='menu-item'>
                    <li>Placeholder 1</li>
                    <li>Placeholder 2</li>
                    <li>Placeholder 3</li>
                    {/* <Shortcuts /> */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;