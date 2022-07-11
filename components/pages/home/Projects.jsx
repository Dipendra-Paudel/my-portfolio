import Image from "next/image";

const projectDetails = [
  {
    image: "/images/skills/Javascript-logo.jpg",
    title: "Mister Computer Solutions",
  },
  {
    image: "/images/skills/Javascript-logo.jpg",
    title: "Mister Computer Solutions",
  },
  {
    image: "/images/skills/Javascript-logo.jpg",
    title: "Mister Computer Solutions",
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

          <div className="grid gap-6 text-xl">
            {projectDetails.map((project, index) => {
              const { image, title } = project;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 text-center text-gray-700 border p-2 cursor-default col-span-1"
                >
                  <div
                    className="relative w-full h-80 mx-auto"
                    style={{ maxWidth: "320px" }}
                  >
                    <Image src={image} alt={title} layout="fill" />
                  </div>

                  <div>{title}</div>
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
