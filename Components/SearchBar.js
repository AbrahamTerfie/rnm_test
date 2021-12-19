import React from "react";
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <div className="searchContainer">
      <BsSearch className="m-4" size="2em" />
      <input
        className="searchBar"
        type="text"
        name="serchBar"
        id="searchBar"
        placeholder=" Search charcters"
      />
    </div>
  );
}
