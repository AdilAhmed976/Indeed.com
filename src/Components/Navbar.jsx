import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:'white',borderBottom: 1,borderColor:"divider"}} >
          {/* <Box> */}
            <Box>
               <svg
                width="95"
                height="30"
                viewBox="0 0 75 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
                >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.613 3.458c-.265-.297-.62-.448-1.1-.448-.48 0-.846.159-1.101.487-.255.317-.387.793-.387 1.417v4.524c-.59-.636-1.203-1.092-1.825-1.399a4.568 4.568 0 0 0-1.356-.397 6.917 6.917 0 0 0-.937-.06c-1.559 0-2.822.536-3.791 1.608-.958 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.367 2.52.246.772.59 1.448 1.06 2.022a4.975 4.975 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.345 0 .672-.029.977-.088.205-.03.397-.08.592-.14a5.086 5.086 0 0 0 1.335-.674 7.8 7.8 0 0 0 1.253-1.15v.297c0 .565.143.992.418 1.3.286.297.643.455 1.07.455.438 0 .794-.149 1.07-.435.273-.298.417-.734.417-1.318V4.758c.004-.567-.128-1.004-.383-1.3zm-3.169 12.477c-.275.575-.643 1.002-1.09 1.28-.46.279-.96.416-1.51.416h-.01a2.79 2.79 0 0 1-1.509-.435c-.459-.298-.825-.734-1.089-1.309-.264-.585-.396-1.29-.396-2.123 0-.784.121-1.477.377-2.062.245-.596.601-1.052 1.05-1.368.46-.328.97-.477 1.548-.477h.03c.541 0 1.04.158 1.499.465.459.308.825.756 1.1 1.34.275.585.408 1.29.408 2.102 0 .872-.133 1.597-.408 2.171zm-9.896.13c-.194-.168-.459-.258-.785-.258-.296 0-.52.07-.683.199-.398.356-.713.644-.96.852-.242.199-.52.397-.813.584a3.27 3.27 0 0 1-.896.399 3.798 3.798 0 0 1-1.03.128c-.081 0-.163 0-.235-.01a2.829 2.829 0 0 1-1.303-.397c-.47-.267-.836-.662-1.122-1.179-.275-.536-.418-1.15-.427-1.845h6.145c.825 0 1.466-.12 1.915-.337.46-.239.683-.735.683-1.498 0-.833-.224-1.646-.662-2.45-.438-.795-1.09-1.449-1.976-1.953-.878-.506-1.927-.754-3.16-.754h-.091c-.907.01-1.743.16-2.486.437a5.54 5.54 0 0 0-1.969 1.269 5.677 5.677 0 0 0-1.2 1.994 7.49 7.49 0 0 0-.42 2.518c0 1.925.562 3.432 1.682 4.552 1.06 1.062 2.527 1.618 4.391 1.677.103.01.213.01.327.01.876 0 1.66-.11 2.342-.337.683-.228 1.244-.507 1.694-.843.446-.347.783-.704 1.007-1.07.224-.367.337-.695.337-.963 0-.31-.1-.557-.305-.725zm-7.336-5.605c.5-.526 1.141-.784 1.926-.784h.012c.814 0 1.477.258 1.976.773.5.517.795 1.3.867 2.35h-5.698c.101-1.03.408-1.814.917-2.339zm-6.045 5.346c-.305 0-.529.07-.692.198-.387.357-.713.645-.958.853-.245.198-.51.397-.806.584-.294.179-.591.318-.906.398a3.742 3.742 0 0 1-1.03.128c-.08 0-.162 0-.234-.01a2.841 2.841 0 0 1-1.304-.396 2.932 2.932 0 0 1-1.11-1.18c-.286-.535-.429-1.15-.44-1.844h6.155c.815 0 1.456-.12 1.915-.338.448-.238.674-.734.674-1.497 0-.834-.215-1.647-.653-2.45-.438-.795-1.1-1.45-1.976-1.954-.878-.505-1.937-.753-3.158-.753h-.103c-.906.01-1.731.16-2.486.437a5.383 5.383 0 0 0-1.957 1.268 5.54 5.54 0 0 0-1.212 1.994 7.451 7.451 0 0 0-.42 2.518c0 1.925.572 3.432 1.692 4.552 1.06 1.063 2.517 1.618 4.382 1.677.112.01.212.01.326.01.886 0 1.661-.109 2.343-.336.682-.229 1.244-.507 1.691-.843.46-.348.785-.704 1.01-1.07.223-.367.337-.695.337-.964 0-.307-.103-.555-.296-.723-.202-.17-.469-.26-.784-.26zm-6.562-5.346c.499-.526 1.142-.784 1.927-.784h.011c.814 0 1.477.258 1.976.773.509.517.795 1.3.877 2.35h-5.707c.112-1.03.419-1.814.916-2.339zM6.547 17.969v-7.301c.212.02.417.029.631.029a5.514 5.514 0 0 0 2.792-.744v8.014c0 .685-.163 1.19-.48 1.528-.315.336-.733.504-1.242.504-.5 0-.897-.168-1.223-.515-.315-.336-.478-.842-.478-1.515zm29.6-14.51c-.265-.298-.631-.449-1.09-.449-.48 0-.846.159-1.102.487-.264.317-.387.793-.387 1.417v4.524c-.59-.636-1.2-1.092-1.824-1.399a4.644 4.644 0 0 0-1.354-.397 6.901 6.901 0 0 0-.938-.06c-1.559 0-2.833.536-3.79 1.608-.959 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.356 2.52a6.03 6.03 0 0 0 1.072 2.022 4.96 4.96 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.336 0 .662-.029.977-.088.205-.03.398-.08.592-.14a5.086 5.086 0 0 0 1.335-.674c.417-.298.827-.685 1.252-1.15v.297c0 .565.144.992.419 1.3.275.297.643.455 1.07.455.417 0 .785-.149 1.06-.435.275-.298.406-.734.406-1.318V4.758c.001-.567-.12-1.004-.374-1.3zm-3.16 12.476c-.274.575-.642 1.002-1.1 1.28-.448.279-.959.416-1.497.416h-.01c-.55 0-1.05-.149-1.508-.435-.468-.298-.825-.734-1.09-1.309-.264-.585-.397-1.29-.397-2.123 0-.784.123-1.477.366-2.062.254-.596.601-1.052 1.06-1.368.448-.328.968-.477 1.539-.477h.04c.54 0 1.039.158 1.488.465.469.308.835.756 1.11 1.34.264.585.408 1.29.408 2.102 0 .872-.144 1.597-.408 2.171zM14.995 9.25v.378c.56-.715 1.161-1.23 1.814-1.568.662-.326 1.416-.496 2.272-.496.826 0 1.57.18 2.22.526a3.35 3.35 0 0 1 1.457 1.488c.215.376.348.784.408 1.221.061.426.091.981.091 1.656v5.685c0 .614-.153 1.08-.438 1.387-.284.317-.662.475-1.12.475-.47 0-.846-.158-1.142-.484-.296-.319-.439-.783-.439-1.378v-5.093c0-1.011-.143-1.784-.428-2.32-.285-.534-.867-.803-1.72-.803-.562 0-1.07.168-1.53.486a2.826 2.826 0 0 0-1.018 1.35c-.153.455-.224 1.298-.224 2.56v3.818c0 .624-.152 1.08-.447 1.399-.296.307-.672.465-1.142.465-.459 0-.827-.158-1.121-.484-.296-.319-.438-.783-.438-1.378V9.3c0-.584.133-1.02.398-1.3.254-.286.61-.436 1.07-.436.275 0 .52.06.743.189.224.128.406.317.54.574.132.258.194.567.194.923zM6.566.473c2.12-.744 4.535-.704 6.348.822.337.307.723.695.876 1.15.184.577-.641-.06-.754-.139-.592-.377-1.182-.694-1.844-.912-3.566-1.07-6.94.864-9.038 3.87C1.278 6.59.707 7.99.24 9.526c-.052.168-.092.387-.184.535-.093.17-.04-.455-.04-.476.07-.635.203-1.25.368-1.864.967-3.273 3.106-6 6.183-7.25zm4.106 5.881a2.517 2.517 0 0 1-5.032 0 2.517 2.517 0 1 1 5.032 0z"
                  fill="#003A9B"
                  ></path>
              </svg>
            </Box>
            <Box >
              <img height={50} src='https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png'/>
            </Box>
            
            <Box sx={{display:'flex',gap:'20px',marginLeft:'30px'}} >
              <NavLink style={{textDecoration:'none'}} to='/' >
                <Box sx={{color:'black'}}>
                  <Typography variant="body3" component="body3" >
                    Find job
                  </Typography> 
                </Box>
              </NavLink>
              
              <NavLink style={{textDecoration:'none'}} to='/companyreview' >
                <Box sx={{color:'black',border:1,height:"62px"}} >
                  <Typography variant="body3" component="body3" >
                    Company reviews
                  </Typography> 
                </Box>
              </NavLink>

              <NavLink style={{textDecoration:'none'}} to='/salaryguide' >
                <Box sx={{color:'black'}}>
                  <Typography variant="body3" component="body3" >
                    Salary guide
                  </Typography> 
                </Box>
              </NavLink>
            </Box>
          {/* </Box> */}

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" a color="info">
              <Badge >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="info"
            >
              <Badge >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="info"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          {/* <Box sx={{ flexGrow: -1 }} /> */}

          <Box sx={{marginLeft:'30px'}} >
           <Link to="/postjob">Employers / Post Job</Link>
           </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}


