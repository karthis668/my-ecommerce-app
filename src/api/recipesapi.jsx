import Axios from "axios";
const baseUrl = "https://dummyjson.com";
export const getRecipesList = ()=>{
    return (
        Axios.get(baseUrl + '/recipes')
    );
}

 
export const getRecepieDetails = (id)=>{
    return (
        Axios.get(baseUrl + `/recipes/${id}`)
    );
}

export const getRecipesByTag = ()=>{
    return(
        Axios.get(baseUrl + '/recipes/tags')
    );
}

export const getRecipesByTagName = (tag)=>{
    return(
        Axios.get(baseUrl + '/recipes/tag/'+ tag)
    );
}