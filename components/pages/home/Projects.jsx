import Image from "next/image";

const projectDetails = [
  {
    image: "/images/projects/mister-computer-solutions.webp",
    title: "Mister Computer Solutions",
  },
  {
    image: "/images/projects/iris-news.webp",
    title: "Iris News",
  },
  {
    image: "/images/projects/realtime-chat-application.webp",
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
        <div>
          <h1 className="text-2xl font-bold text-primary text-center mb-6">
            PROJECTS
          </h1>

          <div className="grid gap-6 grid-cols-2 md:flex md:justify-center md:space-x-6 place-items-center lg:text-lg font-semibold text-gray-700 xl:text-gray-600">
            {projectDetails.map((project, index) => {
              const { image, title } = project;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 text-center cursor-default w-36 sm:w-56 md:w-48 lg:w-60 xl:w-72 border"
                >
                  <div className="w-full h-36 sm:h-56 md:h-48 lg:h-60 xl:h-72 border-b border-white">
                    <div className="relative mx-auto w-full h-full border-b">
                      <Image src={image} alt={title} layout="fill" />
                    </div>
                  </div>

                  <div className="p-1 xl:p-2">{title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
