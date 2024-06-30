import React from 'react';
import CarouselCard from '../card/CarouselCard';
import heroImg from "/hero.png"; // Adjust the import path as per your file structure
import footer from "/footer1.png"
import imga1 from "/imga1.png"
import imga2 from "/imga2.png"
const Carousel = () => {
  return (
    <div className="bg-[url('/hero.png')] flex flex-col items-center justify-center h-[80vh] bg-cover bg-center p-4 mt-20">
      <div className="container mx-auto flex space-x-4 overflow-x-scroll hide-scrollbar">
        <CarouselCard
          bg={heroImg} // Pass the imported image to bg prop
          title="Garlic Peeled"
          price="₹46/100g"
          buttonText="Order now"
        />
        
        <CarouselCard
          bg={footer} // Pass the imported image to bg prop
          title="Onion"
          price="₹31/kg"
          buttonText="Order now"
        />
        <CarouselCard
          bg={imga1} // Pass the imported image to bg prop
          title="Be summer ready with"
          description="Hindustan Unilever Limited"
          buttonText="Order now"
          discount="12% off"
        />
        <CarouselCard
          bg={imga2} // Pass the imported image to bg prop
          title="Home decor that whispers luxury"
          description="Hindustan Unilever Limited"
          buttonText="Order now"
        />
        <CarouselCard
          bg={heroImg} // Pass the imported image to bg prop
          title="Home decor that whispers luxury"
          buttonText="Order now"
        />
      </div>
    </div>
  );
};

export default Carousel;
