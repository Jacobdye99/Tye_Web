import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Links from './Modules//Navbar/Links';
import GalleryPage from './Pages/Gallery/Gallery';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Links />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Gallery' element={<GalleryPage />}/>
          <Route path='/Shop' element={<Shop />}/>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
