/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Quotes from './pages/Quotes';

function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculate />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>

    </>

  );
}

export default App;
