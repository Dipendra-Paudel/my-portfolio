import React from "react";
import Button from "../utils/Button";
import Navigation from "./Navigation";
import ImageSkillAnimation from "./ImageSkillAnimation";

const HeroSection = () => {
  return (
    <div className="hero-section flex flex-col">
      <Navigation />

      <div className="flex-1 px-40 py-10">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex items-center justify-between space-x-20 h-full">
            <div className="flex-1">
              <div className="space-y-6">
                <div className="relative text-center">
                  <div className="inline-block bg-white px-4 z-10 relative text-2xl">
                    Hey
                  </div>
                  <div className="absolute w-full h-0.5 bg-primary opacity-40 left-0 top-1/2"></div>
                </div>
                <div className="text-4xl font-bold text-primary">
                  It's me Dipendra Paudel
                </div>
                <div className="text-xl text-gray-600">
                  Full Stack Developer
                </div>
                <div className="text-justify text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  distinctio optio tempore eius exercitationem quod ea! Mollitia
                  aperiam cum amet.
                </div>
                <div className="inline-block">
                  <Button label="Contact" url="/contact" />
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
  );
};

export default HeroSection;
