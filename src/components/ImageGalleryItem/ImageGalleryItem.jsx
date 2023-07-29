import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, Picture } from './ImageGalleryItem.styles';

const ImageGalleryItem = ({ imageUrl, alt, onImageClick }) => { 
  return (
    <ImageGalleryItemStyled> {}
      <Picture
        src={imageUrl}
        alt={alt}
        onClick={onImageClick}
        style={{ cursor: 'pointer' }}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;