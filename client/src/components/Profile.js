import { useState, useEffect } from "react";
import axios from 'axios';

const Profile = (props) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/users',
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="checkout-container">
            <h2 id="profile-header">{user.username}'s Profile</h2>
            <div>
                <ul>
                    <li><button>Account Details</button></li>
                    <li><button>Quotes</button></li>
                    <li><button>Orders</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;