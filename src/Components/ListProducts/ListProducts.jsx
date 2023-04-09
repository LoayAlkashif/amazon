import "./ListProducts.css"
import Products from "../Products/Products";
const ListProducts = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default ListProducts;