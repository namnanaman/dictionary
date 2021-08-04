import { MenuItem } from '@material-ui/core';
import { createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord,LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: { main:LightMode?"#000": '#fff' },
            type:LightMode? "light" :'dark',
        },
    });

    const handleChange=(Language)=>{
        setCategory(Language)
        setWord("")
    }


    return (
        <div className="header">
            <span className="title">{word?word:"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        id="standard-basic"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        label="Search a Word" />
                    <TextField
                    
                        className='select'

                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}


                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }


                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
