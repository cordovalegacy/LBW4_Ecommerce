import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Edit = (props) => {

    const {id} = useParams();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [budget, setBudget] = useState("");
    const [cpu, setCpu] = useState("");
    const [gpu, setGpu] = useState("");
    const [ram, setRam] = useState("");
    const [storage, setStorage] = useState("");
    const [cooling, setCooling] = useState("");
    const [theme, setTheme] = useState("");
    const [special, setSpecial] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/computers/customs/${id}`)
        .then((res) => {
            setFullName(res.data.fullName);
            setEmail(res.data.email);
            setPhoneNumber(res.data.phoneNumber);
            setBudget(res.data.budget);
            setCpu(res.data.cpu);
            setGpu(res.data.gpu);
            setRam(res.data.ram);
            setStorage(res.data.storage);
            setCooling(res.data.cooling);
            setTheme(res.data.theme);
            setSpecial(res.data.special)
        })
        .catch((err) => console.log(err.res))
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/computers/customs/edit/${id}`, {
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
            special
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/computers/cart');
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div className='edit-main'>
            <form className='custom-form-container'>
                <div className='custom-form-wrapper'>
                    <label>Full Name: </label>
                    <input type='text' value={fullName} onChange={(e)=> setFullName(e.target.value)} />
                    {errors.fullName ? <p id='error-red'>{errors.fullName.message}</p> : null}
                    <label>Email Address: </label>
                    <input type='text' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    {errors.email ? <p id='error-red'>{errors.email.message}</p> : null}
                    <label id='exception'>Budget: </label>
            <select name='budget' id="custom-cpu" value={budget} defaultValue="Select"
                onChange={(e) => setBudget(e.target.value)}>
                <option value="" disabled selected>Select Budget</option>
                <option value="Starter">Starter ~($1000)</option>
                <option value="Mid-Tier">Mid-Tier ~($1500)</option>
                <option value="High-End">High-End ~($2000)</option>
                <option value="Super-Tier">Super-Tier ~($3000)</option>
                <option value="Enthusiast">Enthusiast ~($4000+)</option>
            </select>            
            {errors.budget ? <p id='error-red'>{errors.budget.message}</p> : null}
                </div>
                <div className='custom-form-wrapper'>
                    <label id='exception'>CPU: </label>
                    <select name='cpu' id="custom-cpu" value={cpu}
                        onChange={(e) => setCpu(e.target.value)}>
                        <option value="" disabled selected>Select Cpu</option>
                        <option value="Ryzen 5 5600x">Ryzen 5 5600x</option>
                        <option value="Ryzen 7 5800x">Ryzen 7 5800x</option>
                        <option value="Ryzen 9 5900x">Ryzen 9 5900x</option>
                    </select>
                    {errors.cpu ? <p id='error-red'>{errors.cpu.message}</p> : null}
                    <label id='exception'>GPU: </label>
                    <select id="custom-gpu" value={gpu}
                        onChange={(e) => setGpu(e.target.value)}>
                        <option value="" disabled selected>Select Gpu</option>
                        <option value="RTX 3050">RTX 3050</option>
                        <option value="RTX 3060">RTX 3060</option>
                        <option value="RTX 3070">RTX 3070</option>
                        <option value="RTX 3080">RTX 3080</option>
                        <option value="RTX 3090">RTX 3090</option>
                    </select>
                    {errors.gpu ? <p id='error-red'>{errors.gpu.message}</p> : null}
                    <label id='exception'>RAM: </label>
                    <select id="custom-ram" value={ram}
                        onChange={(e) => setRam(e.target.value)}>
                        <option value="" disabled selected>Select Ram</option>
                        <option value="16gb">16gb</option>
                        <option value="32gb">32gb</option>
                        <option value="64gb">64gb</option>
                    </select>
                    {errors.ram ? <p id='error-red'>{errors.ram.message}</p> : null}
                    <label id='exception'>Storage: </label>
                    <select id="custom-storage" value={storage}
                        onChange={(e) => setStorage(e.target.value)}>
                        <option value="" disabled selected>Select Storage</option>
                        <option value="500gb ssd m.2 nvme">500gb ssd m.2 nvme</option>
                        <option value="1tb ssd m.2 nvme">1tb ssd m.2 nvme</option>
                        <option value="2tb ssd m.2 nvme">2tb ssd m.2 nvme</option>
                        <option value="1tb hdd">1tb hdd</option>
                        <option value="2tb hdd">2tb hdd</option>
                    </select>
                    {errors.storage ? <p id='error-red'>{errors.storage.message}</p> : null}
                    <label id='exception'>Cooling: </label>
                    <select id="custom-cooling" value={cooling}
                        onChange={(e) => setCooling(e.target.value)}>
                        <option value="" disabled selected>Select Cooling</option>
                        <option value="Stock Air">Stock (air)</option>
                        <option value="Heavy Duty Air">Heavy Duty (air)</option>
                        <option value="AIO">AIO (liquid)</option>
                        <option value="AIO LCD">AIO w/ LCD Screen (liquid)</option>
                    </select>
                    {errors.cooling ? <p id='error-red'>{errors.cooling.message}</p> : null}
                    <label>Theme: </label>
                    <input type='text' value={theme} placeholder='color, bobblehead, style?' onChange={(e)=> setTheme(e.target.value)} />
                    {errors.theme ? <p id='error-red'>{errors.theme.message}</p> : null}
                    <label>Special Requests: <span id='optional'>optional</span></label>
                    <input type='text' id='custom-form-spacer' value={special} placeholder='color, bobblehead, style?' onChange={(e)=> setSpecial(e.target.value)} />
                    <button type='submit' id='custom-form-btn' onClick={submitHandler}>Update</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;