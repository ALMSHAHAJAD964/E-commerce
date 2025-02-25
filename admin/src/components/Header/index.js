import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo.png'
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md"
import SearchBox from "../Search";
import { MdOutlineLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMyAccDrop = (event) => {
        console.log("Menu button clicked!", event.currentTarget); 
        setAnchorEl(event.currentTarget);
      };
      const handleCloseMyAccDrop = () => {
        console.log("Menu closed");
        setAnchorEl(null);
      };



    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/*Logo Wraooer*/}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3"><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end 
                        part3">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode /></Button>
                            {/* <Button className="rounded-circle mr-3"><MdDarkMode /></Button> */}
                            <Button className="rounded-circle mr-3" >
                                <IoCartOutline /></Button>

                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>
                            <Button className="rounded-circle mr-3"><FaRegBell /></Button>

                            

                           <div className="myAccWrapper">
                           <Button  className="myAcc d-flex align-items-center"
                           onClick={handleOpenMyAccDrop}>
                                <div className="userimg">
                                    <span className="rounded-circle">
                                        <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" alt="User" />
                                    </span>
                                </div>

                                <div className="userInfo">
                                    <h4>Shahajad alam</h4>
                                    <p className="mb-0">Shahajad878687Alam@mail.com</p>
                                </div>
                                </Button>

                                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMyAccDrop}
        onClick={handleCloseMyAccDrop}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAccDrop}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccDrop}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                           </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;