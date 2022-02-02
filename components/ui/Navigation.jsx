import Link from "next/link";
import { useState } from "react";
import Button from "../utils/Button";

const navigationOptions = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Skills",
    url: "#skills",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Testimonials",
    url: "#testimonials",
  },
];

const Navigation = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="border-b p-4 md:py-6 md:px-10 lg:px-20 lg:py-10 xl:px-24 dark:bg-darkColor dark:text-white dark:border-b-gray-700 mode-transition">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-between lg:justify-start md:space-x-28 items-center">
            <Link href="/" passHref={true}>
              <div className="name-as-logo text-3xl md:text-4xl lg:text-5xl cursor-pointer">
                Dipendra
              </div>
            </Link>

            {/* Hamburger menu */}
            <div
              className="md:hidden space-y-1 cursor-pointer  hamburger-menu relative z-50"
              onClick={() => setToggled(!toggled)}
            >
              <div className={toggled ? "rotate-45" : ""}></div>
              <div className={toggled ? "rotate-315" : ""}></div>
              <div className={toggled ? "fade" : ""}></div>
            </div>

            <div className="space-x-4 hidden md:block">
              {navigationOptions.map((navigation, index) => {
                const { title, url } = navigation;
                return (
                  <Link key={index} href={url}>
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <Button label="Contact" url="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
