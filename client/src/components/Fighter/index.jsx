import React, { useState } from 'react';

function fighterSelect ({ images, onSelectImage }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onSelectImage(image);
  };

  return (
    <div className="image-selector">
      <h2>Pick your Fighter!</h2>
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={selectedImage === image ? 'selected' : ''}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default fighterSelect;