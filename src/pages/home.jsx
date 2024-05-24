import Axios from "axios";
import { useEffect, useState } from "react";
function Home() {
    const [recipesList, setRecpesList] = useState([]);
    
    useEffect(() => {
      Axios.get('https://dummyjson.com/recipes').then((res)=>{
        // console.log(res.data);
        setRecpesList(res.data.recipes);
    }).catch(err=> console.log(err));
    console.log(recipesList);
    }, [])
    

  return (
    <>
      <div className="row mt-5 p-3">
      {recipesList.map(recp => (
        // <li key={post.id}>{post.title}</li>
        <div className="col-6 col-md-4" key={recp.id}>
        <div className="card">
          <img src={recp.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{recp.name}</h5>
            <p className="card-text">
              {recp.instructions}
            </p>
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Home

