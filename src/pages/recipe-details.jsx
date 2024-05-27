import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loader/loader";
import RecipesdetailsApi from "../api/recipeDetailsApi";
import Rating from "../components/rating/rating";
import { CartContext } from "../components/context/cart";

function RecipeDetails() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const {addCart} = useContext(CartContext);

  const getRecipesDetails = async()=>{
    setLoading(true);
   await RecipesdetailsApi(id)
      .then((res) => {
        let dataVal = res.data;
        console.log("api response data", dataVal);
        setData(dataVal);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getRecipesDetails();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="row p-3 pb-0">
        <nav aria-label="breadcrumb m-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {data?.name}
            </li>
          </ol>
        </nav>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="row p-3">
            <div className="col-5">
              <img className="product-detail-img" src={data?.image} width="600px" height="500px" />
              
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between align-items-center">
              <h3>
                {data?.name} ({data?.cuisine})
              </h3>
              <button onClick={()=>addCart(data)} type="button" className="btn btn-primary">
                Add  to Cart
              </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  Rating : <Rating value={data.rating} />
                </span>
                <h5>${data.id + 3}.00</h5>
              </div>
              <h6>Ingredients</h6>
              <ul>
                {data?.ingredients?.map((ingr, index) => (
                  <li key={index}>{ingr}</li>
                ))}
              </ul>
              <h6>Instructions</h6>
              <ul>
                {data?.instructions?.map((inst, index) => (
                  <li key={index}>{inst}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetails;
