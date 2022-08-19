import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { ContactButton } from "../utils/Button";

const SettingsDrawer = ({ open, handleClose, options }) => {
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <div className="w-80 h-full relative" style={{ minHeight: "350px" }}>
          <div className="flex justify-between items-center border-b p-4">
            <Link href="/" passHref={true}>
              <a onClick={handleClose}>
                <div className="name-as-logo text-3xl md:text-4xl lg:text-5xl cursor-pointer">
                  Dipendra
                </div>
              </a>
            </Link>
            <CloseIcon
              className="cursor-pointer text-red-500"
              onClick={handleClose}
              style={{ fontSize: "30px" }}
            />
          </div>

          <div className="flex flex-col">
            {options.map((option, index) => {
              const { title, url } = option;
              return (
                <Link key={index} href={url} passHref={true}>
                  <a
                    className="hover:text-primary p-2 pl-4 border-b"
                    onClick={handleClose}
                  >
                    {title}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="absolute bottom-4 w-full px-4">
            <ContactButton fullWidth={true} handleClick={handleClose} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SettingsDrawer;
