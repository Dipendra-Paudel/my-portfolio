import React from "react";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, updateTheme } from "../../contexts/ThemeContext";

const SettingsDrawer = ({ open, handleClose }) => {
  const darkMode = useTheme();

  const updateDarkMode = updateTheme();

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

        <div className="space-y-4 p-4">
          <div>
            <div className="text-gray-800 text-lg">1. Dark Mode:</div>
            <div className="flex items-center space-x-2 pl-5 text-gray-700">
              <div>Off</div>
              <div>
                <Switch
                  checked={darkMode}
                  onChange={updateDarkMode}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div>On</div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SettingsDrawer;
