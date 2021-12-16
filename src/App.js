import React from 'react'
import './App.css';
import ArtistsComponent from './ArtistComponent';
import ArtistDetailComponent from './ArtistDetailComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" exact element={<ArtistsComponent />} />
          <Route path="/album/:albumId" exact element={<ArtistDetailComponent />} />
          {/* <Route>404 Not Found!</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App
