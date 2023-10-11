import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../styles/signup.css';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          userName: formState.userName,
          firstName: formState.firstName,
          hotTake: formState.hotTake,
          bio: formState.bio,
          email: formState.email,
          password: formState.password,
        // fighter picture select
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div className="signup-container">
            <Link to="/login">Already have an account? Go to Login</Link>
            <h1>Sign Up</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input id="username" name="username" type="username" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="first" id="firstname" name="firstname" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hottake">What's your hottest take?</label>
                    <input type="hottake" id="hottake" name="hottake" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Tell everyone a little about yourself!</label>
                    <input type="bio" id="bio" name="bio" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

}


export default Signup;
