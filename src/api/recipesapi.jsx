import Axios from "axios";

// function RecipesList(){
    
    
    
// }

const RecipesList = ()=>{
    {
        Axios.get('https://dummyjson.com/recipes').then((res)=>{
            console.log(res)
        }).catch(err=> console.log(err))
    }
}
export default RecipesList