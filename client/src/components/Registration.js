import { useState } from 'react';
import Gear from '../img/gear.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = (props) => {

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const registerHandler = (e) => {
        e.preventDefault();

        // const { username, email, password, confirmPassword } = user;
        // if (username && email && password && confirmPassword) {
        axios.post("http://localhost:8000/api/users/register", user, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data)
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
                setConfirmReg(
                    "Thank you for registering, you can now log in"
                );
                setErrors({});
                navigate('/computers/logreg');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    };

    return (
        <div className='login-registration'>
            <div className='login-image-form-wrapper'>
                <h3 id='login-form-headers'>Welcome to the PC community!</h3>
                <h3 id='login-form-headers'>Register your account with us here</h3>
                <img id='login-image' src={Gear} alt="gear-icon" />
            </div>
            <form onSubmit={registerHandler} className='login-registration-form'>
                <h1 id='login-heading-h1'>Register</h1>
                {confirmReg ? <h4 style={{ color: "black" }}>{confirmReg}</h4> : null}
                <div id='login-form-description'>
                    <input onChange={(e) => changeHandler(e)} name="username" value={user.username} id='login-inputs' type="text" placeholder="Enter username (full name)" />
                    {errors.username ? (<span id='red'>{errors.username.message}</span>) : null}
                </div>
                <div id='login-form-description'>
                    <input onChange={(e) => changeHandler(e)} name="email" value={user.email} id='login-inputs' type="text" placeholder="Enter email address" />
                    {errors.email ? (<span id='red'>{errors.email.message}</span>) : null}
                    <small id='small'>We'll never share your email with anyone</small>

                </div>
                <div id='login-form-description-passwords'>
                    <input onChange={(e) => changeHandler(e)} name="password" value={user.password} id='login-inputs' type="password" placeholder="Enter Password" />
                    {errors.password ? (<span id='red'>{errors.password.message}</span>) : null}
                    <input onChange={(e) => changeHandler(e)} name="confirmPassword" value={user.confirmPassword} id='login-inputs' type="password" placeholder="Confirm Password" />
                    {errors.confirmPassword ? (<span id='red'>{errors.confirmPassword.message}</span>) : null}
                </div>
                <input id='login-form-button' type="submit" value={"Register"} />
            </form>
        </div>
    )
};

export default Registration;