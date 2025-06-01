import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col items-center mb-10 container">
      <div className="flex justify-between items-center gap-8 w-full min-h-[550px]">
        <div>
          <h1 className="mb-4 font-bold text-primary text-3xl">
            Hi, I’m Jackson - Full-Stack Developer
          </h1>
          <p className="mb-6 text-secondary">
            I’m a full-stack developer with 4 years of experience building
            scalable, user-friendly web applications using React.js, Next.js,
            NestJS, and PostgreSQL. I specialize in creating responsive
            frontends with TailwindCSS and Shadcn UI, paired with robust
            backends using NestJS and Mikro-ORM/TypeORM. My goal is to deliver
            high-quality, maintainable code that drives your business forward.
            Let’s build something amazing together!
          </p>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#project">View Projects</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center size-full">
          <Image
            src="/banner.webp"
            alt="Banner Image"
            width={469}
            height={386}
            className="shadow-lg rounded-lg min-w-[469px] min-h-[386px] object-cover"
          />

          <div className="flex items-center gap-2 p-2 border border-secondary w-full max-w-[402px]">
            <div className="bg-primary w-4 h-4" />
            <div className="font-medium text-secondary">
              Currently working on{" "}
              <Link
                href="https://enouvo.com/"
                target="_blank"
                className="font-bold text-background"
              >
                Enouvo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-fit font-medium text-2xl">
        <div className="relative p-8 border border-secondary w-fit">
          With great power comes great electricity bill
          <div className="-top-3 left-4 absolute">
            <Image src="/quote.svg" alt="Quote Icon" width={41} height={28} />
          </div>
          <div className="right-4 -bottom-3 absolute">
            <Image src="/quote.svg" alt="Quote Icon" width={41} height={28} />
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="p-4 border border-secondary border-t-0 w-fit">
            - Mr. Jackson
          </div>
        </div>
      </div>
    </div>
  );
}
