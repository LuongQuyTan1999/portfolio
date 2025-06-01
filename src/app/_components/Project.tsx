import { Button } from "@/components/ui/button";
import Link from "next/link";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce site built with Next.js and TailwindCSS, integrated with a NestJS backend and PostgreSQL for product management.",
    link: "#",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS"],
  },
  {
    title: "HRM Dashboard",
    description:
      "A full-stack HRM system with employee profile management, built using React.js, NestJS, TypeORM, and Shadcn UI for a modern UI.",
    link: "#",
    tags: ["React.js", "NestJS", "TypeORM", "Shadcn UI"],
  },
  {
    title: "Task Management App",
    description:
      "A task management app with real-time updates, developed with Next.js, TailwindCSS, and a NestJS API with Mikro-ORM.",
    link: "#",
    tags: ["Next.js", "NestJS", "Mikro-ORM", "TailwindCSS"],
  },
];

export default function Project() {
  return (
    <div className="my-10 container">
      <div className="flex justify-between items-center mb-12">
        <h1 className="flex items-center gap-2 font-medium text-3xl">
          <span className="text-primary">#</span>
          projects
          <div className="bg-primary w-[500px] h-[1px]" />
        </h1>

        <Link href="/projects" className="font-medium">
          View al ~~&gt;
        </Link>
      </div>

      <div className="gap-4 grid grid-cols-3">
        {PROJECTS.map((item, idx) => (
          <div className="border border-secondary w-full" key={idx}>
            <div className="h-[201px]">Thumbnail</div>
            <div className="flex flex-wrap items-center gap-2 p-2 border-secondary border-y text-secondary">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  // className="bg-secondary px-2 py-1 rounded text-background"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-4 p-4">
              <div className="font-medium text-2xl">{item.title}</div>
              <div className="text-secondary">{item.description}</div>
              <div>
                <Button
                  variant="outline"
                  className="border-secondary hover:border-primary hover:text-primary"
                  asChild
                >
                  <Link href={item.link}>View project</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