// import React from "react";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import AppBar from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import { Link } from "@mui/material";
// import "../Styles/Navbar.css";


// export const Navbar = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}  border={'1px solid black'}>
//       <AppBar position="static">
//         <Toolbar className='MuiToolbar-root' >
//           <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'20px'} >
//             <Box>
//               <svg
//                 width="95"
//                 height="30"
//                 viewBox="0 0 75 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 focusable="false"
//                 aria-hidden="true"
//                 >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M74.613 3.458c-.265-.297-.62-.448-1.1-.448-.48 0-.846.159-1.101.487-.255.317-.387.793-.387 1.417v4.524c-.59-.636-1.203-1.092-1.825-1.399a4.568 4.568 0 0 0-1.356-.397 6.917 6.917 0 0 0-.937-.06c-1.559 0-2.822.536-3.791 1.608-.958 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.367 2.52.246.772.59 1.448 1.06 2.022a4.975 4.975 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.345 0 .672-.029.977-.088.205-.03.397-.08.592-.14a5.086 5.086 0 0 0 1.335-.674 7.8 7.8 0 0 0 1.253-1.15v.297c0 .565.143.992.418 1.3.286.297.643.455 1.07.455.438 0 .794-.149 1.07-.435.273-.298.417-.734.417-1.318V4.758c.004-.567-.128-1.004-.383-1.3zm-3.169 12.477c-.275.575-.643 1.002-1.09 1.28-.46.279-.96.416-1.51.416h-.01a2.79 2.79 0 0 1-1.509-.435c-.459-.298-.825-.734-1.089-1.309-.264-.585-.396-1.29-.396-2.123 0-.784.121-1.477.377-2.062.245-.596.601-1.052 1.05-1.368.46-.328.97-.477 1.548-.477h.03c.541 0 1.04.158 1.499.465.459.308.825.756 1.1 1.34.275.585.408 1.29.408 2.102 0 .872-.133 1.597-.408 2.171zm-9.896.13c-.194-.168-.459-.258-.785-.258-.296 0-.52.07-.683.199-.398.356-.713.644-.96.852-.242.199-.52.397-.813.584a3.27 3.27 0 0 1-.896.399 3.798 3.798 0 0 1-1.03.128c-.081 0-.163 0-.235-.01a2.829 2.829 0 0 1-1.303-.397c-.47-.267-.836-.662-1.122-1.179-.275-.536-.418-1.15-.427-1.845h6.145c.825 0 1.466-.12 1.915-.337.46-.239.683-.735.683-1.498 0-.833-.224-1.646-.662-2.45-.438-.795-1.09-1.449-1.976-1.953-.878-.506-1.927-.754-3.16-.754h-.091c-.907.01-1.743.16-2.486.437a5.54 5.54 0 0 0-1.969 1.269 5.677 5.677 0 0 0-1.2 1.994 7.49 7.49 0 0 0-.42 2.518c0 1.925.562 3.432 1.682 4.552 1.06 1.062 2.527 1.618 4.391 1.677.103.01.213.01.327.01.876 0 1.66-.11 2.342-.337.683-.228 1.244-.507 1.694-.843.446-.347.783-.704 1.007-1.07.224-.367.337-.695.337-.963 0-.31-.1-.557-.305-.725zm-7.336-5.605c.5-.526 1.141-.784 1.926-.784h.012c.814 0 1.477.258 1.976.773.5.517.795 1.3.867 2.35h-5.698c.101-1.03.408-1.814.917-2.339zm-6.045 5.346c-.305 0-.529.07-.692.198-.387.357-.713.645-.958.853-.245.198-.51.397-.806.584-.294.179-.591.318-.906.398a3.742 3.742 0 0 1-1.03.128c-.08 0-.162 0-.234-.01a2.841 2.841 0 0 1-1.304-.396 2.932 2.932 0 0 1-1.11-1.18c-.286-.535-.429-1.15-.44-1.844h6.155c.815 0 1.456-.12 1.915-.338.448-.238.674-.734.674-1.497 0-.834-.215-1.647-.653-2.45-.438-.795-1.1-1.45-1.976-1.954-.878-.505-1.937-.753-3.158-.753h-.103c-.906.01-1.731.16-2.486.437a5.383 5.383 0 0 0-1.957 1.268 5.54 5.54 0 0 0-1.212 1.994 7.451 7.451 0 0 0-.42 2.518c0 1.925.572 3.432 1.692 4.552 1.06 1.063 2.517 1.618 4.382 1.677.112.01.212.01.326.01.886 0 1.661-.109 2.343-.336.682-.229 1.244-.507 1.691-.843.46-.348.785-.704 1.01-1.07.223-.367.337-.695.337-.964 0-.307-.103-.555-.296-.723-.202-.17-.469-.26-.784-.26zm-6.562-5.346c.499-.526 1.142-.784 1.927-.784h.011c.814 0 1.477.258 1.976.773.509.517.795 1.3.877 2.35h-5.707c.112-1.03.419-1.814.916-2.339zM6.547 17.969v-7.301c.212.02.417.029.631.029a5.514 5.514 0 0 0 2.792-.744v8.014c0 .685-.163 1.19-.48 1.528-.315.336-.733.504-1.242.504-.5 0-.897-.168-1.223-.515-.315-.336-.478-.842-.478-1.515zm29.6-14.51c-.265-.298-.631-.449-1.09-.449-.48 0-.846.159-1.102.487-.264.317-.387.793-.387 1.417v4.524c-.59-.636-1.2-1.092-1.824-1.399a4.644 4.644 0 0 0-1.354-.397 6.901 6.901 0 0 0-.938-.06c-1.559 0-2.833.536-3.79 1.608-.959 1.072-1.438 2.56-1.438 4.472 0 .904.123 1.747.356 2.52a6.03 6.03 0 0 0 1.072 2.022 4.96 4.96 0 0 0 1.67 1.33 4.766 4.766 0 0 0 2.089.465c.336 0 .662-.029.977-.088.205-.03.398-.08.592-.14a5.086 5.086 0 0 0 1.335-.674c.417-.298.827-.685 1.252-1.15v.297c0 .565.144.992.419 1.3.275.297.643.455 1.07.455.417 0 .785-.149 1.06-.435.275-.298.406-.734.406-1.318V4.758c.001-.567-.12-1.004-.374-1.3zm-3.16 12.476c-.274.575-.642 1.002-1.1 1.28-.448.279-.959.416-1.497.416h-.01c-.55 0-1.05-.149-1.508-.435-.468-.298-.825-.734-1.09-1.309-.264-.585-.397-1.29-.397-2.123 0-.784.123-1.477.366-2.062.254-.596.601-1.052 1.06-1.368.448-.328.968-.477 1.539-.477h.04c.54 0 1.039.158 1.488.465.469.308.835.756 1.11 1.34.264.585.408 1.29.408 2.102 0 .872-.144 1.597-.408 2.171zM14.995 9.25v.378c.56-.715 1.161-1.23 1.814-1.568.662-.326 1.416-.496 2.272-.496.826 0 1.57.18 2.22.526a3.35 3.35 0 0 1 1.457 1.488c.215.376.348.784.408 1.221.061.426.091.981.091 1.656v5.685c0 .614-.153 1.08-.438 1.387-.284.317-.662.475-1.12.475-.47 0-.846-.158-1.142-.484-.296-.319-.439-.783-.439-1.378v-5.093c0-1.011-.143-1.784-.428-2.32-.285-.534-.867-.803-1.72-.803-.562 0-1.07.168-1.53.486a2.826 2.826 0 0 0-1.018 1.35c-.153.455-.224 1.298-.224 2.56v3.818c0 .624-.152 1.08-.447 1.399-.296.307-.672.465-1.142.465-.459 0-.827-.158-1.121-.484-.296-.319-.438-.783-.438-1.378V9.3c0-.584.133-1.02.398-1.3.254-.286.61-.436 1.07-.436.275 0 .52.06.743.189.224.128.406.317.54.574.132.258.194.567.194.923zM6.566.473c2.12-.744 4.535-.704 6.348.822.337.307.723.695.876 1.15.184.577-.641-.06-.754-.139-.592-.377-1.182-.694-1.844-.912-3.566-1.07-6.94.864-9.038 3.87C1.278 6.59.707 7.99.24 9.526c-.052.168-.092.387-.184.535-.093.17-.04-.455-.04-.476.07-.635.203-1.25.368-1.864.967-3.273 3.106-6 6.183-7.25zm4.106 5.881a2.517 2.517 0 0 1-5.032 0 2.517 2.517 0 1 1 5.032 0z"
//                   fill="#003A9B"
//                   ></path>
//               </svg>
//             </Box>
//             <Box >
//               <img height={50} src='https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png'/>
//             </Box>
//           </Box>

