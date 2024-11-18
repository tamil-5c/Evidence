import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const App = () => {
  const images = [
    { src: './img/detection/Bronchiectasis.png', title: 'Bronchiectasis' },
    { src: './img/detection/Calcified nodules.png', title: 'Calcified nodules' },
    { src: './img/detection/cavity.png', title: 'Cavity' },
    { src: './img/detection/Clavicle Fracture.png', title: 'Clavicle Fracture' },
    { src: './img/detection/consolidation.png', title: 'Consolidation' },
    { src: './img/detection/Foreign Body - Chemoport.png', title: 'Foreign Body - Chemoport' },
    { src: './img/detection/Pleural Effusion.png', title: 'Pleural Effusion' },
    { src: './img/detection/Pneumothorax.png', title: 'Pneumothorax' },
  ];

  return (
    <div className="App">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
      >
        <Masonry className=' sm:flex'>
          {images.map((image, index) => (
            <div key={index} className="p-4 pr-6 mb-4 sm:w-full sm:pr-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full mb-2 rounded-lg"
              />
              <div className="text-sm font-semibold text-center text-white">{image.title}</div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default App;
