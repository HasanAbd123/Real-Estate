import React, { useState } from "react";
import "./searchbar.scss";
import { Link } from "react-router-dom";
import ser from "../../assets/images/hom/icons.png";

const type = ["buy", "rent"];
function SearchBar() {
  const [query, setqQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setqQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchbar">
      <div className="type">
        {type.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : " "}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="minprice" min={0} placeholder="Min price" />
        <input type="number" name="maxprice" placeholder="Max Price" />
        <button>
          <Link to={"/list"}>
            {" "}
            <img src={ser} alt="" />{" "}
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
