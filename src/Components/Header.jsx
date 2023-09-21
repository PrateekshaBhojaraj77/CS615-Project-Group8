import * as React from 'react';
import { orange } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import "../CSS/header.css"

function Header() {


    return (
        <>
            <header className='homeheader'>
                <Link to="/">
                    <HomeIcon alt={"Home"} sx={{ color: orange[500] }} fontSize='large' />
                </Link>
            </header>

        </>
    )
}

export default Header;