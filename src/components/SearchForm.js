import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Last Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="last"
          type="text"
          className="form-control"
          placeholder="Search for user name"
          id="name"
        />
        <datalist id="name">
          {props.name.map(name => (
            <option value={name} key={name} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
