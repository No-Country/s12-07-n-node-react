function Carousel({ children }) {
  return (
    <div className="carousel carousel-center w-full space-x-4 rounded-box bg-neutral p-4">
      {children}
    </div>
  )
}

export default Carousel
