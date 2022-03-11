import type { NextPage } from "next";
import { Carousel, LogoContainer, NavContainer } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <LogoContainer />
      <NavContainer />
      <Carousel />
    </div>
  );
};

// export async function getServerSideProps() {
//   const data = await getCurrencyPrices();
//   return { props: { data } };
// }

export default Home;
