import React from "react";
import Title2 from "../components/Title2";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <section>
        <Title2 title="Disney +" />
        <Carousel />
      </section>
      <section>
        <Title2 title="Netflix" />
      </section>
    </>
  );
}

export default Home;
