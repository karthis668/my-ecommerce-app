import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/home";
import RecipeDetails from "./pages/recipe-details";
import Menu from "./pages/menu";
import CartItems from "./pages/cartItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Menu />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
          <Route path="/cart" element={<CartItems />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
