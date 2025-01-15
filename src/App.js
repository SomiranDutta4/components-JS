import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EnquiryAndLead from './component/EnquiryAndLead/EnquiryAndLead';
import MainPageProfile from './component/ProfilePage/MainPageProfile';
import SideBar from './component/SideBar';

function App() {
  return (
    <div className='appContainer'>
      <Router>
        <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<MainPageProfile />} />
          <Route path="/enquiryandlead" element={<EnquiryAndLead />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;