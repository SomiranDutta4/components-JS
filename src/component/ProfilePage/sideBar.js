// SideBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ }) => {
    return (
        <div className="sideBar">
            <h1>BondU</h1>
            <ul className="sideBar__menu">
                <li>
                    <Link className='sideBarLinks' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='sideBarLinks' to='/enquiryandlead'>Enquiry and lead</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
