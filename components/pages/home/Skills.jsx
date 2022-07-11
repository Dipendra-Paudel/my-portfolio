import Image from "next/image";

const skills = [
  {
    image: "/images/skills/React-logo.png",
    title: "React.js",
  },
  {
    image: "/images/skills/Nextjs-logo.png",
    title: "Next.js",
  },
  {
    image: "/images/skills/Javascript-logo.jpg",
    title: "Javascript",
  },
  {
    image: "/images/skills/tailwindcss-logo.png",
    title: "Tailwind CSS",
  },
  {
    image: "/images/skills/Javascript-logo.jpg",
    title: "Node.js",
  },
  {
    image: "/images/skills/React-logo.png",
    title: "Express.js",
  },
  {
    image: "/images/skills/Nextjs-logo.png",
    title: "MongoDB",
  },
];

const Skills = () => {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20 xl:px-24 border-t" id="skills">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-primary text-center mb-6">
            SKILLS
          </h1>

          <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-items-center text-sm text-center">
            {skills.map((skill, index) => {
              const { image, title } = skill;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 text-gray-700 border w-24 xl:w-28 p-2 cursor-default"
                >
                  <div className="mx-auto inline-block">
                    <div className="relative w-10 h-10">
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
  );
};

export default Skills;
