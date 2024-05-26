import { useEffect, useState } from "react";
import {getRecipesList} from "../api/recipesapi";
import Loader from "../components/loader/loader";
import Rating from "../components/rating/rating";
import CarouselBanner from "./carouselBanner";
import { Link } from "react-router-dom";

function Home() {
  const [recipesList, setRecpesList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [menu, setMenu] = useState('Home')

  const getListOfReciepies = async()=>{
    getRecipesList()
    .then((res) => {
      // console.log(res.data);
      setRecpesList(res.data.recipes);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  console.log(recipesList);
  }
  useEffect(() => {
    setLoading(true);
    getListOfReciepies()
  }, []);

  return (
    <>
      <div className="row p-3">
      <CarouselBanner /> 
        {loading ? (
          <Loader />
        ) : (
          recipesList.map((recp,index) => (
            <div className="col-6 col-md-3 p-3 my-2" key={recp.id}>
              <div className="card">
                <img src={recp.image} className="card-img-top" alt={recp.name}></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <Link to={"/recipes/"+`${recp.id}`}>{recp.name}</Link>
                    <span>${index + 3}.00</span>
                  </h5>
                  <p className="card-text">{recp.instructions}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Rating : <Rating value={recp.rating} />
                    </span>
                    <button type="button" className="btn btn-primary">
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
