import React from 'react';
import GlobalStyle from './globalStyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Personaje from './pages/Personajes/name';
import Contacto from './pages/Contacto';


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:name" element={<Personaje />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;