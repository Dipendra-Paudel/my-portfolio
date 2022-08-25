import Image from "next/image";

const expectations = [
  {
    image: "/images/what-to-expect/responsive-design.webp",
    title: "Responsive Design",
    description: "Deliver fully responsive website for best user experience.",
  },
  {
    image: "/images/what-to-expect/seo.webp",
    title: "SEO",
    description: "Provide best SEO for your website.",
  },
  {
    image: "/images/what-to-expect/high-performance.webp",
    title: "High Performance",
    description: "Optimize the performance of your website",
  },
];

const WhatToExpectFromMe = () => {
  return (
    <div
      className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t"
      id="what-to-expect"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl text-primary font-bold mb-6 md:mb-8 text-center">
            WHAT TO EXPECT FROM ME
          </h2>

          <div className="flex justify-center">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {expectations.map((project, index) => {
                const { image, title, description } = project;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 text-center cursor-default w-36 sm:w-56 md:w-48 lg:w-60 xl:w-72 space-y-2"
                  >
                    <div className="w-36 h-36 mx-auto">
                      <div className="relative mx-auto w-full h-full">
                        <Image src={image} alt={title} layout="fill" />
                      </div>
                    </div>

                    <b className="px-1 xl:px-2 text-gray-700 lg:text-lg">
                      {title}
                    </b>
                    <div className="text-sm text-gray-600">{description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpectFromMe;
