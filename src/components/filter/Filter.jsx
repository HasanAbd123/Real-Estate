import React from "react";
import "./filter.scss";
function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Syria</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="p">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">any</option>
              <option value={"buy"}>Buy</option>
              <option value={"rent"}>Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
            />
          </div>
        </div>
        <div className="c">
          <div className="item">
            <label htmlFor="maxprice" id="maxprice">
              Max Price
            </label>
            <input type="number" id="city" name="city" placeholder="any" />
          </div>
          <div className="item">
            <label htmlFor="bedroom" id="bedroom">
              Bedrooms
            </label>
            <input type="text" id="city" name="city" placeholder="any" />
          </div>
          <button>
            <img src="./icons.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
