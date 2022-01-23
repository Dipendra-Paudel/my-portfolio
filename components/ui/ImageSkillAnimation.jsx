import React from "react";
import SocialMediaIcons from "../utils/SocialMediaIcons";

const skillsRound = [
  {
    image: "/images/reactjs.png",
  },
  {
    image: "/images/nodejs.png",
  },
  {
    image: "/images/reactjs.png",
  },
  {
    image: "/images/nodejs.png",
  },
];

const ImageSkillAnimation = () => {
  return (
    <div className="relative">
      <div className="absolute right-full pr-2 z-20 top-1/2 translate-y-mid text-primary">
        <SocialMediaIcons />
      </div>
      <div className="w-96 h-96 relative">
        <div className="w-full h-full">
          <img src="/images/profile.jpg" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ImageSkillAnimation;
