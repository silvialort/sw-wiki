import React from 'react';

import Header from './containers/Header/Header';
import CharacterList from './containers/CharacterList/CharacterList';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Header></Header>
      <h1>Prueba</h1>
      <CharacterList>
          <Card name="Luke Skywalker" />
      </CharacterList>
    </>
  );
}

export default App;
