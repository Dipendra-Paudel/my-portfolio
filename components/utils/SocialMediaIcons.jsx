import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const socialMediaIcons = [
  {
    component: (
      <LinkedinShareButton url="https://www.linkedin.com/in/dipendra-paudel-750267249/">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    ),
  },
  {
    component: (
      <TwitterShareButton url="https://twitter.com/dip_endrapaudel">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    ),
  },
];

const SocialMediaIcons = ({ classes = "flex space-x-2", footer }) => {
  return (
    <div className={`${classes} ${footer ? "" : "text-gray-600"}`}>
      {socialMediaIcons.map((socialMedia, index) => {
        const { component } = socialMedia;
        return <div key={index}>{component}</div>;
      })}
    </div>
  );
};

export default SocialMediaIcons;
