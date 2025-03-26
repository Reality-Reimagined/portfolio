

// components/ProjectCarousel.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const projectImages = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
];


// const ProjectCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((current) => (current + 1) % projectImages.length);
//     }, 3000); // Change images every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-64">
//       {projectImages.map((src, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <Image src={src} alt={`Project ${index + 1}`} layout="fill" objectFit="cover" />
//         </div>
//       ))}
//     </div>
//   );
// };
const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Slider {...settings}>
        {projectImages.map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`Project ${index + 1}`} width={600} height={400} layout="responsive" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;


// const ProjectCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', height: '400px' }}>
//       <Slider {...settings}>
//         {projectImages.map((src, index) => (
//           <div key={index} className="w-full h-full">
//             <div className="w-full h-full relative">
//               <Image src={src} alt={`Project ${index + 1}`} fill style={{ objectFit: 'cover' }} />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ProjectCarousel;