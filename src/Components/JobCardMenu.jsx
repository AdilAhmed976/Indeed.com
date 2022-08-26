import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Block, FavoriteBorder, Flag, HeartBrokenTwoTone } from '@mui/icons-material';

const options = [
  'Save Job',
  'Not intrested',
  'Is there a problem with this',
];

const ITEM_HEIGHT = 58;

export default function JobCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '25ch',
          },
        }}
      >
        <MenuItem>
            <FavoriteBorder />
            Save Job 
        </MenuItem>

        <MenuItem>
            <Block />
            Not intrested  
        </MenuItem>

        <MenuItem>
            <Flag />
            Is there a problem with this  
        </MenuItem>        
      </Menu>
    </div>
  );
}
