import React from 'react';
import SearchContainer from './Search-style';

const Search = ({text, handleChange}) => {
    return(
        <SearchContainer
        placeholder={text}
        onChange={() => handleChange()}
        />
    )
}

export default Search;