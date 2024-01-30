// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Menu } from './Menu';
import { Navbar } from './Navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='*' element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
