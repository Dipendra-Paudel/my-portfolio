import Link from "next/link";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ContactButton } from "../utils/Button";
import Sidebar from "./Sidebar";

const navigationOptions = [
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Skills",
    url: "#skills",
  },
  {
    title: "Projects",
    url: "#projects",
  },
];

const Navigation = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => setToggled(!toggled);

  const handleDrawerClose = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggled(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        handleDrawerClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-b p-4 md:py-6 md:px-10 lg:px-20 lg:py-10 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-between lg:justify-start md:space-x-28 items-center">
            <Link href="/" passHref={true}>
              <a>
                <div className="name-as-logo text-3xl md:text-4xl lg:text-5xl cursor-pointer">
                  Dipendra
                </div>
              </a>
            </Link>

            {/* Hamburger menu */}
            <div className="md:hidden cursor-pointer" onClick={handleToggle}>
              <MenuIcon style={{ fontSize: "30px" }} />
            </div>

            <div className="space-x-4 hidden md:block xl:text-lg text-gray-700">
              {navigationOptions.map((navigation, index) => {
                const { title, url } = navigation;
                return (
                  <Link key={index} href={url} passHref={true}>
                    <a className="hover:text-primary">{title}</a>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <ContactButton label="Contact" />
          </div>
        </div>
      </div>

      <div>
        <Sidebar
          open={toggled}
          handleClose={handleDrawerClose}
          options={navigationOptions}
        />
      </div>
    </div>
  );
};

export default Navigation;
