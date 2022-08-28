import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../Redux/AuthReducer/action';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // var name= JSON.parse(localStorage.getItem("dataUser"))
  // var image= JSON.parse(localStorage.getItem("UserImage"))
  // console.log(name)
  // // console.log(image)

  var isAuth = useSelector((state) => state.user.isAuth);
  console.log("ACCOUNT",isAuth)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
    navigate('/login')
  };
  const handleLogout = () => {
    // setAnchorEl(null);
    if (currentUser) {
      dispatch(logoutInitiate());
    }
    localStorage.setItem("authKey",false)
    navigate('/')
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {isAuth? <MenuItem onClick={handleLogout}>Logout</MenuItem> : <MenuItem onClick={handleClose}>Login</MenuItem> }        
      </Menu>
    </div>
  );
}
