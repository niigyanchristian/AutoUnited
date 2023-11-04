import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';

const Rating = ({ rating,size=1 }) => {
    const {width} = useAuth()
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`full-star-${i}`} name="ios-star-sharp" size={width*0.07*size} color='#ffc000' />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Ionicons key={10} name="ios-star-half-sharp" size={width*0.07*size} color='#ffc000' />
      );
    }

    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default Rating;
