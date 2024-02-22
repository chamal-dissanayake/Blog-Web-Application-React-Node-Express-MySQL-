import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.des || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            des: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            des: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "DogBreeds"}
              name="cat"
              value="DogBreeds"
              id="DogBreeds"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="DogBreeds">Adoption and Rescue</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "TrainingTips"}
              name="cat"
              value="TrainingTips"
              id="TrainingTips"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="TrainingTips">Training Tips</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "NutritionandRecipes"}
              name="cat"
              value="NutritionandRecipes"
              id="NutritionandRecipes"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="NutritionandRecipes">Nutrition and Recipes</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "HealthandWellness"}
              name="cat"
              value="HealthandWellness"
              id="HealthandWellness"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="HealthandWellness">Health and Wellness</label>
          </div>
          {/* <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div> */}
          {/* <div className="cat">
            <input
              type="radio"
              checked={cat === "Contact Us"}
              name="cat"
              value="Contact Us"
              id="Contact Us"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Contact Us">Contact Us</label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Write;
