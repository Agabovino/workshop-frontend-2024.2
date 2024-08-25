import React, { useState } from 'react';
import styles from '@/app/styles/Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
        &#9664;
      </button>
      <div className={styles.carouselInner}>
        <div
          className={styles.carouselSlides}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.uuid} className={styles.carouselItem}>
              <img src={item.displayIcon} alt={item.displayName} className={styles.profile} />
              <h3 className={styles.name}>{item.displayName}</h3>
              <h4>{item.role.displayName}</h4>
              <div className={styles.abilities}>
                {item.abilities.map((ability, index) => (
                  <img key={index} src={ability.displayIcon} alt={ability.displayName} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.next} onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
