import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuData from "./menuData"; // Ensure this path is correct

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = menuData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 1)); // Only keep the first matching item
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", query);
    // Additional search logic can be added here
  };

  return (
    <div>
      {/* Search bar row */}
      <div className="d-flex align-items-center">
        <form onSubmit={handleSearch} className="d-flex align-items-center" role="search">
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: "150px" }}
          />
          <button className="btn btn-outline-success btn-sm ms-2" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* Search results appear below */}
      <div className="mt-2">
        {results.length > 0 ? (
          <ul className="list-group">
            {results.map((item, index) => (
              <li key={index} className="list-group-item">
                <Link to={item.link} className="text-decoration-none">
                  {item.name}{" "}
                  <span className="badge bg-secondary">{item.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          query && <p className="mt-2">No items found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
