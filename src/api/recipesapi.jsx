import Axios from "axios";
const RecipesList = ()=>{
    return (
        Axios.get('https://dummyjson.com/recipes')
    )
}

export default RecipesList

// const Recipesdetails = (id)=>{
//     return (
//         Axios.get('https://dummyjson.com/recipes/'+ id)
//     )
// }