import { useEffect } from "react";
import Products from "../Products/Products";
import "./Home.css"
const Home = () => {
    useEffect(() => Slider(0), [])
  return ( 
  <>
    <div className="home">
        <div className="homeContainer">
            <div className="homeSliderContainer">

                <div className="homeSlide">
                    <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                    alt="" className="homeImg" />
                </div>

                <div className="homeSlide">
                    <img src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="" className="homeImg" />
                </div>

                <div className="homeSlide">
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" className="homeImg" />
                </div>

            </div>
        </div>

            {/* Home Row  */}
            <div className="homeRow">
                <Products 
                title={"Apple Watch Ultra [GPS + Cellular 49mm]"}
                price={449.99}
                image="https://m.media-amazon.com/images/G/01/apple/AMZ_FamilyStripe_Watch_Ultra_LTE._CB611002230_.png"
                />
                <Products 
                title={"Apple Watch SE (GPS, 40mm)"}
                price={399.99}
                image="https://m.media-amazon.com/images/I/91v9yAPw3-L._AC_UY218_.jpg"
                />

                <Products 
                title={"Apple Watch Series 6 (GPS, 40mm)"}
                price={224.99}
                image="https://m.media-amazon.com/images/I/71b84TN1RgL._AC_UY218_.jpg"
                />

                <Products 
                title={"Apple Watch Series 6 (GPS, 40mm)"}
                price={229.95}
                image="https://m.media-amazon.com/images/I/71aLryIN+ZL._AC_UY218_.jpg"
                />               
                            
            </div>

            {/* Second Row */}

            <div className="homeRow">
                <Products 
                title={"SAMSUNG Galaxy Watch 5 Pro 45mm "}
                price={419.00}
                image="https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_UY218_.jpg"
                />

                <Products 
                title={"Samsung Electronics Galaxy Watch 4 Classic 46mm"}
                price={379.99}
                image="https://m.media-amazon.com/images/I/610VZ9QroVL._AC_UY218_.jpg"
                />

                <Products 
                title={"Samsung Galaxy Watch 4, 44mm, Black"}
                price={119.99}
                image="https://m.media-amazon.com/images/I/61lreWWyEaL._AC_UY218_.jpg"
                />

                <Products 
                title={"Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth)"}
                price={83.95 }
                image="https://m.media-amazon.com/images/I/818MAcfvjPL._AC_UY218_.jpg"
                />               
                            
            </div>

            {/* Third Row  */}

            <div className="homeRow">
                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                
                               
                            
            </div>

            {/* Forth Row  */}
            <div className="homeRow">
                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Products 
                title={"Fitbit Watch"}
                price={2000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />               
                            
            </div>



    </div>
  </>
   );

   function Slider(Counter){
    const slides = document.querySelectorAll(".homeImg");
    slides.forEach((slide, index) => {
        if(index !== Counter){
            slide.style.visibility = `hidden`;
            slide.classList.add(`image-${index}`);
        }
    });
    moveCarousal(Counter, slides, slides.length)
   }

   function moveCarousal (Counter, slides, len){
    if(slides){
        if(Counter >= len -1) Counter = 0;
        else Counter += 1;
        slides.forEach((slide, index) =>{
            if(index === Counter){
                slide.style.visibility = `visible`;
            }else {
                slide.style.visibility = `hidden`;
            }
        });
    }
    setTimeout(() => {
        moveCarousal(Counter, slides, len)
    }, 4000);

   }
}
 
export default Home;