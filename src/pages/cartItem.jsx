import { Link } from "react-router-dom";
import { CartContext } from "../components/context/cart";
import { useContext } from "react";

const CartItems = () => {
    const {cartItems,addCart,removeCart, cartCount,getCartTotal } = useContext(CartContext);
    const cart = cartCount();
// useEffect(()=>{
//     console.log(cartItems)
// },[]);
  if(cart > 0){
    return (
      <>
        <div className="row p-3 pb-0">
          <nav aria-label="breadcrumb m-0">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
        <div className="row p-3">
          <div className="col-12">
            {cartItems.map((cart, index) => (
              <div className="row" key={index}>
                <div className="col-12">
                  <div className="row my-1 cart-list">
                    <div className="col lg-col-2 md-col-2 sm-col-2">
                      <img
                        src={cart?.image}
                        alt="image"
                        height="150px"
                        width="150px"
                        className="cart-items-img"
                      />
                    </div>
                    <div className="col lg-col-8 md-col-10 sm-col-10">
                      <h5>
                        <Link to={"/recipes/" + `${cart.id}`}>{cart?.name} ({cart?.cuisine})</Link>
                      </h5>
                      <h6>preparation Time : {cart?.prepTimeMinutes} Minutes</h6>
                      {/* <h6>
                    <span>
                      Rating : <Rating value={cart.rating} />
                    </span>
                  </h6> */}
                      <p>Quantity : {cart?.quantity}</p>
                      <div id="productForm" className="d-flex">
                        <button
                          onClick={() => addCart(cart)}
                          type="button"
                          className="btn outline-secondar"
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                        <span className="position-relative mx- 3 ccount">
                          {cart.quantity}
                        </span>
                        <button
                          onClick={() => removeCart(cart)}
                          type="button"
                          className="btn outline-secondar"
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col lg-col-2 md-col-2 sm-col-2">
                      <p>Standard Delivery</p>
                      <h6>20-25 mins</h6>
                    </div>
                  </div>
                <hr/>
                </div>
              </div>
            ))}
            <div className="lg-col-8 md-col-8 sm-col-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Cost</h5>
                  <div>
                    <h6 className="card-subtitle mb-2 text-body-secondary d-flex justify-content-between">
                      <span>Price ({cart} items)</span><span>₹{getCartTotal()}.00</span>
                    </h6>
                  </div>
                  <div>
                    <h6 className="card-subtitle mb-2 text-body-secondary d-flex justify-content-between">
                      <span> Delivery charge </span>
                      <span> Free</span>
                    </h6>
                  </div>
                  <hr />
                  <h5 className="card-title mb-2 text-body-secondary d-flex justify-content-between">
                    <span> To Pay </span>
                    <span>₹{getCartTotal()}.00</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="lg-col-4 md-col-2 sm-col-1 offset-md-4"></div>
          </div>
        </div>
      </>
    );
  }else{
    return(<h4 className="empty-cart text-align-center d-flex justify-content-center">Your cart is empty! </h4>)
  }
};

export default CartItems;
