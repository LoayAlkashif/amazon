import "./Cart.css"

const Cart = () => {
    return ( 
        <>
            <div className="Cart">
                <div className="CartLeft">
                    <img src="https://bit.ly/3VppGpu" 
                    className="CartAd" alt="" />

                    <div>
                        <h1>Your Cart Is Empty</h1>
                        <img src="https://bit.ly/3YWNvbm" 
                        alt="" className="imgCartEmpty" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cart;