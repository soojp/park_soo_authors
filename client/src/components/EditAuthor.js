import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthor = (props) => {
  const [author, setAuthor] = useState({});
  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/${id}`, { author })
      .then((res) => {
        console.log(res.data);
        // setAuthor(res.data);
        setErrors({});
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error.errors);
        console.log(`errors: ${errors}`);
      });
  };
  return (
    <div className="box">
      <NavLink to="/" style={{ color: "blue" }}>
        Home
      </NavLink>
      <p style={{ color: "purple" }}>Edit this author</p>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "0.1rem solid black",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label>Name: </label>
        <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder={author}
        />
        {errors.author && (
          <div style={{ color: "red" }}>{errors.author.message} </div>
        )}
        <br />
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthor;
