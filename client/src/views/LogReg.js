import Login from "../components/Login";
import Registration from "../components/Registration";

const LogReg = (props) => {

    const setLoginUser = props;

    return (
        <div className="logreg-container">
            <div id="login-margin">
                <Login setLoginUser={setLoginUser} />
            </div>
            <div>
                <Registration />
            </div>
        </div>
    )
}

export default LogReg;