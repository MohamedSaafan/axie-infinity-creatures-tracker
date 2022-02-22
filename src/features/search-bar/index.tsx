import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeKeword } from "./search-barSlice";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeKeword(e.target.value));
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={state.searchBar.keyword}
          onChange={handleInputChange}
          placeholder="Search On Pegs"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            Enter any Keyword
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
