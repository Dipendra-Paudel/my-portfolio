import Link from "next/link";
import { useTheme } from "../../pages/_app";
import Button from "../utils/Button";

const navigationOptions = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Skills",
    url: "/skills",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Testimonials",
    url: "/testimonials",
  },
];

const Navigation = () => {
  const darkMode = useTheme();

  return (
    <div className="border-b py-6 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-28 items-center">
            <div className="name-as-logo text-5xl">Dipendra</div>

            <div className="space-x-4">
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

          <div>
            <Button label="Contact" url="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
