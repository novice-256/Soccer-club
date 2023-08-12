import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Banner.css';
function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src="../images/Banner1.jpg"
              alt="First slide"
            />
        </div>
        <Carousel.Caption>
          <h3>The Future of Football</h3>
          <p>As technology advances and the world evolves, so too does football. Video assistant referees (VAR), data analytics, and advancements in sports science are reshaping the way the game is played and experienced. With its timeless appeal and ability to adapt, football is poised to continue captivating generations to come.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src="../images/Banner2.jpg"
              alt="Second slide"
            />
        </div>
        <Carousel.Caption>
          <h3> Football and Identity</h3>
          <p>Football often intersects with cultural, national, and personal identities. Supporters rally behind their teams, creating a sense of belonging and camaraderie. Rivalries between teams can ignite intense passions and even shape social and political dynamics.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src="../images/Banner3.jpg"
              alt="Third slide"
            />
        </div>
        <Carousel.Caption>
          <h3>Tactical Strategies</h3>
          <p>Football is not only a physical game but also a mental one. Teams employ various tactical strategies, formations, and styles of play to gain an advantage over their opponents. From the possession-based tiki-taka to the counter-attacking style, each approach brings a unique flavor to the game.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;