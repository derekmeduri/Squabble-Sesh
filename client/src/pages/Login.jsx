import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/login.css';

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { ...formState },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        window.location.href = '/home';
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (

        <div className="login-container">
            <Link to="/signup">Don't have an account yet? Go to Signup</Link>
        <h1>Login</h1>
        <form name='login' onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
            </div>
            {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
            <button type="submit">Login</button>
        </form>
    </div>
        
    );
}

export default Login;