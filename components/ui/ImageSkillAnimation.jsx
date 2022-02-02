import React from "react";
import Image from "next/image";
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
    <div className="relative w-full lg:w-auto">
      <div className="hero-section-social-icons-container">
        <SocialMediaIcons classes="flex space-x-2 md:space-x-0 md:flex-col md:space-y-2" />
      </div>
      <div className="h-72 w-full lg:w-96 lg:h-96 hero-section-image">
        <Image src="/images/profile.jpg" alt="Dipendra Paudel" layout="fill" />
      </div>
    </div>
  );
};

export default ImageSkillAnimation;
