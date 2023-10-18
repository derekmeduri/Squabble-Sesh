import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "../styles/signupStyles.scss";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        firstname: formState.firstname,
        hottake: formState.hottake,
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
    console.log("input name", formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const redirectToLogin = () => {
    // Redirect to the login page
    history.push('/login');
  };

  return (
    <div className="signup-container">
      <button className="btn-login" onClick={redirectToLogin}>
        Already have an account? Go to Login
      </button>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
          />
    return (
        <div className="signup-container">
            <Link to="/login">Already have an account? Go to Login</Link>
            <h1>Sign Up</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input id="username" name="username" type="text" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hotTake">What's your hottest take?</label>
                    <input type="text" id="hotTake" name="hotTake" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Tell everyone a little about yourself!</label>
                    <input type="text" id="bio" name="bio" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit" href='/home'>Sign Up</button>
            </form>
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hottake">What's your hottest take?</label>
          <input
            type="text"
            id="hottake"
            name="hottake"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Tell everyone a little about yourself!</label>
          <input type="text" id="bio" name="bio" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn-signup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
