import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants";
import Link from "next/link";

export default function Project() {
  return (
    <div className="my-10 w-full" id="projects">
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
        {PROJECTS.splice(0, 3).map((item, idx) => (
          <div className="border border-secondary w-full" key={idx}>
            <div
              className={`h-[201px] bg-[url(${item.thumbnail})] bg-no-repeat bg-center bg-cover`}
            />
            <div className="flex flex-wrap items-center gap-2 p-2 border-secondary border-y text-secondary">
              {item.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="space-y-4 p-4">
              <div className="font-medium text-2xl">{item.title}</div>
              <div className="text-secondary line-clamp-4">
                {item.description}
              </div>
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
