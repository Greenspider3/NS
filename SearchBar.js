import React from 'react';

function SearchBar() {
  return (
    <div>
      <div className="searchBox">
        <input type="text" placeholder="Ask your queries....." />
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
}

export default SearchBar;