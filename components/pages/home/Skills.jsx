import Image from "next/image";

const skills = [
  {
    image: "/images/skills/Reactjs-40x40.webp",
    title: "React.js",
  },
  {
    image: "/images/skills/Nextjs-40x40.webp",
    title: "Next.js",
  },
  {
    image: "/images/skills/Javascript-40x40.webp",
    title: "Javascript",
  },
  {
    image: "/images/skills/TailwindCSS-40x40.webp",
    title: "Tailwind CSS",
  },
  {
    image: "/images/skills/Nodejs-40x40.webp",
    title: "Node.js",
  },
  {
    image: "/images/skills/Expressjs-40x40.webp",
    title: "Express.js",
  },
  {
    image: "/images/skills/MongoDB-40x40.webp",
    title: "MongoDB",
  },
  {
    image: "/images/skills/Github-40x40.webp",
    title: "Github",
  },
];

const Skills = () => {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t" id="skills">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl text-primary font-bold mb-6 md:mb-8 text-center">
            SKILLS
          </h2>

          <div className="flex justify-center">
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 text-sm text-center">
              {skills.map((skill, index) => {
                const { image, title } = skill;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 text-gray-700 border w-24 xl:w-28 p-2 cursor-default"
                  >
                    <div className="mx-auto inline-block">
                      <div
                        className="relative h-10"
                        style={{ width: index === 4 ? "60px" : "40px" }}
                      >
                        <Image src={image} alt={title} layout="fill" />
                      </div>
                    </div>

                    <div>{title}</div>
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

export default Skills;
