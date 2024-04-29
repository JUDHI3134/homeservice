import React from 'react'
import home from '../../public/home.jpg'
import home2 from '../../public/home2.jpg'
import home3 from '../../public/home3.jpg'

const Home = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-16 mt-20'>
      {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={home} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={home2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={home3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<div>
<img className='w-full h-[450px]' src={home} alt="" />
</div>
    </div>
  )
}

export default Home
