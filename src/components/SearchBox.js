import React from "react";

const [searchTerm, setSearchTerm] = useState("");

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        placeholder="Search by Title..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
