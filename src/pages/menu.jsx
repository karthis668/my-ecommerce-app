import { Link } from "react-router-dom"
import { getRecipesByTag, getRecipesByTagName } from "../api/recipesapi"
import { useContext, useEffect, useState } from "react"
import Loader from "../components/loader/loader";
import { CartContext } from "../components/context/cart";

function Menu() {
  const [loading, setLoading] = useState(false);
  const [recipeTagList, setRecipeTagList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [menu, setMenu] = useState('');

  const { addCart } = useContext(CartContext);


  const recipesByTag = async () =>{
    setLoading(true);
    await getRecipesByTag().then((res)=>{
      setRecipeTagList(res?.data.sort());
      setMenu(res?.data[0]);
      setLoading(false);
    }).then((secRes)=>{
      // recipeByTagName(secRes);
      console.log(secRes);
      // setLoading(false);
    })
  }

  const recipeByTagName = (tagName)=>{
    setMenu(tagName);
    getRecipesByTagName(tagName).then((res)=>{
      setRecipeList(res.data.recipes);
    })
  }

  useEffect( ()=>{
    recipesByTag();
  },[]);

  useEffect(()=>{
    if(recipeTagList){
      recipeByTagName(recipeTagList[0]);
    }
  }, [recipeTagList])

  return (
    <>
      <div className="row p-3 pb-0">
        <nav aria-label="breadcrumb m-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Menu
            </li>
          </ol>
        </nav>
      </div>

      <div className="row p-3">
        <div className="col-md-3 col-lg-3 col-sm-6 p-3">
        <ul className="list-group overflow-auto" style={{height:"100vh"}}>
          {recipeTagList.map((recipeName,index) => (
          <li className={`list-group-item ${menu == recipeName ? "active" : ""}`} key={index} onClick={()=>recipeByTagName(recipeName)}>{recipeName}</li>
        ))}
        </ul>
        </div>

        <div className="col-md-9 col-lg-9 col-sm-6 p-3">
         <div className="row">
         {
           loading ? (<Loader/>) : ( recipeList.map((recp) => (
            <div className="col-6 col-md-6 col-lg-4 col-sm-6 p-3" key={recp.id}>
              <div className="card homepg-card">
                <img
                  src={recp.image}
                  className="card-img-top"
                  alt={recp.name}
                ></img>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <Link to={"/recipes/" + `${recp.id}`}>{recp.name}</Link>
                    <span className="rupees">₹{recp.caloriesPerServing}.00</span>
                  </h5>
                  <p className="card-text">{recp.instructions}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Rating :  <i className="bi bi-star-fill" style={{color:'green'}}></i> {recp.rating}
                    </span>
                    <button
                      onClick={() => addCart(recp)}
                      type="button"
                      className="btn btn-primary btn-sm"  id="liveToastBtn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div> 
            </div>
          )))
          }
         </div>
        </div>
      </div>
    </>
  );
}

export default Menu