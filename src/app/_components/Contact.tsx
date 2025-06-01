import { Mail } from "lucide-react";
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
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>

        <div className="space-y-4 p-4 border border-secondary w-fit h-fit">
          <Link
            href="mailto:tanquyluong@gmail.com"
            className="flex items-center gap-2 text-secondary"
          >
            <Mail />
            tanquyluong@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
