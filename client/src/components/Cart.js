import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Gear from '../img/gear.png';

const Cart = (props) => {

    const { orderList, setOrderList } = props;
    const { inventoryProduct, setInventoryProduct } = props;
    const [user, setUser] = useState({});

    // const product = {
    //     cpu: "Ryzen 5 5600x",
    //     gpu : "RTX 3050",
    //     ram : "16gb ddr4 3200mhz",
    //     storage : "SSD, 500gb m.2 nvme",
    //     psu : "750w 80+ gold",
    //     motherboard : "b550M",
    //     cooling : "Stock (air)",
    //     case : "mATX case w/ 6 fans",
    //     accessories : "vertical gpu riser cable",
    //     theme: "green and black",
    //     budget: "1200",
    //     fullName: "Starter",
    //     special: "Inventory - Pre-Build",
    //     email: "N/A",
    //     phoneNumber: 0,
    // }

    const navigate = useNavigate();

    console.log(orderList);
    console.log(inventoryProduct);

    useEffect(() => {
        axios.get('http://localhost:8000/api/computers/customs')
            .then((res) => {
                console.log(res.data);
                setOrderList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/computers/inventory')
            .then((res) => {
                console.log(res.data);
                setInventoryProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteOrder = (idFromBelow) => {
        console.log('====idFromBelow', idFromBelow)
        axios.delete(`http://localhost:8000/api/computers/customs/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                setOrderList(orderList.filter((order, index) => order._id !== idFromBelow));
            })
            .catch((err) => console.log(err))
    };

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
                <Link to='/computers/customs'>Build Another</Link>
                <h3 id="cart-header">Your Cart</h3>
                {
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

                <br />

                {
                    inventoryProduct.map((product, index) => (
                        <tbody>
                            <div className="cart-card" key={index}>
                                <tr>
                                    <div className="cart-column">
                                        <div id="cart-center">
                                            <thead id="cart-custom">Mid-Tier</thead>
                                            <img id="cart-gear" src={Gear} alt="gear" />
                                            <p id="cart-custom">Inventory</p>
                                        </div>
                                        <div>
                                            <button id='cart-btn-remove' onClick={() => removeInventory(product._id)}>Remove From Cart</button>                                    </div>
                                    </div>
                                    <td>
                                        <ul className="cart-column-2">
                                            <li id="cart-list">CPU:  {product.cpu}</li>
                                            <li id="cart-list">GPU:  {product.gpu}</li>
                                            <li id="cart-list">RAM:  {product.ram}</li>
                                            <li id="cart-list">Storage:  {product.storage}</li>
                                            <li id="cart-list">Cooling:  {product.cooling}</li>
                                        </ul>
                                        <button id="cart-btn-checkout" onClick={() => navigate(`/computers/order/${product._id}`)}>Review Order</button>
                                    </td>
                                </tr>
                            </div>
                        </tbody>
                    ))}
            </table>
        </div>
    )
}

export default Cart;