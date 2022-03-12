import type { NextPage } from "next";
import { Carousel, LogoContainer, NavContainer } from "../components";
import { Preamble } from "../components/preamble";
import { ResearchDescription } from "../components/research-description";

const Home: NextPage = () => {
  return (
    <div>
      <LogoContainer />
      <NavContainer />
      <div className="px-[3%] sm:px-[5%] xl:px-10">
        <Carousel />
        <Preamble />
        <ResearchDescription />
      </div>
    </div>
  );
};

export default Home;
