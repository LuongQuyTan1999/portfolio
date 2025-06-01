import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        {[1, 2, 3].map((_item, idx) => (
          <div className="border border-secondary w-full" key={idx}>
            <div className="h-[201px]">Thumbnail</div>
            <div className="flex flex-wrap items-center gap-2 p-2 border-secondary border-y text-secondary">
              <span>Skills</span>
              <span>Skills</span>
              <span>Skills</span>
            </div>
            <div className="space-y-4 p-4">
              <div className="font-medium text-2xl">Project Name</div>
              <div className="text-secondary">Project Description</div>
              <div>
                <Button
                  variant="outline"
                  className="border-secondary hover:border-primary hover:text-primary"
                >
                  CTA
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
