import Axios from "axios";

const RecipesdetailsApi = (id)=>{
    return (
        Axios.get(`https://dummyjson.com/recipes/${id}`)
    )
}

export default RecipesdetailsApi