import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Order = (props) => {

    const { id } = useParams();
    const [orderCheckout, setOrderCheckout] = useState({});
    const navigate = useNavigate();

    const sendHandler = (e) => {
        e.preventDefault();
        emailjs.send('service_id', 'contact_form', orderCheckout, 'LW4RMYIvhRvf0Fz9c')
            .then((res) => {
                console.log("SUCCESS", res.data);
            }, (err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/computers/inventory/order/${id}`)
            .then((res) => {
                console.log(res.data);
                setOrderCheckout(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="checkout-container">
            <div className="checkout-links">
                <Link to='/'>Go Back Home</Link>
                <Link to='/computers/cart'>Go Back To Cart</Link>
            </div>
            <div>
                <h2 id="checkout-header">Order Details</h2>
            </div>
            <div>
                <div className="checkout-content-background">
                    <h2 id="checkout-content">CPU: {orderCheckout.cpu}</h2>
                    <h2 id="checkout-content">GPU: {orderCheckout.gpu}</h2>
                    <h2 id="checkout-content">RAM: {orderCheckout.ram}</h2>
                    <h2 id="checkout-content">Storage: {orderCheckout.storage}</h2>
                    <h2 id="checkout-content">Cooling: {orderCheckout.cooling}</h2>
                    {/* <button id="checkout-btn" onClick={sendHandler}></button> */}
                </div>
            </div>
        </div>
    )
}

export default Order;