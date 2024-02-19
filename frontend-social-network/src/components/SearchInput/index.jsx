import { useState } from "react";
import { useLocation } from "wouter";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [, setLocation] = useLocation();

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