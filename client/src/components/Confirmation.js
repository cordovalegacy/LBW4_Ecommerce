import { Link } from "react-router-dom";

const Confirmation = () => {
    return(
        <div className="confirm-container">
            <h1 id="confirm-header">Thank you for your request!</h1>
            <h2 id="confirm-content">Hold tight! We will get back to you as soon as we can.</h2>
            <h3 id="confirm-alert">You will receive an automated email if your email address is valid</h3>
            <br/>
            <Link to='/computers/cart'>Process the rest of your orders</Link>
            <br/>
            <Link to='/'>Go Home</Link>
        </div>
    )
}

export default Confirmation;