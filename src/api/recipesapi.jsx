import Axios from "axios";
export const getRecipesList = ()=>{
    return (
        Axios.get('https://dummyjson.com/recipes')
    )
}

 
