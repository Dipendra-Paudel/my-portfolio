import React from "react";
import Image from "next/image";
import SocialMediaIcons from "../utils/SocialMediaIcons";
import ImageSplitAnimation from "./ImageSplitAnimation";

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
    <div className="relative w-full lg:w-auto hero-section-image-container">
      <div className="hero-section-social-icons-container">
        <SocialMediaIcons classes="flex space-x-2 md:space-x-0 md:flex-col md:space-y-2" />
      </div>

      <ImageSplitAnimation />
    </div>
  );
};

export default ImageSkillAnimation;
