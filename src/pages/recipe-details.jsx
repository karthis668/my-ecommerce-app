import { Link } from "react-router-dom";

function RecipeDetails() {
  return (
    <>
      <div className="row p-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default RecipeDetails;
