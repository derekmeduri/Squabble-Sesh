import Nav from '../components/Nav';
import '../styles/home.css';
import NewPost from '../components/NewPost';
import TopPosts from '../components/TopRecent';
import UserPosts from '../components/UserPosts';

function Home() {
    return (
        <div className='home-container'>
            <Nav />
            <main className="main-home">
        
                <div className='newpost-container'>
                    <NewPost />
                </div>
            
                <div className='topposts-container'>
                    <h1>Top Squabbles Happening Now!</h1>
                    <TopPosts />
                </div> 
            </main>
        </div>
    );
};

export default Home;