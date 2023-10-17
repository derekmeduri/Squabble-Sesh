import Nav from '../components/Nav';
import '../styles/home.scss'
// import NewPost from '../components/NewPost';
// import TopRecent from '../components/TopRecent';

function Home() {
    return (
      
        <main className="main-home">
            
            <Nav />
        
            {/* <div className='newpost-container'>
                <NewPost />
            </div> */}
            
            <h1>Top Squabbles Happening Now!</h1>
            {/* <div className='topposts-container'>
                <TopRecent />
            </div>   */}
        </main>
    );
};

export default Home;