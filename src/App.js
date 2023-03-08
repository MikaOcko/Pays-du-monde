import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au-dessus => ici on ramène à l'accueil mais on pourrait rediriger vers une page d'erreur 404*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;