import Image from "next/image";
import ImageSplitAnimation from "../../ui/ImageSplitAnimation";

const About = () => {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t" id="about">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-primary text-center mb-6 md:mb-10">
            ABOUT ME
          </h1>

          <div className="space-y-6 md:space-y-0 md:flex md:flex-row-reverse justify-between h-full">
            <div className="flex-1 text-gray-700">
              <div className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae eveniet quibusdam architecto hic, voluptate vitae
                corrupti, quia nam voluptates debitis quo tenetur culpa
                perspiciatis deleniti iste velit amet ipsam consequatur adipisci
                tempora quos aperiam. At necessitatibus, ipsa repudiandae a
                magnam ab natus doloribus quidem cupiditate molestias, ex
                voluptatem eius? Minima totam dolorem sed velit tempore at, eos,
                quod cumque veritatis fuga maxime dignissimos, nesciunt ab
                ducimus ea soluta quos est molestias laborum enim! Ab laudantium
                accusantium exercitationem, unde delectus numquam vel dicta,
                eaque tenetur hic, temporibus perferendis natus illum. Nam
                pariatur repudiandae laboriosam blanditiis tempora dolor
                sapiente eos veniam deleniti!
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
