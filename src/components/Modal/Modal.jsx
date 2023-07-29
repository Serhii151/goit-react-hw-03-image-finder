import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, ModalImage } from './Modal.styles';


const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalImage src={largeImageURL} alt="" />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;