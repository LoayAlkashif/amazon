import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
    return ( 
        <>
            <div className="Login">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
                    className="loginLogo" />
                </Link>

                {/* Login form login container */}
                <div className="LoginContainer">
                    <h1>Sign In</h1>
                    <form action="">
                        <h2>Email</h2>
                        <input type="text" placeholder="Your Email"  required/>
                        <h3>Password</h3>
                        <input type="password" placeholder="Your Password" required />
                        <button className="LoginButton">Sign In</button>
                    </form>

                    <p>
                        By Continuing, you agree to Amazon's Condition of Use and Privacy
                        Notice.
                    </p>
                    <button className="LoginButton">Create Your Amazon Account</button>


                </div>
            </div>
        </>
     );
}
 
export default Login;