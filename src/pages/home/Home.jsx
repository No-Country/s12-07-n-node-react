import Title2 from "../../components/Title2";
import Carousel from "../../components/Carousel";

function Home() {

  return (
    <main className='mx-4 space-y-4 pt-[64px] md:mx-5'>
      <section>
        <Carousel />
      </section>
      <section>
        <Title2 title="Disney +" />
        <Title2 title="Netflix" />
      </section>
    </main>
  );
}

export default Home;
