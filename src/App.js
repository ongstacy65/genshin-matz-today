import React from 'react';
import MainContainer from './components/MainContainer'
import ListContainer from './components/ListContainer'
import ItemBox from './components/ItemBox'
import MatzText from './components/MatzText'
import SubText from './components/SubText'
import ItemImage from './components/ItemImage'
import items from './data/items'
import { getToday, getItemsToday } from './utils'

function App() {
  const matzForToday = getItemsToday(items, getToday())

  return (
    <MainContainer>
      <ListContainer>
        {matzForToday.map(matz => <ItemBox key={matz.name}>
          <ItemImage src={matz.image} />
          <MatzText>{matz.name}</MatzText>
          <SubText>{matz.location}</SubText>
        </ItemBox>)}
      </ListContainer>
    </MainContainer>
  );
}

export default App;
