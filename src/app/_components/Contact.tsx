import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="my-10 container">
      <div className="flex justify-between items-center mb-12">
        <h1 className="flex items-center gap-2 font-medium text-3xl">
          <span className="text-primary">#</span>
          contacts
          <div className="bg-primary w-[500px] h-[1px]" />
        </h1>
      </div>

      <div className="flex justify-between gap-5 w-full">
        <div className="max-w-[505px] font-medium text-secondary">
          Looking for a reliable developer for your next project? Let’s
          collaborate to build something amazing!
        </div>

        <div className="border border-secondary w-fit h-fit text-secondary">
          <Link
            href="mailto:tanquyluong@gmail.com"
            className="flex items-center gap-2 space-y-4 p-4"
          >
            <Mail />
            tanquyluong@gmail.com
          </Link>

          <Link href="/" className="flex items-center gap-2 space-y-4 p-4">
            <Github width={24} height={24} />
            Github
          </Link>

          <Link href="/" className="flex items-center gap-2 space-y-4 p-4">
            <Linkedin />
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
