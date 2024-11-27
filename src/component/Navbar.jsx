import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navbarRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    console.log(value);
    setAnchorEl(null);
    if (value === "pos") {
      window.location.href = "https://pos.nimbus360.org/";
    } else if (value === "warehouse") {
      window.location.href = "https://warehouse.nimbus360.org/";
    }
  };
  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <>
      <div className="flex items-center justify-between px-12 md:px-36 h-28 w-full font-inter">
        {/* logo */}
        <div className="flex gap-2">
          <img
            className="w-10 h-10 lg:w-20 lg:h-20"
            src={logo}
            alt="nimbus logo"
          />
          <h1 className="font-bold lg:text-3xl w-16 lg:w-32">Nimbus 360</h1>
        </div>

        {/* navlinks */}
        <div className="hidden lg:flex gap-12">
          <ul className="flex gap-10 items-center font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
          </ul>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="!bg-primary shadow-sm !hover:bg-opacity-80  !text-white !px-5 !py-2 !rounded"
            >
              Login
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleClose("pos")}>Pos</MenuItem>
              <MenuItem onClick={() => handleClose("warehouse")}>
                Warehouse
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* hamburger icon for mobile */}
        <div onClick={handleMenuToggle} className="lg:hidden">
          {menu ? <></> : <RiMenu3Fill className="text-2xl" />}
        </div>
      </div>

      {/* mobile menu */}
      <div
        ref={navbarRef}
        className={`fixed top-0 right-0 w-2/5 sm:w-1/4 py-10 h-screen bg-gray-300 items-center flex flex-col gap-5 lg:hidden transition-all duration-500 ease-in-out ${
          menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div onClick={handleMenuToggle} className="flex">
          <RxCross2 className="text-2xl text-black" />
        </div>
        <ul className="flex flex-col gap-5 items-center font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
        </ul>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="!bg-primary shadow-sm !hover:bg-opacity-80  !text-white !px-5 !py-2 !rounded"
          >
            Login
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose("pos")}>Pos</MenuItem>
            <MenuItem onClick={() => handleClose("warehouse")}>
              Warehouse
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
