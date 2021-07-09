import React from 'react';
import Logo from '../../media/logo.png';
import '../../styles/Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
const index = ({userPhoto}) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={Logo} alt="" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search in Drive" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppIcon />
                <img src={userPhoto} alt="User Photo" />
            </div>

        </div>
    );
}

export default index;
