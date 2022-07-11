import React from "react";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";

const SettingsDrawer = ({ open, handleClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div className="w-screen sm:w-72">
        <div className="flex justify-between items-center border-b p-4">
          <div className="text-2xl">Settings</div>
          <CloseIcon
            className="cursor-pointer text-red-500 text-3xl"
            onClick={handleClose}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default SettingsDrawer;
