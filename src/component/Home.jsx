import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoPlayCircleOutline } from "react-icons/io5";
import laptopImage from "../assets/laptop.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Home = () => {
  const [activeButton, setActiveButton] = useState("newFeature");

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
    <div
      id="Home"
      className="bg-re-400 font-inter h-full w-full flex flex-col gap-10   items-center "
    >
      {/* <-----hero section start----->  */}
      <section className="w-full flex flex-col h-full mt-56 justify-center items-center gap-10">
        <div className="bg-[#F9F5FF] text-xs md:text-base flex items-center text-primary justify-center md:gap-1 gap-3 h-7 md:h-9 px-1 rounded-full">
          <p
            onClick={() => setActiveButton("newFeature")}
            className={`${
              activeButton === "newFeature" ? "bg-white" : ""
            } flex items-center justify-center rounded-full h-5 md:h-7 px-1 md:px-2 cursor-pointer`}
          >
            New Feature
          </p>
          <p
            onClick={() => setActiveButton("teamDashboard")}
            className={`${
              activeButton === "teamDashboard"
                ? "bg-white rounded-full px-2"
                : ""
            } flex items-center justify-center rounded-full h-5 md:h-7 px-1 md:px-2 cursor-pointer`}
          >
            Check out the team dashboard{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl w-5/6 md:w-[45rem] text-center font-semibold">
          Get Cloud Point of Sale for your Brand
        </h1>

        <p className="w-5/6 md:w-[39rem] text-secondary text-center">
          Powerfull, self-serve product and growth analytics to help you
          convert, engage, and retain more users. Trust by over 4,000 startups.
        </p>

        <div className="flex gap-5 text-sm md:text-base">
          <Link to="https://www.youtube.com/watch?v=FE8NvDXbStk">
            <button className="bg-white border border-gray-200 flex hover:bg-gray-100 items-center gap-1 md:h-11 text-gray-700 rounded py-2 px-3">
              {" "}
              <IoPlayCircleOutline />
              Demo
            </button>
          </Link>
          <div>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="!bg-primary shadow-sm !text-white !px-5 !py-2 !rounded"
              sx={{
                "&:hover": {
                  opacity: 0.8, // Reduce opacity on hover
                },
              }}
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
      </section>

      {/* <-----hero section end----->  */}

      {/* <-----laptop image ----->  */}
      <div className="">
        <img className="w-4/5 mx-auto" src={laptopImage} alt="laptop image" />
      </div>
    </div>
  );
};

export default Home;
