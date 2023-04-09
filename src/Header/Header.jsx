import './Header.css'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = () => {
  return (
  <>
    <nav className="header">

    <div className="headerTop">
      <div className="headerLeftNav">
      <MenuIcon/>
      </div>

      {/* Logo start */}
      <Link to="/">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
      alt="" className="logo" />
      </Link>
      {/* Logo end */}

      {/* search box start */}
      <div className="headerSearch">
      <input type="text" className="headerSearchInput" />
      <SearchIcon className='headerSearchIcon'/>
      </div>
      {/* search box end */}

      {/* Links start */}
      <div className="headerNavbar">
      {/* signIn / signOut */}
      <Link to="/Login" className='headerLink'>
        <div className="headerOptions">
        <span className="headerOption_One">Hello</span>
        <span className="headerOption_Two">User</span>
        </div>
      </Link>

      {/* Return Order */}
      <Link to="/Order" className='headerLink'>
        <div className="headerOptions">
        <span className="headerOption_One">Return</span>
        <span className="headerOption_Two">Order</span>
        </div>
      </Link>

      {/* Prime */}
      <Link to="/" className='headerLink'>
        <div className="headerOptions">
        <span className="headerOption_One">Try</span>
        <span className="headerOption_Two">Prime</span>
        </div>
      </Link>

      {/* Profile */}
      <Link to="/Profile" className='headerLink'>
        <div className="headerOptions">
        <span className="headerOption_One">Your </span>
        <span className="headerOption_Two">Profile</span>
        </div>
      </Link>

      {/* Basket */}
      <Link to="/Cart" className='headerLink'>
        <div className="headerOptions_Basket">
        <ShoppingBasketIcon/>
        <span className="headerOption_Two basketCount">4</span>
        </div>
      </Link>
      </div>
      {/* Links end */}
      


    </div>

    {/* navbar bottom */}
    <div className="headerBottom">
      {/* Adress */}
      <div className="headerAdress">
        <div className="headerAdress_Icon">
          <LocationOnIcon/> 
        </div>
        <div className="headerOptions">
        <span className="headerOption_One">Deliver To </span>
        <span className="headerOption_Two">Loay Alkashif</span>
        </div>
      </div>

      <div className="headerbottom_Navbar">
        <span>
          <Link to='/ListProducts' className='headerLink'> All Products</Link>
        </span>
        <span> Book</span>
        <span> New Release </span>
        <span> Gift ideads </span>
        <span> Loay Alkashif </span>
        <span> Amazon Pay </span>
        </div>

    </div>

    </nav>
  </>
   );
}

export default Header;