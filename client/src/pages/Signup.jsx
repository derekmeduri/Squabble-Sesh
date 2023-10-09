import '../styles/signup.css';

function Signup() {
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="hottake">What's your hottest take?</label>
                    <input type="text" id="hottake" name="hottake" required />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Tell everyone a little about yourself!</label>
                    <input type="text" id="bio" name="bio" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

};

export default Signup;
