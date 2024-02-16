import { useState } from "react";
// import { useSearch } from "../../hooks";
import { useLocation } from "wouter";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [, setLocation] = useLocation();
//   const { isLoading, data } = useSearch(searchQuery)
    // const { isLoading } = useSearch(searchQuery)
    // const doSearch = useSearch()
    // console.log('doSearch: ', doSearch)

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    setLocation(`/users-search-result?search=${searchQuery}`)
    setSearchQuery('');
  };
    return (
        <form onSubmit={handleSearchSubmit}>
            <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchInputChange} 
            />
            <button type="submit">Search</button>
      </form>
    )
}

export default SearchInput