import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Links from './Modules/Links';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Links />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Gallery' element={<h1>Gallery</h1>}/>
          <Route path='/Shop' element={<h1>Shop</h1>} />
          <Route path='/Contact' element={<h1>Contact</h1>} />
          <Route path='/Cart' element={<h1>Cart</h1>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
