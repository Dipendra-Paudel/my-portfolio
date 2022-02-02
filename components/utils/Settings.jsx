import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDrawer from "./SettingsDrawer";

const Settings = () => {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => setShowContent(!showContent);

  const handleDrawerClose = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowContent(false);
  };

  return (
    <div
      className={`fixed top-full left-full -ml-20 -mt-20 cursor-pointer ${
        showContent ? "lg:-ml-24" : ""
      }`}
    >
      <SettingsDrawer open={showContent} handleClose={handleDrawerClose} />

      <SettingsIcon
        className="text-secondary dark:text-darkSecondary cursor-pointer"
        style={{ fontSize: "50px" }}
        onClick={handleToggle}
      />
    </div>
  );
};

export default Settings;
