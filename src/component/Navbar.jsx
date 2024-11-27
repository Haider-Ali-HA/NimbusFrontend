import React from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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
  return (
    <div className="flex items-center justify-between px-36 h-28 w-full">
      {/* logo */}
      <div className="flex gap-2">
        <img className="w-20" src={logo} alt="nimbus logo" />
        <h1 className="font-bold text-3xl w-32">Nimbus 360</h1>
      </div>

      {/* navlinks  */}
      <div className=" flex gap-12 ">
        <ul className="flex gap-10 items-center font-semibold">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Contact</li>
          <li className="">Pricing</li>
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

        {/* <button className="bg-primary shadow-sm hover:bg-opacity-80  text-white px-5 py-2 rounded">
          Create Account
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
