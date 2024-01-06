import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { menuItem } from "../../utils/items";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        style={{
          color: "#12273D",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "8px",
          fontWeight: 700,
        }}
        id="nav-menu"
        aria-controls={open ? "nav-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon className="text-icon" />}
        className="sm:w-40 w-28 h-10"
      >
        Menu
      </Button>

      <Menu
        id="nav-menu"
        className="mt-1"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItem.map((item) => (
          <MenuItem
            key={item.id}
            className="sm:w-40  w-28  md:pb-5 pb-10 text-slate-600 hover:text-icon "
            onClick={handleClose}
          >
            <span style={{ fontWeight: 500 }} className=" sm:text-md text-sm">
              {item.title}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default NavMenu;
