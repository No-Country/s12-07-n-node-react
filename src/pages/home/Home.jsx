import Title2 from "../../components/Title2";
import Carousel from "../../components/Carousel";
import Amazon from "../../assets/icons/Amazon.png"
import Netflix from "../../assets/icons/netflix.png"
import HBO from "../../assets/icons/HBO.png"
import Disney from "../../assets/icons/disney.png"

function Home() {

  return (
    <main className='mt-[48px] px-4 2xl:px-0 max-w-[1440px] mx-auto lg:mt-[72px] py-4'>
      <section>
        <Carousel />
      </section>
      <div className="flex gap-4 py-4 justify-evenly">
        <img src={Amazon} className="rounded-xl w-[120px]" alt="" /><img src={Netflix} className="rounded-xl w-[120px]" alt="" /><img src={HBO} className="rounded-xl w-[120px]" alt="" /><img src={Disney} className="rounded-xl w-[120px]" alt="" />
      </div>
      <section>
        <Title2 title="Disney +" />
        <Title2 title="Netflix" />
      </section>
    </main>
  );
}

export default Home;
