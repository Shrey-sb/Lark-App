import { createTheme, MenuItem, TextField,ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./header.scss";
import categories from '../../Data/category'
const Header = ({category, setCategory,setWord, word}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main : '#fff'
            },
          type: 'dark',
        },
      });
      const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        
      };
    
    return (
        <div className="header">
           <span className="title11">Dictionary</span>
           <div className="inputs">
           <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            value={word}
            placeholder="Search a Word"
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            value={category}
            placeholder="Language"
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
          
           </div>
        </div>
    );
}

export default Header;
