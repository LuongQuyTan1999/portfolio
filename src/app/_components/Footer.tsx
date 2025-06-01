import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-20 py-8 border-secondary border-t w-full">
      <div className="container">
        {/* <div className="flex justify-between items-center">
          <div>
            <div className="font-medium text-2xl">Jackson</div>
            <div className="text-secondary">
              A passionate web developer with a focus on creating dynamic and
              responsive web applications.
            </div>
          </div>
          <div className="space-y-3">
            <div className="font-medium text-2xl">Media</div>
            <div className="flex space-x-2">
              <Link href="/">
                <Github width={24} height={24} />
              </Link>

              <Link href="/">
                <Linkedin width={24} height={24} />
              </Link>
            </div>
          </div>
        </div> */}
        <div className="w-full text-secondary text-center">
          © Copyright 2025. Made by Jackson
        </div>
      </div>
    </footer>
  );
}
