import { useContext, useEffect, useState } from "react";
import { getRecipesList } from "../api/recipesapi";
import Loader from "../components/loader/loader";
import Rating from "../components/rating/rating";
import CarouselBanner from "./carouselBanner";
import { Link } from "react-router-dom";
import { CartContext } from "../components/context/cart";

function Home() {
  const [recipesList, setRecpesList] = useState([]);
  const [loading, setLoading] = useState(false);
  // localStorage.setItem("carrtItes", [{}])

  // eslint-disable-next-line no-unused-vars
  const { cartItems, addCart } = useContext(CartContext);

  const getListOfReciepies = async () => {
    getRecipesList()
      .then((res) => {
        let recipeList = res.data.recipes.map((recp) => {
          return { ...recp, quantity: 0 };
        });
        setRecpesList(recipeList);
        // console.log(recipeList);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(cartItems);
    setLoading(true);
    getListOfReciepies();
  }, []);

  return (
    <>
      <div className="row p-3">
        <CarouselBanner />
        {loading ? (
          <Loader />
        ) : (
          recipesList.map((recp, index) => (
            <div className="col-6 col-md-3 p-3 my-2" key={recp.id}>
              <div className="card">
                <img
                  src={recp.image}
                  className="card-img-top"
                  alt={recp.name}
                ></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <Link to={"/recipes/" + `${recp.id}`}>{recp.name}</Link>
                    <span>${index + 3}.00</span>
                  </h5>
                  <p className="card-text">{recp.instructions}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Rating : <Rating value={recp.rating} />
                    </span>
                    <button
                      onClick={() => addCart(recp)}
                      type="button"
                      className="btn btn-primary"  id="liveToastBtn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
    </>
  );
}

export default Home;
