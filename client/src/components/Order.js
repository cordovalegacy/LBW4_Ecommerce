import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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
                    <h2 id="checkout-content">Price: {orderCheckout.price}</h2>
                    <h2 id="checkout-content">CPU: {orderCheckout.cpu}</h2>
                    <h2 id="checkout-content">GPU: {orderCheckout.gpu}</h2>
                    <h2 id="checkout-content">RAM: {orderCheckout.ram}</h2>
                    <h2 id="checkout-content">Storage: {orderCheckout.storage}</h2>
                    <h2 id="checkout-content">Cooling: {orderCheckout.cooling}</h2>
                    <hr />
                    <br />
                    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: "950.00"
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then(function (details) {
                                    //this function will show a transaction success message upon purchase
                                    alert("Transaction completed by + details.payer.name.given_name");
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    )
}

export default Order;