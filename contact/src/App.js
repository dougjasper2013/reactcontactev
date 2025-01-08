import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateContact from './components/CreateContact';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ContactList />} />
          <Route path={"/create-contact"} element={<CreateContact />} />
          <Route path={"/contact/:id"} element={<Contact />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
