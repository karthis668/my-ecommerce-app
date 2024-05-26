import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import RecipesdetailsApi from "../api/recipeDetailsApi";
import Loader from "../components/loader/loader";
import RecipesdetailsApi from "../api/recipeDetailsApi";
import Rating from "../components/rating/rating";

function RecipeDetails() {
  // const [data, setData] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [instructions, setInstructions] =  useState([]);
  const {id} = useParams();

  const getRecipesDetails = async()=>{
    setLoading(true);
   await RecipesdetailsApi(id)
      .then((res) => {
        let dataVal = res.data;
        console.log("api response data", dataVal);
        setData(dataVal);
        // let inst = data?.instructions;
        // setInstructions(inst);
        console.log("Sdata",dataVal?.instructions);
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
      <div className="row p-3">
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
              <img src={data?.image} width="600px" height="500px" />
            </div>
            <div className="col-6">
              <h3>{data?.name} ({data?.cuisine})</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  Rating : <Rating value={data.rating} />
                </span>
                <h5>${data.id + 3}.00</h5>
              </div>
              <h6>Ingredients</h6>
              <ul>
                {data?.ingredients?.map((ingr,index)=>(
                  <li key={index}>{ingr}</li>
                ))}
              </ul>
              <h6>Instructions</h6>
              <ul>
                {data?.instructions?.map((inst,index)=>(
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
