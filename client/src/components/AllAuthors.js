import React, { useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const AllAuthors = (props) => {
  const { removeFromDom, authors, setAuthors } = props;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteAuthor = (authorId) => {
    axios
      .delete(`http://localhost:8000/api/author/${authorId}`)
      .then((res) => {
        removeFromDom(authorId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavLink to="/new" style={{ color: "blue" }}>
        Add an author
      </NavLink>
      <p style={{ color: "purple" }}>We have quotes by: </p>
      <table style={{ border: "0.1rem solid black" }}>
        <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
        {authors.map((author) => (
          <tr key={author._id}>
            <th style={{ color: "purple" }}>{author.author}</th>
            <th>
              <button
                onClick={() => {
                  navigate(`/edit/${author._id}`);
                }}
                style={{
                  width: "4rem",
                  height: "4rem",
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => deleteAuthor(author._id)}
                style={{
                  width: "4rem",
                  height: "4rem",
                }}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllAuthors;
