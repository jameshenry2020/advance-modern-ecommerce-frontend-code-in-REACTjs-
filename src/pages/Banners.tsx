import React from 'react'
import slide1 from "../static/imgs/nike-1.png";
import slide2 from "../static/imgs/home-shoe-1.png";
import slide3 from "../static/imgs/hood.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Props {
}

const Banners = (props: Props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
      };
    return (
        <div className='slide-container'>
          <Slider {...settings}>
             <div className="slide">
                 <div className="content">
                     <span className='font-medium text-xl '>Top quality luxury shoes</span>
                     <h3>get the best with cheaper price</h3>
                     <a href="/shoe" className='btn'>Shop Now</a>
                 </div>
                 <div className="image">
                     <img src={slide1} alt="slide img1" />
                 </div>
             </div>
             <div className="slide active">
                 <div className="content">
                     <span>Top quality luxury shoes</span>
                     <h3>get the best with cheaper price</h3>
                     <a href="/shop" className='btn'>Shop Now</a>
                 </div>
                 <div className="image">
                     <img src={slide2} alt="slide img2" />
                 </div>
             </div>
             <div className="slide">
                 <div className="content">
                     <span>Top quality luxury shoes</span>
                     <h3>get the best with cheaper price</h3>
                     <a href="/shop" className='btn'>Shop Now</a>
                 </div>
                 <div className="image">
                     <img src={slide3} alt="slide img3" />
                 </div>
             </div>
         </Slider>
        </div>
    )
}


export default Banners;
