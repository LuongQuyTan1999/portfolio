import Image from "next/image";

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
          <div className="border border-secondary w-full h-fit">
            <div className="p-2 border-secondary border-b font-semibold">
              Languages
            </div>

            <div className="flex flex-wrap gap-2 p-2 text-secondary">
              <span>TypeScript</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-secondary w-full h-fit">
              <div className="p-2 border-secondary border-b font-semibold">
                Database
              </div>

              <div className="flex flex-wrap gap-2 p-2 text-secondary">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>Mongo</span>
              </div>
            </div>

            <div className="border border-secondary w-full h-fit">
              <div className="p-2 border-secondary border-b font-semibold">
                Frameworks
              </div>

              <div className="flex flex-wrap gap-2 p-2 text-secondary">
                <span>ReactJS</span>
                <span>NextJS</span>
                <span>NestJS</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-secondary w-full h-fit">
              <div className="p-2 border-secondary border-b font-semibold">
                Tools
              </div>

              <div className="flex flex-wrap gap-2 p-2 text-secondary">
                <span>VSCode</span>
                <span>Figma</span>
                <span>Git</span>
                <span>Jira</span>
              </div>
            </div>

            <div className="border border-secondary w-full h-fit">
              <div className="p-2 border-secondary border-b font-semibold">
                Other
              </div>

              <div className="flex flex-wrap gap-2 p-2 text-secondary">
                <span>HTML</span>
                <span>CSS</span>
                <span>Tailwindcss</span>
                <span>Shadcn-ui</span>
                <span>REST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
