import React from 'react'
import './App.css'
import MenuIcon from '@material-ui/icons/Menu';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const Header = () => {
    return (
        <>
            <div className='header-div'>
                
                    <MenuIcon id='hamIcon' />
                    <EmailRoundedIcon id='logoIcon'/>
                    <h3>Keep Me</h3>
                
            </div>
        </>
    )
}

export default Header;