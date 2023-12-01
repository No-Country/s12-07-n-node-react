function Carousel({ children }) {
  return (
    <div className="carousel carousel-center w-full space-x-4 rounded-box p-4">
      {children}
    </div>
  );
}

export default Carousel;
