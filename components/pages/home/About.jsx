import ImageSplitAnimation from "../../ui/ImageSplitAnimation";
import ContactEmail from "../../utils/ContactEmail";

const emails = ["dipenbro006@gmail.com"];

const About = () => {
  return (
    <div
      className="px-6 py-10 md:py-12 md:px-10 lg:px-20 xl:px-24 border-t"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="space-y-6 md:space-y-0 md:flex md:flex-row-reverse justify-between h-full">
            <div className="flex-1 text-gray-600">
              <div className="space-y-2 xl:space-y-4">
                <div className="text-xl text-primary font-bold">ABOUT ME</div>

                <h2 className="text-4xl xl:text-5xl font-bold text-darkColor">
                  Fullstack Developer
                </h2>

                <div className="text-justify">
                  I am a professional React.js and Next.js developer. I also
                  build backend servers and api using Node.js and Express.js. I
                  have been involved in this field for more than 4 years with 1
                  year of professional experience and done more than 15
                  projects.
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-lg">
                  Curious to know more about me?
                </h3>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi doloribus, reprehenderit aliquid explicabo veniam
                  perferendis debitis est ea at perspiciatis saepe, mollitia,
                  assumenda consequatur aspernatur voluptatibus sed. Neque
                  fugiat, itaque optio perferendis id doloremque quaerat, at
                  omnis, minus vitae consequatur.
                </div>

                <div className="pt-2 space-y-1">
                  <div>Contact Now</div>

                  {emails.map((email, index) => (
                    <ContactEmail key={index} email={email} />
                  ))}
                </div>
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
