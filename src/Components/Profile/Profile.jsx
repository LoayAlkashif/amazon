import { Link } from "react-router-dom";
import "./Profile.css"
const Profile = () => {
    return ( 
        <>
            <div className="Profile">
            <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
                    className="ProfileLogo" />
            </Link>

            {/* Profile container */}

            <div className="profileContainer">
                <h1>Your Profile</h1>
                <form >
                    <h3>Name</h3>
                    <input type="text" placeholder="Enter Your Name"required/>
                    <h3>Email</h3>
                    <input type="email" placeholder="Enter Your Email"required/>
                    <h3>Mobile</h3>
                    <input type="number" placeholder="Enter Your Number"required/>
                    <button className="ProfileButton">Update Profile</button>
                </form>
            </div>
            </div>
        </>
     );
}
 
export default Profile;