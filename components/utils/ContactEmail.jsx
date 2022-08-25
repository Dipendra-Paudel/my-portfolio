import { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Tooltip from "@mui/material/Tooltip";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ContactEmail = ({ email }) => {
  const timeout = useRef();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleCopyEmailAddress = () => {
    navigator.clipboard.writeText(email);
    setOpen(true);

    timeout.current = setTimeout(() => {
      clearTimeout(timeout.current);
      setOpen(false);
    }, 3000);
  };
  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center">
        <div>
          <ArrowRightAltIcon />
        </div>
        <a href={`mailto:${email}`} className="text-primary2">
          {email}
        </a>
      </div>

      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="left"
            title="Copied"
          >
            <div
              className="text-gray-400 cursor-pointer hover:text-primary2"
              onClick={handleCopyEmailAddress}
            >
              <ContentCopyIcon />
            </div>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default ContactEmail;
