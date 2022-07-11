import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMediaIcons = [
  {
    url: "https://www.linkedin.com/in/dipendra-paudel-70342917b",
    icon: <LinkedInIcon className="social-icon" />,
    label: "Linkedin",
  },
  {
    url: "https://twitter.com/dip_endrapaudel",
    icon: <TwitterIcon className="social-icon" />,
    label: "Twitter",
  },
  {
    url: "https://github.com/Dipendra-Paudel",
    icon: <GitHubIcon className="social-icon" />,
    label: "Github",
  },
];

const SocialMediaIcons = ({ classes = "flex space-x-2" }) => {
  return (
    <div className={`${classes} text-gray-600`}>
      {socialMediaIcons.map((socialMedia, index) => {
        const { url, icon, label } = socialMedia;
        return (
          <a
            href={url}
            key={index}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="hover:text-primary"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
