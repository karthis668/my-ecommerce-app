import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import RecipeDetails from "./pages/recipe-details";

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
