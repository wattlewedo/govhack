import "./account.css";

const Account = () => {
    return (
    // <div className="account">
    //   <h1>Account</h1>
    // </div>

    <div className="container">
    <h1>Create Account</h1>
    <form className="form">
    <input type="text" placeholder="Username" className="input-field" />
    <input type="email" placeholder="Email" className="input-field" />
    <input type="password" placeholder="Password" className="input-field" />
    <input type="password" placeholder="Confirm Password" className="input-field" />
    <button type="button" className="btn">NEXT</button>
    </form>

    <div className="divider">
    <hr className="line" />
    <span>Join With</span>
    <hr className="line" />
    </div>

    <div className="social-login">
    <button className="social-button">
        <img src="google-icon.png" alt="Google" className="social-icon"/>
        <p>Google</p>
    </button>
    </div>
    <br></br>
    <div>
    <p>Already Have an Account?</p>
    <button className="login-btn">Login</button>
    </div>
    </div>
    );
};

export default Account;
