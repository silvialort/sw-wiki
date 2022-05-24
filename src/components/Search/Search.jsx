import React from 'react';
import SearchContainer from './Search-style';

const Search = ({text, handleChange, reference}) => {
    return(
        <SearchContainer
        placeholder={text}
        ref={reference}
        onChange={() => handleChange()}
        />
    )
}

export default Search;