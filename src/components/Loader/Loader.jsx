import React from 'react';//
import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styles';

const CustomLoader = () => {
  return (
    <LoaderContainer>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </LoaderContainer>
  );
};

export default CustomLoader;
