import Nav from '../components/Nav';
// import NewPost from '../components/NewPost';
// import TopRecent from '../components/TopRecent';

function Home() {
    return (
       <div className='side-nav'> 
        <nav>
            <Nav />
        </nav>
        <main className="main-landing">
            {/* <div className='newpost-container'>
                <NewPost />
            </div> */}
            <h1>Top Squabbles Happening Now!</h1>
            {/* <div className='topposts-container'>
                <TopRecent />
            </div>   */}
        </main>
    </div>
    );
};

export default Home;