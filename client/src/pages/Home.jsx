import Nav from '../components/Nav';
import '../styles/home.css';
import NewPost from '../components/NewPost';
import TopPosts from '../components/TopRecent';
import ProfileButton from '../components/Profilebtn';

function Home() {
    return (
        <div className='home-container'>
            <Nav />
            <main className="main-home">
                <ProfileButton />
        
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