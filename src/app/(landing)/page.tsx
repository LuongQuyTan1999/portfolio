import Banner from "../_components/Banner";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Project from "../_components/Project";
import Skill from "../_components/Skill";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center size-full">
      <Header />

      <Banner />

      <Project />

      <Skill />

      <Contact />

      <Footer />
    </div>
  );
}
