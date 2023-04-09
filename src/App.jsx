import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Footer/Footer";
import Login from "./Components/Login/Login";
import ListProducts from "./Components/ListProducts/ListProducts";
import Order from "./Components/Orders/Order";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";


const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={[<Header/>, <Home/>, <Footer/>]}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ListProducts" 
            element={[<Header/>, <ListProducts/>, <Footer/>]}/>
            <Route path="/Order" 
            element={[<Header/>, <Order/>, <Footer/>]}/>
            
            <Route path="/Profile" 
            element={[ <Profile/>,  ]}/>

            <Route path="/Cart" 
            element={[<Header/>, <Cart/>, <Footer/>]}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
