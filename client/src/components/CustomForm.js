import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from '@emailjs/browser';

const CustomForm = (props) => {

    const [orderList, setOrderList] = useState({});
    const [user, setUser] = useState({});
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [budget, setBudget] = useState("");
    const [cpu, setCpu] = useState(0);
    const [gpu, setGpu] = useState(0);
    const [ram, setRam] = useState(0);
    const [storage, setStorage] = useState(0);
    const [cooling, setCooling] = useState(0);
    const [theme, setTheme] = useState("");
    const [special, setSpecial] = useState("");
    const [errors, setErrors] = useState({});
    const motherboard = 200;
    const powerSupply = 100;
    const chassis = 150;
    const grandTotal =
        (
            motherboard + powerSupply + chassis + parseInt(cpu) + parseInt(gpu) + parseInt(ram) + parseInt(storage) + parseInt(cooling)
        )

    const navigate = useNavigate();

    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const [isOpenCpu, setIsOpenCpu] = useState(false);
    const [isOpenGpu, setIsOpenGpu] = useState(false);
    const [isOpenRam, setIsOpenRam] = useState(false);
    const [isOpenStorage, setIsOpenStorage] = useState(false);
    const [isOpenCooling, setIsOpenCooling] = useState(false);
    const [isOpenMisc, setIsOpenMisc] = useState(false);

    const handleOpenAccount = (e) => {
        e.preventDefault();
        setIsOpenAccount(!isOpenAccount)
        setIsOpenCpu(null)
        setIsOpenGpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(null)
        setIsOpenCooling(null)
        setIsOpenMisc(null)
    }

    const handleOpenCpu = (e) => {
        e.preventDefault();
        setIsOpenCpu(!isOpenCpu)
        setIsOpenAccount(null)
        setIsOpenGpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(null)
        setIsOpenCooling(null)
        setIsOpenMisc(null)
    }

    const handleOpenGpu = (e) => {
        e.preventDefault();
        setIsOpenGpu(!isOpenGpu)
        setIsOpenAccount(null)
        setIsOpenCpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(null)
        setIsOpenCooling(null)
        setIsOpenMisc(null)
    }

    const handleOpenRam = (e) => {
        e.preventDefault();
        setIsOpenGpu(null)
        setIsOpenAccount(null)
        setIsOpenCpu(null)
        setIsOpenRam(!isOpenRam)
        setIsOpenStorage(null)
        setIsOpenCooling(null)
        setIsOpenMisc(null)
    }

    const handleOpenStorage = (e) => {
        e.preventDefault();
        setIsOpenGpu(null)
        setIsOpenAccount(null)
        setIsOpenCpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(!isOpenStorage)
        setIsOpenCooling(null)
        setIsOpenMisc(null)
    }

    const handleOpenCooling = (e) => {
        e.preventDefault();
        setIsOpenGpu(null)
        setIsOpenAccount(null)
        setIsOpenCpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(null)
        setIsOpenCooling(!isOpenCooling)
        setIsOpenMisc(null)
    }

    const handleOpenMisc = (e) => {
        e.preventDefault();
        setIsOpenGpu(null)
        setIsOpenAccount(null)
        setIsOpenCpu(null)
        setIsOpenRam(null)
        setIsOpenStorage(null)
        setIsOpenCooling(null)
        setIsOpenMisc(!isOpenMisc)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const order = {
            fullName,
            email,
            phoneNumber,
            budget,
            cpu,
            gpu,
            ram,
            storage,
            cooling,
            theme,
            special,
            grandTotal
        }

        console.log('===order', order)
        axios.post('http://localhost:8000/api/computers/customs',
            order,
            { withCredentials: true })
            .then((response) => {
                console.log(response);
                console.log(response.data);
                // setOrderList([...orderList, response.data]);
                setFullName("");
                setEmail(response.data.createdBy.email);
                setPhoneNumber();
                setBudget();
                setCpu("");
                setGpu("");
                setRam("");
                setCooling("");
                setStorage("");
                setTheme("");
                setSpecial("");
                navigate("/computers/confirmation");
                emailjs.send('service_id', 'contact_form', order, 'LW4RMYIvhRvf0Fz9c')
                    .then((res) => {
                        console.log("SUCCESS", res.data);
                    }, (err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                alert("Please make sure you are logged in/filled out entire form")
                console.log(err)
                console.log(err.response);
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    }

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
        <form className='custom-form-container'>
            {!isOpenAccount && !isOpenGpu && !isOpenCpu && !isOpenGpu && !isOpenRam && !isOpenStorage && !isOpenCooling && !isOpenMisc ?
                (<button id='enter-custom-page-button'
                    onClick={handleOpenAccount}>Let's Build!
                </button>)
                : null}

            <div className="profile-content-container">
                {isOpenAccount || isOpenGpu || isOpenCpu || isOpenGpu || isOpenRam || isOpenStorage || isOpenCooling || isOpenMisc ?
                    (
                        <ul className="profile-details-container">
                            <li><button className="profile-details-btn" onClick={handleOpenAccount}>Account Details</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenCpu}>CPU</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenGpu}>GPU</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenRam}>RAM</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenStorage}>Storage</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenCooling}>Cooling</button></li>
                            <li><button className="profile-details-btn" onClick={handleOpenMisc}>Misc.</button></li>
                        </ul>
                    )
                    : null}
                {isOpenAccount ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                {user.username ? (<h3>{user.username}'s Information</h3>) : null}
                                <label>Name: </label>
                                <input type='text' name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                {errors.fullName ? <p id='error-red'>{errors.fullName.message}</p> : null}
                                <label>Email Address: </label>
                                <input type='text' name='email' value={email} defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email ? <p id='error-red'>{errors.email.message}</p> : null}
                                <p id='custom-form-alert'
                                    style={
                                        {
                                            fontSize: "0.7em",
                                            borderRadius: "5px",
                                            backgroundColor: "black",
                                            color: "goldenrod",
                                            textShadow: "none",
                                            textAlign: "center",
                                            width: "70%",
                                        }
                                    }>Your quote will be sent to this email</p>
                                <li style={{ width: "min-content" }} className="account-content"><label id='exception'>Budget: </label>
                                    <select name='budget' id="custom-cpu" value={budget} defaultValue="Select"
                                        onChange={(e) => setBudget(e.target.value)}>
                                        <option value="" disabled selected>Select Budget</option>
                                        <option value="1000">Starter ~($1000)</option>
                                        <option value="1500">Mid-Tier ~($1500)</option>
                                        <option value="2000">High-End ~($2000)</option>
                                        <option value="3000">Super-Tier ~($3000)</option>
                                        <option value="4000+">Enthusiast ~($4000+)</option>
                                    </select>
                                    {errors.budget ? <p id='error-red'>{errors.budget.message}</p> : null}</li>
                                <label>Phone Number: </label>
                                <PhoneInput
                                    name='phoneNumber'
                                    country="US"
                                    defaultCountry='US'
                                    placeholder="+1(xxx)-xxx-xxxx"
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                                {errors.phoneNumber ? <p id='error-red'>{errors.phoneNumber.message}</p> : null}
                            </ul>
                            <div id='custom-disclosure-col'>
                                <p style={{ borderRadius: "5px", padding: "10px" }}
                                    id='custom-form-alert'>
                                    <span id='error-red'>Please be logged in to continue... <hr /></span>
                                    This form is meant to give the builder a better idea of what you are looking for so we can provide you an accurate quote.
                                    The <span id='error-red'>Price Tally Tool</span>
                                    only provides an <span id='error-red'>estimate</span>.
                                    Prices are subject to change. If quote is completed and submitted, we will reach out to you with an exact quote.
                                    <hr />
                                    <span id='error-red'>Included in price is a compatible motherboard, power supply, and case (~$450 value)</span></p>
                            </div>
                        </div>
                        <div className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenCpu}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenCpu ? (
                    <div className='cpu-tab-container'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>CPU</h3>
                                <label id='exception'>Central Processing Unit:</label>
                                <select name='cpu' id="custom-cpu" value={cpu} defaultValue={0}
                                    onChange={(e) => setCpu(e.target.value)}>
                                    <option value={0} disabled selected>Select Cpu</option>
                                    <option name="Ryzen 5 5600x" value={200}>Ryzen 5 5600x ~($200)</option>
                                    <option name="Ryzen 7 5800x" value={250}>Ryzen 7 5800x ~($250)</option>
                                    <option name="Ryzen 9 5900x" value={350}>Ryzen 9 5900x ~($350)</option>
                                    <option name="Ryzen 9 5900x" value={300}>Ryzen 5 7600x ~($300)</option>
                                    <option name="Ryzen 9 5900x" value={360}>Ryzen 7 7700x ~($360)</option>
                                    <option name="Ryzen 9 5900x" value={550}>Ryzen 9 7900x ~($550)</option>
                                </select>
                                {errors.cpu ? <p id='error-red'>{errors.cpu.message}</p> : null}
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>What kind of cpu do you need? <hr /></span>
                                Here is what we recommend...
                                <ul className='parts-recommendation'>
                                    <strong>Gaming:</strong>
                                    <hr />
                                    <span id='error-red'>Ryzen 5</span>
                                    <br />
                                    <strong>Gaming, Streaming, Workstation:</strong>
                                    <hr />
                                    <span id='error-red'>Ryzen 7</span>
                                    <br />
                                    <strong>Need a beast that can do everything?</strong>
                                    <hr />
                                    <span id='error-red'>Ryzen 9</span>
                                </ul>
                            </p>
                        </div>
                        <div className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenAccount}>Prev</button>
                            <button id='account-btn' onClick={handleOpenGpu}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenGpu ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>GPU</h3>
                                <label id='exception'>Graphics Processing Unit: </label>
                                <select name='gpu' id="custom-gpu" value={gpu} defaultValue={0}
                                    onChange={(e) => setGpu(e.target.value)}>
                                    <option value={0} disabled selected>Select Gpu</option>
                                    <option name="RTX 3050" value={300}>RTX 3050 ~($300)</option>
                                    <option name="RTX 3060" value={400}>RTX 3060 ~($400)</option>
                                    <option name="RTX 3070" value={550}>RTX 3070 ~($550)</option>
                                    <option name="RTX 3080" value={800}>RTX 3080 ~($800)</option>
                                    <option name="RTX 4080" value={1500}>RTX 4080 ~($1500)</option>
                                    <option name="RTX 4090" value={2300}>RTX 4090 ~($2300)</option>
                                </select>
                                {errors.gpu ? <p id='error-red'>{errors.gpu.message}</p> : null}
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>What kind of gpu do you need? <hr /> </span>
                                Here is what we recommend...
                                <ul className='parts-recommendation'>
                                    <strong>1080p (high settings)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 3050</span>
                                    <br />
                                    <strong>1080p (max settings)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 3060</span>
                                    <br />
                                    <strong>1440p (high settings)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 3070</span>
                                    <br />
                                    <strong>1440p (max settings + ray tracing)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 3080</span>
                                    <br />
                                    <strong>4k (max settings)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 4080</span>
                                    <br />
                                    <strong>4k (max settings + ray tracing)</strong>
                                    <hr />
                                    <span id='error-red'>RTX 4090</span>
                                </ul>
                            </p>
                        </div>
                        <div style={{ marginTop: "-1px" }} className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenCpu}>Prev</button>
                            <button id='account-btn' onClick={handleOpenRam}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenRam ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>RAM</h3>
                                <label id='exception'>Random Access Memory: </label>
                                <select name='ram' id="custom-ram" value={ram} defaultValue={0}
                                    onChange={(e) => setRam(e.target.value)}>
                                    <option value={0} disabled selected>Select Ram</option>
                                    <option value={100}>16gb ~($100)</option>
                                    <option value={200}>32gb ~($200)</option>
                                    <option value={300}>64gb ~($300)</option>
                                </select>
                                {errors.ram ? <p id='error-red'>{errors.ram.message}</p> : null}
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>What kind of ram do you need? <hr /></span>
                                Here is what we recommend...
                                <ul className='parts-recommendation'>
                                    <strong>Gaming:</strong>
                                    <hr />
                                    <span id='error-red'>16gb</span>
                                    <br />
                                    <strong>Gaming, Streaming, Workstation:</strong>
                                    <hr />
                                    <span id='error-red'>32gb</span>
                                    <br />
                                    <strong>Overkill?</strong>
                                    <hr />
                                    <span id='error-red'>64gb</span>
                                </ul>
                            </p>
                        </div>
                        <div className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenGpu}>Prev</button>
                            <button id='account-btn' onClick={handleOpenStorage}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenStorage ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>Storage</h3>
                                <label id='exception'>Solid State Drives/ Hard Disk Drives: </label>
                                <select name='storage' id="custom-storage" value={storage} defaultValue={0}
                                    onChange={(e) => setStorage(e.target.value)}>
                                    <option value={0} disabled selected>Select Storage</option>
                                    <option name="500gb ssd m.2 nvme" value={75}>500gb ssd m.2 nvme ~($75)</option>
                                    <option name="1tb ssd m.2 nvme" value={125}>1tb ssd m.2 nvme ~($125)</option>
                                    <option name="2tb ssd m.2 nvme" value={250}>2tb ssd m.2 nvme ~($250)</option>
                                    <option name="1tb hdd" value={40}>1tb hdd ~($40)</option>
                                    <option name="2tb hdd" value={75}>2tb hdd ~($75)</option>
                                </select>
                                {errors.storage ? <p id='error-red'>{errors.storage.message}</p> : null}
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>What kind of storage do you need? <hr /> </span>
                                Here is what we recommend...
                                <ul className='parts-recommendation'>
                                    <h3>SSD vs. HDD</h3>
                                    <em>SSD - faster, more expensive</em>
                                    -VS-
                                    <em>HDD - slower, less expensive</em>
                                    <hr />
                                    <strong>On a budget:</strong>
                                    <hr />
                                    <span id='error-red'>500gb ssd</span>
                                    <br />
                                    <strong>Balanced</strong>
                                    <hr />
                                    <span id='error-red'>1tb ssd or 2tb hdd</span>
                                    <br />
                                    <strong>Planning on playing AAA games?</strong>
                                    <hr />
                                    <span id='error-red'>2tb ssd</span>
                                </ul>
                            </p>
                        </div>
                        <div style={{ marginTop: "-1px" }} className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenRam}>Prev</button>
                            <button id='account-btn' onClick={handleOpenCooling}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenCooling ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%"
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>Cooling</h3>
                                <label id='exception'>Cpu Cooler: </label>
                                <select name='cooling' id="custom-cooling" value={cooling} defaultValue={0}
                                    onChange={(e) => setCooling(e.target.value)}>
                                    <option value={0} disabled selected>Select Cooling</option>
                                    <option name="Stock (air)" value={40}>Stock (air) ~($40)</option>
                                    <option name="Heavy Duty (air)" value={60}>Heavy Duty (air) ~($60)</option>
                                    <option name="AIO (air)" value={150}>AIO (liquid) ~($150)</option>
                                    <option name="AIO w/ LCD Screen (air)" value={300}>AIO w/ LCD Screen (liquid) ~($300)</option>
                                </select>
                                {errors.cooling ? <p id='error-red'>{errors.cooling.message}</p> : null}
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>What kind of cooler do you need? <hr /> </span>
                                Here is what we recommend...
                                <ul className='parts-recommendation'>
                                    <strong>Gaming:</strong>
                                    <hr />
                                    <span id='error-red'>Stock Air Cooler</span>
                                    <br />
                                    <strong>Gaming, Streaming, Workstation:</strong>
                                    <hr />
                                    <span id='error-red'>All-in-one-liquid-cooler (AIO)</span>
                                    <br />
                                    <strong>Feeling luxurious?</strong>
                                    <hr />
                                    <span id='error-red'>AIO with a mounted LCD Display</span>
                                </ul>
                            </p>
                        </div>
                        <div style={{ marginTop: "-1px" }} className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenStorage}>Prev</button>
                            <button id='account-btn' onClick={handleOpenMisc}>Next</button>
                        </div>
                    </div>
                ) : null}
                {isOpenMisc ? (
                    <div className='main-content-spreader'>
                        <div style={
                            {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                                padding: "1%",
                            }
                        } className="account-content-container">
                            <ul className="account-content-wrapper">
                                <h3>MISC</h3>
                                <label>Theme: </label>
                                <input type='text' name='theme' value={theme} placeholder='color, bobblehead, style?' onChange={(e) => setTheme(e.target.value)} />
                                {errors.theme ? <p id='error-red'>{errors.theme.message}</p> : null}
                                <label>Special Requests: <span id='optional'>optional</span></label>
                                <input type='text' name='special' id='custom-form-spacer' value={special} placeholder='extra fans, specific parts?' onChange={(e) => setSpecial(e.target.value)} />
                                <p id='budget-tag'>{budget}</p>
                                <hr style={{ width: "100%" }} />
                                {
                                    grandTotal < budget ? (
                                        <p id='price-tag'>{grandTotal}</p>
                                    ) : <p style={{ color: "red" }} id='price-tag'>{grandTotal}</p>
                                }
                            </ul>
                            <p id='custom-form-alert'>
                                <span style={{ textAlign: "right" }} id='error-red'>Tell us about your style! <hr /></span>
                                Include color scheme, theme, size, features, extra fans, fancy cables, bobblehead, etc.
                                <hr />
                                <p style={{ color: "white", textShadow: "2px 2px 5px black" }}>Included in price is a compatible motherboard, power supply, and case (~$450 value)</p>
                                <ul className='parts-recommendation'>
                                    <strong>Examples:</strong>
                                    <hr />
                                    <span id='error-red'>Full tower chassis</span>
                                    <br />
                                    <span id='error-red'>White and crystal blue</span>
                                    <br />
                                    <span id='error-red'>A graphics card that wasn't specified</span>
                                    <br />
                                    <span id='error-red'>Super-hero themed</span>
                                </ul>
                            </p>
                        </div>
                        <div style={{ marginTop: "-1px" }} className='custom-nav-buttons'>
                            <button id='account-btn' onClick={handleOpenCooling}>Prev</button>
                            <button type='submit' onClick={submitHandler} id='account-btn'>Submit</button>
                        </div>
                        <button type='submit' onClick={submitHandler} id='account-btn1'>Submit</button>
                    </div>
                ) : null}
            </div>
        </form >
    );
}

export default CustomForm;