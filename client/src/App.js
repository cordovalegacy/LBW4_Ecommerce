import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './components/Home';
import Gallery from './components/Gallery';
import CustomForm from './components/CustomForm';
import Inventory from './components/Inventory';
import About from './components/About';
import Faq from './components/Faq';
import Cart from './components/Cart';
// import Edit from './components/Edit';
import Confirmation from './components/Confirmation';
// import Checkout from './components/Checkout';
import LogReg from './views/LogReg';
import Profile from './components/Profile';
import Order from './components/Order';
import Logo from './img/lb_logo_2.jpg';
import CartIcon from './img/cart_icon.png';
import Insta from './img/icons8-instagram.svg';
import Youtube from './img/icons8-youtube-logo.svg';

function App() {

    const [orderList, setOrderList] = useState([]);
    const [inventoryProduct, setInventoryProduct] = useState([
        { index: 1, "cpu": "Ryzen 5 5600x" },
        { index: 2, "gpu": "RTX 3050" },
        { index: 3, "ram": "16gb ddr4 3200mhz" },
        { index: 4, "storage": "SSD, 500gb m.2 nvme" },
        { index: 5, "psu": "750w 80+ gold" },
        { index: 6, "motherboard": "b550M" },
        { index: 7, "cooling": "Stock (air)" },
        { index: 8, "case": "mATX case w/ 6 fans" },
        { index: 9, "accessories": "vertical gpu riser cable" },
        { index: 10, "price": "$950" },
    ]);

    const [user, setLoginUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("")

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/users',
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setDisplayName(res.data.username);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const logout = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/users/logout',
                //as a post request, we must add an object or something of some kind
                //because we are not adding anything to the db, we can send an empty object 
                {},
                { withCredentials: true });
            console.log(res);
            console.log(res.data);
            alert("You have logged out");
            window.location.reload(false);
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <Link to='/'><img id='logo' src={Logo} alt='Logo' /></Link>
                    <Link to='/computers/gallery'>Gallery</Link>
                    <Link to='/computers/customs'>Custom</Link>
                    <Link to='/computers/inventory'>Inventory</Link>
                    <Link id='company-link' to='/computers/about'>Company</Link>
                    <Link id='faq-link' to='/computers/faq'>FAQ's</Link>
                    <Link to='/computers/cart'><img id='cart' src={CartIcon} alt='cart' /></Link>
                    <br />
                    <div className="home-login-registration">
                        {!isOpen ? (
                            <button style={{width: "min-content"}} id='account-btn' onClick={handleOpen}>Account</button>
                        ) : null}
                        <br />
                        {isOpen ? (
                            <div className='menu-spacer'>
                                <div className='menu'>
                                    {isOpen ? <div style={{ textAlign: "right", borderLeft: "none" }} id='display-name'>{displayName}</div> : null}
                                    <Link id='profile-mobile-link' to='/computers/profile/:username'>Profile</Link>
                                    <Link id='logreg-mobile-link' to='/computers/logreg'>Register/Login</Link>
                                    <button id='logout-btn' onClick={logout}>Logout</button>
                                    <button id='account-close-btn' onClick={handleClose}>Close</button>
                                </div>
                            </div>
                        ) : null}
                        {!isOpen ? <div id='display-name'>{displayName}</div> : null}
                    </div>
                </nav>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/computers/order/:id' element={<Order />} />
                    <Route path='/computers/profile/:username' element={<Profile />} />
                    <Route path='/computers/logreg' element={<LogReg setLoginUser={setLoginUser} />} />
                    <Route path='/computers/gallery' element={<Gallery />} />
                    <Route path='/computers/customs' element={<CustomForm orderList={orderList} setOrderList={setOrderList} />} />
                    <Route path='/computers/inventory' element={<Inventory inventoryProduct={inventoryProduct} setInventoryProduct={setInventoryProduct} />} />
                    <Route path='/computers/about' element={<About />} />
                    <Route path='/computers/faq' element={<Faq />} />
                    <Route path='/computers/cart' element={<Cart inventoryProduct={inventoryProduct} setInventoryProduct={setInventoryProduct} orderList={orderList} setOrderList={setOrderList} />} />
                    {/* <Route path='/computers/customs/edit/:id' element={<Edit orderList={orderList} setOrderList={setOrderList} />} /> */}
                    {/* <Route path='/computers/checkout/:id' element={<Checkout orderList={orderList} setOrderList={setOrderList} />} /> */}
                    <Route path='/computers/confirmation' element={<Confirmation />} />
                </Routes>
                <footer>
                    <h3>Connect with Legacy Builds LLC</h3>
                    <a href="https://www.instagram.com/legacybuildspc/">
                        <img id='social-link' src={Insta} alt='Link to Instagram' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCPm6ET8xaqRTYHL5tmRrpUQ/featured">
                        <img id='social-link' src={Youtube} alt='Link to Youtube' />
                    </a>
                    <p>Website by Brendan Cordova, Owner of Legacy Builds LLC.</p>
                    <p>Instagram Link By: https://icons8.com/icons/set/instagram</p>
                    <p>Instagram Link By: https://icons8.com/icons/set/youtube</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;