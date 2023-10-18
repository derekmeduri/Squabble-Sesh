import Nav from '../components/Nav';
import '../styles/home.scss'
// import NewPost from '../components/NewPost';
// import TopRecent from '../components/TopRecent';

function Home() {
    return (
        <div className='home-container'>
            <Nav />
            <main className="main-home">
        
            <div className='newpost-container'>
                <NewPost />
            </div>
            
            <h1>Top Squabbles Happening Now!</h1>
            <div className='topposts-container'>
                <TopPosts />
            </div> 
        </main>
    );
};

export default Home;