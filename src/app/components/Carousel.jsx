import React, { useState } from 'react';
import styles from '@/app/styles/Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
        &#9664;
      </button>
      <div className={styles.carouselInner}>
        <div className={styles.carouselSlides}>
          {visibleItems.map((item) => (
            <div key={item.uuid} className={styles.carouselItem}>
              <img src={item.displayIcon} alt={item.displayName} className={styles.profile} />
              <h3 className={styles.agentName}>{item.displayName}</h3>
              <h4 className={styles.agentClass}>{item.role ? item.role.displayName : 'N/A'}</h4>
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