//           <Box sx={{ flexGrow: 1 }}   />
//           <Box sx={{ display: { xs: "none", md: "flex" } }} className="hover_effect" marginRight='50px'>
//             <Box >
//               <IconButton
//                 size="large"
//                 aria-label="show 4 new mails"
//                 color="inherit"
//                 >
//                 <Badge  >
//                   <MailIcon />
//                 </Badge>
//               </IconButton>
//             </Box>

//             <Box  >
//               <IconButton
//                   size="large"
//                   aria-label="show 17 new notifications"
//                   color="inherit"
//                 >
//                 <Badge >
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//             </Box>

//             <Box  >
//               <IconButton
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 // aria-controls={menuId}
//                 aria-haspopup="true"
//                 // onClick={handleProfileMenuOpen}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//             </Box>

//           </Box>
//           <Box  sx={{ display: { xs: "flex", md: "none" } }}  >
//             <IconButton          
//               size="large"
//               // aria-label="show more"
//               // aria-controls={mobileMenuId}
//               // aria-haspopup="true"
//               // onClick={handleMobileMenuOpen}
//               // color="inherit"
              
//             >
//               <MoreIcon  />
//             </IconButton>
//           </Box>
//           <Divider orientation="vertical" flexItem  >
//           </Divider>
//           <Box >
//             <Link href="#">Employers / Post Job</Link>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {/* {renderMobileMenu} */}
//       {/* {renderMenu} */}
//     </Box>
//   );
// };
