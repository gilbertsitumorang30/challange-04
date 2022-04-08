import React from 'react';
import {Image} from 'react-native';

const ImageDefault = ({...res}) => {
  return (
    <Image
      {...res}
      resizeMode="cover"
      style={{height: '100%', width: '100%'}}
    />
  );
};

export default ImageDefault;
