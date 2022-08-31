import React, { useState } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import './App.css';
import { IBusinesses } from '../../interfaces/buisness.interfaces';


function App() {
  const [businesses, setBusinesses] = useState<IBusinesses>([])
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
