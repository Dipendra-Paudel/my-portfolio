import React from "react";
import { ContactButton } from "../../utils/Button";
import ImageSkillAnimation from "../../ui/ImageSkillAnimation";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 px-6 md:px-10 lg:px-20 xl:px-24 py-10 md:py-16">
          <div className="max-w-7xl mx-auto h-full">
            <div className="space-y-16 md:space-y-0 md:flex items-center justify-between md:space-x-20 h-full">
              <div className="flex-1">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl lg:text-2xl text-primary font-bold">
                      Hey,
                    </h2>
                    <h1 className="text-3xl xl:text-4xl font-bold text-primary">
                      {"It's me Dipendra Paudel"}
                    </h1>
                  </div>
                  <div className="text-justify text-gray-600">
                    I am a full stack developer. I build fully responsive and
                    functional websites as well as build backend servers and
                    create api.
                  </div>
                  <div className="inline-block pt-2">
                    <ContactButton />
                  </div>
                </div>
              </div>
              <div className="flex-1 md:flex md:justify-end">
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
