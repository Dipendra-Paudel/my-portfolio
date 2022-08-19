import ImageSplitAnimation from "../../ui/ImageSplitAnimation";

const About = () => {
  return (
    <div
      className="px-6 py-10 md:py-12 md:px-10 lg:px-20 xl:px-24 border-t"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="space-y-6 md:space-y-0 md:flex md:flex-row-reverse justify-between h-full">
            <div className="flex-1 space-y-2 xl:space-y-4">
              <h3 className="text-xl text-primary font-bold">ABOUT ME</h3>

              <h1 className="text-4xl xl:text-5xl font-bold text-darkColor">
                Fullstack Developer
              </h1>

              <div className="text-justify text-gray-600">
                I am a professional React.js and Next.js developer. I also build
                backend servers and api using Node.js and Express.js. I have
                been involved in this field for more than 3 years with 1 year of
                professional experience and done more than 10 projects.
              </div>
            </div>

            <div
              className="flex-1 md:flex md:mr-10"
              style={{ maxWidth: "400px" }}
            >
              <ImageSplitAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
