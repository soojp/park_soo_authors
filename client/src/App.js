import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  const [authors, setAuthors] = useState([]);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Favorite Authors</h1>
        <BrowserRouter>
          <Routes>
            <Route
              default
              path="/"
              element={
                <AllAuthors
                  authors={authors}
                  setAuthors={setAuthors}
                  removeFromDom={removeFromDom}
                />
              }
            />
            <Route
              path="/new"
              element={<NewAuthor authors={authors} setAuthors={setAuthors} />}
            />
            <Route path="/edit/:id" element={<EditAuthor />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
