import { SearchOutlined } from '@mui/icons-material';
import React from 'react';

const SearchBar = () => {
    return (
        <div className='nav__searchBar'>
            <input type="text" />
            <SearchOutlined/>
        </div>
    );
}

export default SearchBar;
