function CarouselBanner() {
  return (

<div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={'src/assets/banner1.jpg'} className="d-block w-100 banner-img" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={'src/assets/banner2.jpg'}  className="d-block w-100 banner-img" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={'src/assets/banner3.avif'} className="d-block w-100 banner-img" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default CarouselBanner