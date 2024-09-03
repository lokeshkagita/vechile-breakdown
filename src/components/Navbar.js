/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact</a>
        <button className="primary-button1"onClick={()=> navigate("/cart")}>
          <BsCart2 className="navbar-cart-icon" />
        </button>
        <button className="primary-button" onClick={()=> navigate("/bookings")}>Bookings Now</button>
             </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() =>  setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
          <ListItem>
        <a href = "#home">
          <ListItemButton>
          <ListItemIcon><HomeIcon/>
          <ListItemText> Home
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </a>
          </ListItem>

          <ListItem>
          <a href = "#about">
          <ListItemButton>
          <ListItemIcon><InfoIcon/>
          <ListItemText> About
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </a>
          </ListItem>

          <ListItem>
          <a href = "#testimonials">
          <ListItemButton>
          <ListItemIcon><CommentRoundedIcon/>
          <ListItemText> Testimonial
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </a>
          </ListItem>

          <ListItem>
          <a href = "#contact">
          <ListItemButton>
          <ListItemIcon><PhoneRoundedIcon/>
          <ListItemText> Contact
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </a>
          </ListItem>
          </List>


          <button className="primary-button2" onClick={()=> navigate("/cart")}>
          <List>
          <ListItem>
          <ListItemButton>
          <ListItemIcon><ShoppingCartRoundedIcon/>
          <ListItemText> Cart
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </ListItem>
          </List>
          </button>


          <button className="primary-button2" onClick={()=> navigate("/bookings")}>
          <List>
          <ListItem>
          <ListItemButton>
          <ListItemIcon>
          <ListItemText> Bookings Now
          </ListItemText>
          </ListItemIcon>
          </ListItemButton>
          </ListItem>
          </List>
          </button>
          
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
