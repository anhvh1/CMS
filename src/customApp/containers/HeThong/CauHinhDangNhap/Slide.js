import React, {useRef} from 'react';

const Slide = () => {
  const imageRef = useRef(null);
  const clonedImageRef = useRef(null);

  const handleMouseDown = (e) => {
    const image = imageRef.current;
    const clonedImage = image.cloneNode(true);
    const rect = image.getBoundingClientRect();

    clonedImage.style.position = 'fixed';
    clonedImage.style.top = `${rect.top}px`;
    clonedImage.style.left = `${rect.left}px`;
    clonedImage.style.pointerEvents = 'none';

    document.body.appendChild(clonedImage);

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const handleMouseMove = (e) => {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      clonedImage.style.left = `${x}px`;
      clonedImage.style.top = `${y}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    clonedImageRef.current = clonedImage;
  };

  const handleClick = () => {
    if (clonedImageRef.current) return; // Do not handle click if a cloned image is being dragged
  };

  return (
    <div>
      <img
        ref={imageRef}
        src="https://via.placeholder.com/150"
        alt="Sample"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      />
    </div>
  );
};

export default Slide;
