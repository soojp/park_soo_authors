import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const NewAuthor = (props) => {
  const { authors, setAuthors } = props;
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ author });
    axios
      .post("http://localhost:8000/api/author", { author })
      .then((res) => {
        console.log("posted");
        console.log(res);
        setAuthors([...authors, res.data]);
        setAuthor("");
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
      <p style={{ color: "purple" }}>Add a new author:</p>
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
        />
        {errors.author && (
          <div style={{ color: "red" }}>{errors.author.message} </div>
        )}
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
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

export default NewAuthor;
