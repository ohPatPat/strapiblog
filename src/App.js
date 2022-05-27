import './App.scss';
import { Footer } from './comp/footer/Footer';
import { Header } from './comp/header/Header';
import { SideNav } from './comp/sideNav/SideNav';
import { Home } from './pages/home/Home';
import { Blogs } from './pages/blogs/Blogs';

import { Red } from './pages/blogs/Red';
import { Blue } from './pages/blogs/Blue';
import { Pink } from './pages/blogs/Pink';


import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route index element={<Home title={"Home"} />} />

          <Route path="/Blogs" element={<Blogs title={"Blogs"} />} />

            <Route path="/Blogs/Red" element={<Red title={"Red"} />} />
            <Route path="/Blogs/Blue" element={<Blue title={"Blue"} />} />
            <Route path="/Blogs/Pink" element={<Pink title={"Pink"} />} />
            <Route path="Red" element={<Red title={"Red"} />} />
            <Route path="Blue" element={<Blue title={"Blue"} />} />
            <Route path="Pink" element={<Pink title={"Pink"} />} />

          <Route path="/About" element={<About title={"About"} />} />
          <Route path="/Contact" element={<Contact title={"Contact"} />} />



        </Routes>
        <SideNav>
        </SideNav>
        <Footer></Footer>
      </div>
    </Router >
  );
}

export default App;
