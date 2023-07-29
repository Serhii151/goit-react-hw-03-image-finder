import React, { useState } from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import CustomLoader from './Loader/Loader';
import Modal from './Modal/Modal';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFormSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    fetchImages(query, 1);
  };

  const fetchImages = (query, page) => {
    const API_KEY = '37312100-865d32ca69dd36d98aea990c9';
    const BASE_URL = 'https://pixabay.com/api/';
    const PER_PAGE = 12;

    setIsLoading(true);

    fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.log('Error fetching images:', error))
      .finally(() => setIsLoading(false));
  };

  const handleLoadMore = () => {
    fetchImages(searchQuery, page);
  };

  const handleImageClick = (largeImageUrl) => {
    setSelectedImage(largeImageUrl);
};

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {isLoading && <CustomLoader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore}>Load More</Button>}
      {selectedImage && <Modal largeImageURL={selectedImage} onClose={handleModalClose} />}
    </AppContainer>
  );
};

export default App;