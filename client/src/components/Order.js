import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Gear from '../img/gear.png';

const Order = (props) => {

    const { id } = useParams();
    const [orderCheckout, setOrderCheckout] = useState({});
    const shipping = 100;
    const [user, setUser] = useState({});
    const navigate = useNavigate();

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

    const data = { orderCheckout, user }

    return (
        <div className="checkout-container">
            <div className="checkout-links">
                <h2 style={{padding: "5px"}}>Order Details</h2>
                <img id="cart-gear" src={Gear} alt="gear" />
                <Link style={{ textDecoration: "none", backgroundColor: "darkgoldenrod", padding: "5px", textAlign: "center", border: "2px solid white", borderRadius: "2px" }} to='/'>Go Back Home</Link>
                <Link style={{ textDecoration: "none", backgroundColor: "darkgoldenrod", padding: "5px", textAlign: "center", border: "2px solid white", borderRadius: "2px" }} to='/computers/cart'>Back To Cart</Link>
            </div>
            <hr style={{ border: "2px solid gold", width: "90%", marginBottom: "20px" }} />
            <div className="order-page-layout-flex">
                <div className="checkout-content-background">
                    <h3>{user.username}'s PC</h3>
                    <hr style={{ border: "2px solid gold", width: "90%", marginBottom: "20px" }} />
                    <h2 id="checkout-content">CPU: {orderCheckout.cpu}</h2>
                    <h2 id="checkout-content">GPU: {orderCheckout.gpu}</h2>
                    <h2 id="checkout-content">RAM: {orderCheckout.ram}</h2>
                    <h2 id="checkout-content">Storage: {orderCheckout.storage}</h2>
                    <h2 id="checkout-content">Cooling: {orderCheckout.cooling}</h2>
                    <h2 id="checkout-content">Power Supply: {orderCheckout.psu}</h2>
                    <h2 id="checkout-content">Case: {orderCheckout.case}</h2>
                    <h2 id="checkout-content">Accessories: {orderCheckout.accessories}</h2>
                </div>
                <div style={{flex: "1.5"}} className="checkout-content-background">
                    <div className="breakdown-summary-container">
                        <ul breakdown-summary-container>
                            <h3 style={{ borderRadius: "50px", width: "50%" }}>Summary:</h3>
                            <li style={{ fontSize: "20px", textShadow: "0px 0px 10px black" }} id="breakdown-order"> PC - ${orderCheckout.price}</li>
                            <li style={{ fontSize: "20px", textShadow: "0px 0px 10px black" }} id="breakdown-order">Shipping - ${shipping}</li>
                            <li style={{ fontSize: "20px", textShadow: "0px 0px 10px black" }} id="breakdown-order">Sales Tax at Checkout</li>
                        </ul>
                    </div>
                    <hr style={{ width: "100%", border: "2px solid gold", boxShadow: "0px 0px 10px 0px white" }} />
                    <p style={{ textAlign: "center" }} id="breakdown-order">Subtotal: ${orderCheckout.price}</p>
                    <h3>Grand Total: ${(orderCheckout.price + shipping)}</h3>
                    <hr />
                    <br />
                    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: "1050.00",
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions, e) => {
                                return actions.order.capture().then(function (details) {
                                    //this function will show a transaction success message upon purchase
                                    alert("Transaction completed by + details.payer.name.given_name");
                                    e.preventDefault();
                                    emailjs.send('service_id', 'contact_form', orderCheckout && user.email, 'LW4RMYIvhRvf0Fz9c')
                                        .then((res) => {
                                            console.log("SUCCESS", res.data);
                                        }, (err) => {
                                            console.log(err);
                                        });
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