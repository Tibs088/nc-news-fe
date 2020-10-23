//React
import React from 'react';
import { Link } from '@reach/router';
//Material-ui
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//avaliable pages to access via the menu
const options = [
  'topics',
  'articles'
]

const ITEM_HEIGHT = 40;

const NavBar = () => {
  //Material ui stuff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // Expand the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Build the menu */}
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}>
        {/* Map over the options to fill out the menu */}
        {options.map((option) => {
          return (
            <Link to={`/${option}`} key={option}>
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            </Link>)
        })}
      </Menu>
    </div>
  )
}

export default NavBar;