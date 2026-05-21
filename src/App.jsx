import { Route, Routes, NavLink } from 'react-router';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/ContactUs.jsx';
import Navbar from './Pages/NavBar/NavBar.jsx';
import BiscuitManufacturers from './Pages/Biscuit/BiscuitManufacturers.jsx'
import ConfectionaryManufacturers from './Pages/Confectionary/ConfectionaryManufacturers.jsx'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/biscuit-companies' element={<BiscuitManufacturers />} ></Route>
        <Route path='/confectionary-companies' element={<ConfectionaryManufacturers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );

}

export default App;