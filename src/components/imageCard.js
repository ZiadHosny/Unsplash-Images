import React, { useEffect, useRef, useState } from 'react';

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', loadSpans);
  }, []);

  const loadSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  const { description, urls } = props.image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
