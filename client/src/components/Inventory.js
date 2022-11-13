import { useState } from 'react';
import InventoryImage from '../img/inventory.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {

    const { inventoryProduct, setInventoryProduct } = props;

    const navigate = useNavigate();

    const product = {
        cpu: "Ryzen 5 5600x",
        gpu: "RTX 3050",
        ram: "16gb ddr4 3200mhz",
        storage: "SSD, 500gb m.2 nvme",
        psu: "750w 80+ gold",
        motherboard: "b550M",
        cooling: "Stock (air)",
        case: "mATX case w/ 6 fans",
        accessories: "vertical gpu riser cable",
        price: "$950"
    }

    function denied() {
        alert("Thanks for your interest! Please register an account with us and log in to add products to cart.");
        navigate("/computers/logreg");
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log('===product', product)
        axios.post('http://localhost:8000/api/computers/inventory',
            product,
            { withCredentials: true })
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setInventoryProduct([...inventoryProduct, response.data]);
                navigate("/computers/cart");
            })
            .catch((err) => {
                console.log(err.response.data);
                denied();
                // alert("Thanks for your interest! Please register an account with us and log in to add products to cart.")
            });
    }
    return (
        <div className='inventory-container-3'>
            <h2 id='inventory-header'>Check out what we have in stock!</h2>
            <div id='inventory-style-3'>
                <div className='inventory-product-wrapper'>
                    <h3 id='inventory-contact'>Mid-Tier Gaming Computer</h3>
                    <img id='inventory-image' src={InventoryImage} alt="product" />
                    <div>
                        <div className='inventory-list'>
                            <h3 style={{ backgroundColor: "gray", opacity: "0.9", borderRadius: "10px" }}>{product.price}</h3>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.cpu}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.gpu}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.ram}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.storage}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.cooling}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.motherboard}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.psu}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.case}</li>
                        </div>
                        <div className='inventory-list'>
                            <li id='inventory-spec-list'>{product.accessories}</li>
                        </div>
                    </div>
                    {/* )
                            })} */}
                    <button onClick={submitHandler} id='add-to-cart'>Add to cart</button>
                </div>

            </div>
            <div className='inventory-container-2'>
                <div id='inventory-style-1'>
                    <h3 id='inventory-disclosure'>Disclosure</h3>
                    <p id='inventory-disclosure-info'>All systems come with an <span id='red'>inactive</span> version of Windows 10</p>
                    <p id='inventory-disclosure-info'>All systems come with <span id='red'>Windows OS</span></p>
                    <p id='inventory-disclosure-info'>Systems come with a 15 day moneyback guarantee <span id='red'>IF</span> computer is fully returned with no signs of user damage such as <span id='red'>liquid damage, cracked parts,</span> or <span id='red'>abuse</span>. </p>
                </div>
                <div id='inventory-style-1'>
                    <h3 id='inventory-educate'>Not sure what you're looking at?</h3>
                    <p id='inventory-educate-info'>CPU (computer processing unit) is like the <span id='red'>brain</span> of the computer. These are important for tasks like streaming, gaming, or content creation.</p>
                    <p id='inventory-educate-info'>GPU (graphics processing unit) is like the <span id='red'>brawn</span> of the computer. These are important for tasks like high performance gaming, and video editing.</p>
                </div>
            </div>
        </div>
    )
}


export default Inventory;