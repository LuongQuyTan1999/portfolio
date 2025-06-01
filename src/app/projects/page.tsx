import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="space-y-3 mt-[53px]">
        <h1 className="flex items-center gap-2 font-medium text-3xl">
          <span className="text-primary">/</span>
          projects
        </h1>
        <p className="text-secondary">List of my projects</p>
      </div>

      <div className="my-10 w-full">
        {/* <div className="flex justify-between items-center mb-12">
          <h1 className="flex items-center gap-2 font-medium text-3xl">
            <span className="text-primary">#</span>
            complete-apps
          </h1>
        </div> */}

        <div className="gap-4 grid grid-cols-3">
          {PROJECTS.map((item, idx) => (
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
                    <Link href={item.link} target="_blank">
                      View project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
