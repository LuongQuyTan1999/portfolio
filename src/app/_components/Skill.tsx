import Image from "next/image";

const SKILLS_1 = [{ name: "Languages", skills: ["TypeScript", "JavaScript"] }];

const SKILLS_2 = [
  {
    name: "Fronted",
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Shadcn UI",
      "Tanstack Query",
      "Zustand",
    ],
  },
  { name: "Backend", skills: ["Node.js", "NestJS"] },
];

const SKILLS_3 = [
  { name: "Database", skills: ["PostgreSQL", "Mikro-ORM", "TypeORM", "Mongo"] },
  {
    name: "Other",
    skills: [
      "HTML",
      "CSS",
      "REST",
      "Feature-Sliced Design (FSD) Architectural",
    ],
  },
];

// const SKILLS_2 = [
//   { name: "Tools", skills: ["Git", "Docker", "CI/CD"] },
//   { name: "Testing", skills: ["Jest", "Cypress"] },
//   { name: "Cloud", skills: ["AWS", "Vercel"] },
//   { name: "Soft Skills", skills: ["Teamwork", "Problem Solving", "Communication"] },
// ]

export default function Skill() {
  return (
    <div className="my-10 container">
      <div className="flex justify-between items-center mb-12">
        <h1 className="flex items-center gap-2 font-medium text-3xl">
          <span className="text-primary">#</span>
          skills
          <div className="bg-primary w-[500px] h-[1px]" />
        </h1>
      </div>

      <div className="flex items-center gap-5 w-full">
        <div className="relative min-w-[349px] h-[242px]">
          <Image
            src="/skill-bg.webp"
            alt="skill"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="gap-4 grid grid-cols-3 w-full">
          {SKILLS_1.map((skill) => (
            <div
              key={skill.name}
              className="border border-secondary w-full h-fit"
            >
              <div className="p-2 border-secondary border-b font-semibold">
                {skill.name}
              </div>

              <div className="flex flex-wrap gap-2 p-2 text-secondary">
                {skill.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            {SKILLS_2.map((skill) => (
              <div
                key={skill.name}
                className="border border-secondary w-full h-fit"
              >
                <div className="p-2 border-secondary border-b font-semibold">
                  {skill.name}
                </div>

                <div className="flex flex-wrap gap-2 p-2 text-secondary">
                  {skill.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {SKILLS_3.map((skill) => (
              <div
                key={skill.name}
                className="border border-secondary w-full h-fit"
              >
                <div className="p-2 border-secondary border-b font-semibold">
                  {skill.name}
                </div>

                <div className="flex flex-wrap gap-2 p-2 text-secondary">
                  {skill.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
