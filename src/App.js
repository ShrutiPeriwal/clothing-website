import React from 'react';
import Home from './route/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './route/navigation/navigation.component';
import Shop from './route/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path= "/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;