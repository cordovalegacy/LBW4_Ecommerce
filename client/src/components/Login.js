import { useState } from 'react';
import Gear from '../img/gear.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login",
            {
                email: email,
                password: password
            },
            {
                withCredentials: true,
                credentials: 'include'
            }
        )
            .then((res) => {
                alert(res.data.message);
                console.log(res.data, "is res data!");
                console.log(res.data.userLoggedIn);
                navigate('/');
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div className='login-registration'>
            <div className='login-image-form-wrapper'>
                <h3 id='login-form-headers'>Thanks for being a member of our community!</h3>
                <h3 id='login-form-headers'>Login here</h3>
                <img id='login-image' src={Gear} alt="gear-icon" />
            </div>
            <form onSubmit={login} className='login-registration-form'>
                <h1 id='login-heading-h1'>Login</h1>
                <p id='red' >{errorMessage ? errorMessage : ""}</p>
                <div id='login-form-description'>
                    <input name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='login-inputs'
                        type="text"
                        placeholder="Enter email address"
                    />
                </div>
                <div id='login-form-description'>
                    <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='login-inputs'
                        type="password"
                        placeholder="Enter Password"
                    />
                </div>
                <input type="submit" id='login-form-button' value={"Login"} />
            </form>
        </div>
    )
};

export default Login;