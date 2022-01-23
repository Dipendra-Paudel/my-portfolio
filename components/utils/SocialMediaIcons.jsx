import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMediaIcons = [
  {
    url: "https://www.linkedin.com/in/dipendra-paudel-70342917b",
    icon: <LinkedInIcon className="social-icon" />,
  },
  {
    url: "https://twitter.com/dip_endrapaudel",
    icon: <TwitterIcon className="social-icon" />,
  },
  {
    url: "https://github.com/Dipendra-Paudel",
    icon: <GitHubIcon className="social-icon" />,
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col space-y-2 social-media-icon">
      {socialMediaIcons.map((socialMedia, index) => {
        const { url, icon } = socialMedia;
        return (
          <a href={url} key={index} target="_blank">
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
