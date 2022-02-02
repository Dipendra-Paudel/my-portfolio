import React from "react";
import Button from "../utils/Button";
import ImageSkillAnimation from "./ImageSkillAnimation";
import Settings from "../utils/Settings";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="w-full h-full flex flex-col dark:bg-darkColor mode-transition">
        <Settings />

        <div className="flex-1 px-6 md:px-10 lg:px-20 xl:px-36 py-10">
          <div className="max-w-7xl mx-auto h-full">
            <div className="space-y-16 md:space-y-0 md:flex items-center justify-between md:space-x-20 h-full">
              <div className="flex-1">
                <div className="space-y-4">
                  <div className="relative text-center">
                    <div className="inline-block bg-white text-gray-700 dark:bg-darkColor dark:text-white mode-transition px-4 z-10 relative text-xl lg:text-2xl">
                      Hey
                    </div>
                    <div className="absolute w-full h-0.5 bg-primary opacity-40 left-0 top-1/2"></div>
                  </div>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
                    {"It's me Dipendra Paudel"}
                  </div>
                  <div className="text-lg md:text-lg text-gray-800 dark:text-gray-300 mode-transition">
                    Full Stack Developer
                  </div>
                  <div className="text-justify text-gray-600  dark:text-gray-400 mode-transition">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi ducimus veniam laboriosam! Sapiente ducimus accusamus
                    iusto, voluptatum suscipit deserunt vel!
                  </div>
                  <div className="inline-block pt-2">
                    <Button label="Contact Me" url="/contact" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <ImageSkillAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
