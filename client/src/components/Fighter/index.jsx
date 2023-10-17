import React from 'react';

const fighterGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default fighterGallery;