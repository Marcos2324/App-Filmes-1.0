import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const StarFull = <Icon name='star' size={30} color='#ff9200'/>;
const StarHalf = <Icon name='star-half' size={30} color='#ff9200'/>;
const StarEmpty = <Icon name='star-outline' size={30} color='#ff9200'/>;

const StarArea = styled.View`
  flex-direction: row;
  
`;
const StarView = styled.View``;

const StarText = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-left: 5px;
  color: #ff9200;
`;

export default ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for(var i=0; i<floor;i++){
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, k)=>(
        <StarView key={k}>
          {i === 0 && StarEmpty}
          {i === 1 && StarHalf}
          {i === 2 && StarFull}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
}

