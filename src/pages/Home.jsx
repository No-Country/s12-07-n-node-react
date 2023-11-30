import { useEffect, useState } from "react";
import Title2 from "../components/Title2";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`, options)
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(trending);
  return (
    <>
      <section>
        <Title2 title="Disney +" />
        {trending && (
          <Carousel>
            {trending.map((item) => (
              <CarouselItem key={item.id} poster={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : ""} />
            ))}
          </Carousel>
        )}
      </section>
      <section>
        <Title2 title="Netflix" />
      </section>
    </>
  );
}

export default Home;
