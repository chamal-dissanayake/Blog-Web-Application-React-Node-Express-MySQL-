import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/dog.gif";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=DogBreeds">
            <h6>
              Adoption and Rescue<b>|</b>
            </h6>
          </Link>
          <Link className="link" to="/?cat=TrainingTips">
            <h6>
              Training Tips<b>|</b>
            </h6>
          </Link>
          <Link className="link" to="/?cat=NutritionAndRecipes">
            <h6>
              Nutrition and Recipes<b>|</b>
            </h6>
          </Link>
          <Link className="link" to="/?cat=HealthAndWellness">
            <h6>Health and Wellness</h6>
          </Link>

          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              <b>Login</b>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
