import React, { useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import axios from 'axios';

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/api/posts/search?query=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-page">
      <h1>Search Posts</h1>
      <Search onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default Explore;