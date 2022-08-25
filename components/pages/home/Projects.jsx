import Image from "next/image";

const projectDetails = [
  {
    image: "/images/projects/Mister-Computer-Solutions.webp",
    title: "Mister Computer Solutions",
  },
  {
    image: "/images/projects/The-Momo-World.webp",
    title: "The Momo World",
  },
  {
    image: "/images/projects/Pwnbot-Systems.webp",
    title: "Pwnbot Systems",
  },
  {
    image: "/images/projects/Iris-News.webp",
    title: "Iris News",
  },
  {
    image: "/images/projects/Realtime-Chat-Application.webp",
    title: "Realtime chat application",
  },
];

const Projects = () => {
  return (
    <div
      className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto">
          <h2 className="text-xl text-primary font-bold mb-6 md:mb-8 text-center">
            PROJECTS
          </h2>

          <div className="flex justify-center">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:gap-10">
              {projectDetails.map((project, index) => {
                const { image, title } = project;
                return (
                  <div
                    key={index}
                    className="relative mx-auto md:mx-0 flex-shrink-0 text-center cursor-default w-56 sm:w-68 md:w-52 lg:w-64 xl:w-80 border"
                  >
                    <div className="w-full h-56 sm:h-68 md:h-52 lg:h-64 xl:h-80 border-b border-white">
                      <div className="relative mx-auto w-full h-full border-b">
                        <Image src={image} alt={title} layout="fill" />
                      </div>
                    </div>

                    <b className="p-1 xl:p-2 text-gray-700 lg:text-lg">
                      {title}
                    </b>
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

export default Projects;
