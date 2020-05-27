import React, { useContext } from "react"
import { AppContext } from '../context/AppContext';

const Search = () => {
  const {searchTasks} = useContext(AppContext)

  return(
    <div className="form-group">
    <input
      id="term"
      type="search"
      className="form-control" 
      placeholder="Search"
      onChange={(e) => searchTasks(e.target.value)}
      autoComplete="off"
    />
  </div>
  )
}

export default Search