import React from "react";
import { LinkedinIcon, TwitterIcon, TelegramIcon } from "react-share";

const socialMediaIcons = [
  {
    url: "https://www.linkedin.com/in/dipendra-paudel-750267249/",
    icon: <LinkedinIcon size={32} round={true} />,
    label: "Linkedin",
  },
  {
    url: "https://twitter.com/dip_endrapaudel",
    icon: <TwitterIcon size={32} round={true} />,
    label: "Twitter",
  },
  {
    url: "https://t.me/dipen_dra",
    icon: <TelegramIcon size={32} round={true} />,
    label: "Twitter",
  },
];

const SocialMediaIcons = ({ classes = "flex space-x-2", footer }) => {
  return (
    <div className={`${classes} ${footer ? "" : "text-gray-600"}`}>
      {socialMediaIcons.map((socialMedia, index) => {
        const { url, icon, label } = socialMedia;
        return (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={footer ? "text-gray-100" : "hover:text-primaryDark"}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
