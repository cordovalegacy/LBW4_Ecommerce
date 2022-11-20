import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Gear from '../img/gear.png';
import Venom from '../img/inventory.jpg';

const Cart = (props) => {

    // const { orderList, setOrderList } = props;
    const { inventoryProduct, setInventoryProduct } = props;
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    // console.log(orderList);
    console.log(inventoryProduct);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/computers/customs')
    //         .then((res) => {
    //             console.log(res.data);
    //             setOrderList(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/computers/inventory')
            .then((res) => {
                console.log(res.data);
                setInventoryProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // const deleteOrder = (idFromBelow) => {
    //     console.log('====idFromBelow', idFromBelow)
    //     axios.delete(`http://localhost:8000/api/computers/customs/${idFromBelow}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setOrderList(orderList.filter((order, index) => order._id !== idFromBelow));
    //         })
    //         .catch((err) => console.log(err))
    // };

    const removeInventory = (idFromBelow) => {
        console.log('====idFromBelow', idFromBelow)
        axios.delete(`http://localhost:8000/api/computers/inventory/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setInventoryProduct(inventoryProduct.filter((product, index) => product._id !== idFromBelow));
            })
            .catch((err) => console.log(err))
    };

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
        <div className="cart-container">
            <table className="cart-container">
                <div className="cart-header-section">
                    <h3 id="cart-header">Your Cart</h3>
                    <div className="cart-link-spacer">
                        <Link style={{ textDecoration: "none", backgroundColor: "darkgoldenrod", padding: "5px", textAlign: "center", border: "2px solid white", borderRadius: "2px" }} to='/computers/customs'>Custom</Link>
                        <Link style={{ textDecoration: "none", backgroundColor: "darkgoldenrod", padding: "5px", textAlign: "center", border: "2px solid white", borderRadius: "2px" }} to='/computers/inventory'>Inventory</Link>
                    </div>
                    <hr style={{ height: "2px", backgroundColor: "white", border: "none", width: "100%" }} />
                    <br />
                </div>
                {/* {
                    orderList.map((order, index) => (
                        <tbody>
                            <div className="cart-card" key={index}>
                                <tr>
                                    <div className="cart-column">
                                        <div id="cart-center">
                                            <thead id="cart-custom">{order.fullName}'s PC</thead>
                                            <img id="cart-gear" src={Gear} alt="gear" />
                                            <p id="cart-custom">Custom</p>
                                        </div>
                                        <div>
                                            <button id='cart-btn-remove' onClick={() => deleteOrder(order._id)}>Remove From Cart</button>
                                            <button id='cart-btn-edit' onClick={() => navigate(`/computers/customs/edit/${order._id}`)}>Edit</button>
                                        </div>
                                    </div>
                                    <td>
                                        <ul className="cart-column-2">
                                            <li id="cart-list">CPU:  {order.cpu}</li>
                                            <li id="cart-list">GPU:  {order.gpu}</li>
                                            <li id="cart-list">RAM:  {order.ram}</li>
                                            <li id="cart-list">Storage:  {order.storage}</li>
                                            <li id="cart-list">Cooling:  {order.cooling}</li>
                                            <li id="cart-list">Theme:  {order.theme}</li>
                                            <li id="cart-list">Special:  {order.special}</li>
                                            <li id="cart-list">Budget:  {order.budget}</li>
                                        </ul>
                                        <button id="cart-btn-checkout" onClick={() => navigate(`/computers/checkout/${order._id}`)}>Checkout</button>
                                    </td>
                                </tr>
                            </div>
                        </tbody>
                    ))}

                <br /> */}

                {
                    inventoryProduct.map((product, index) => (
                            <div className="cart-card" key={index}>
                                <div className="cart-column">
                                    <div id="cart-center">
                                        <thead id="cart-custom">Mid-Tier</thead>
                                        <img id='inventory-cart-pic' src={Venom} alt='computer-photo' />
                                        <p id="cart-custom">Inventory</p>
                                    </div>
                                    <div>
                                        <button id='cart-btn-remove' onClick={() => removeInventory(product._id)}>Remove From Cart</button>                                    </div>
                                </div>
                                <ul className="cart-column-2">
                                    <li id="cart-list">Price:<span style={{ color: "gold", textDecoration: "underline" }}>{product.price}</span></li>
                                    <li id="cart-list">CPU:  {product.cpu}</li>
                                    <li id="cart-list">GPU:  {product.gpu}</li>
                                    <li id="cart-list">RAM:  {product.ram}</li>
                                    <li id="cart-list">Storage:  {product.storage}</li>
                                    <li id="cart-list">Cooling:  {product.cooling}</li>
                                    <br/>
                                    <button id="cart-btn-checkout" onClick={() => navigate(`/computers/order/${product._id}`)}>Review Order</button>
                                </ul>
                            </div>
                    ))}
            </table>
        </div>
    )
}

export default Cart;