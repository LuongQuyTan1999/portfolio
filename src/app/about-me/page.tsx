import Image from "next/image";

const SKILLS_1 = [
  { name: "Languages", skills: ["TypeScript", "JavaScript"] },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "TailwindCSS", "Shadcn UI"],
  },
  { name: "Backend", skills: ["Node.js", "NestJS"] },
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

const FACTS = [
  "NLH poker tournament is my favourite",
  "My favourite food is Pho",
  "I love playing video games",
  "I enjoy traveling and exploring new places",
  "I have a special fondness for Coffee",
];

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 400 : 300;
  const height = isLandscape ? 300 : 400;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function AboutMe() {
  return (
    <>
      <div className="space-y-3 mt-[53px]">
        <h1 className="flex items-center gap-2 font-medium text-3xl">
          <span className="text-primary">/</span>
          about-me
        </h1>
        <p className="text-secondary">Who am i?</p>
      </div>

      {/* About */}
      <div className="flex justify-between items-center gap-8 mb-14">
        <div className="space-y-10 max-w-[700px] text-secondary">
          <p>Hello, i'm Jackson</p>

          <p>
            I’m a passionate full-stack developer with 4 years of experience
            building scalable, user-friendly web applications. I specialize in
            crafting responsive frontends using React.js, Next.js, TailwindCSS,
            and Shadcn UI, paired with robust backends powered by NestJS,
            PostgreSQL, and Mikro-ORM/TypeORM. My focus is on delivering
            high-quality, maintainable code that solves real-world problems and
            drives business success.
          </p>
          <p>
            Whether it’s developing a sleek e-commerce platform, a custom HRM
            system, or a task management app, I bring a detail-oriented approach
            to every project. I thrive on turning ideas into reality with clean
            design and efficient functionality. Let’s collaborate to build
            something impactful for your business!
          </p>
        </div>

        <div>
          <Image
            src="/about-me.webp"
            alt="About Me"
            width={343}
            height={508}
            className="min-w-[343px] min-h-[508px] object-cover"
          />
        </div>
      </div>

      <div className="my-14">
        <div className="flex justify-between items-center mb-12">
          <h1 className="flex items-center gap-2 font-medium text-3xl">
            <span className="text-primary">#</span>
            skills
          </h1>
        </div>

        <div className="flex gap-4">
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
        </div>
      </div>

      <div className="my-14">
        <div className="flex justify-between items-center mb-12">
          <h1 className="flex items-center gap-2 font-medium text-3xl">
            <span className="text-primary">#</span>
            my-fun-facts
          </h1>
        </div>

        <div className="flex gap-[100px]">
          <div className="flex flex-wrap gap-4 max-w-[605px] h-fit">
            {FACTS.map((fact) => (
              <div key={fact} className="border border-secondary w-fit h-fit">
                <div className="p-2 text-secondary">{fact}</div>
              </div>
            ))}
          </div>

          <div>
            <section id="photos">
              <div className="gap-4 columns-2 sm:columns-3">
                {images.map((imageUrl, idx) => (
                  <div key={imageUrl}>
                    <img
                      className="mb-4 rounded-lg size-full object-contain"
                      src={imageUrl}
                      alt={`Random stock image ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
