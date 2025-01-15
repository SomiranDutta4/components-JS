import React, { useState } from 'react';
import './Profile.css';
import { QRCodeSVG } from 'qrcode.react';
import LeadsList from './LeadsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShare } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const [viewAll, setviewAll] = useState(false)
    const viewAllLeads = () => {
        setviewAll(!viewAll)
    }

    return (
        <div style={{width:'100%'}}>
            <div className="profile-container">
                <header className="header">
                    <h1>Home</h1>
                    <p>Welcome to your BondU profile</p>
                </header>
                <div className="profile-content">
                    <div className="left-section">
                        <div className='QrContainer'>
                        <QRCodeSVG value="https://www.google.com" className="qr-code" />
                        <span className='QrText'>company</span>
                        </div>
                        <div className="icon-buttons">
                            <FontAwesomeIcon icon={faDownload} className="icon" />
                            <FontAwesomeIcon icon={faShare} className="icon" />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="profile-completion">
                            <button className='edit-profile'>Edit Profile</button>
                        </div>
                        <div>
                            <button className='preview-button'>Preview in new Tab</button>
                        </div>
                    </div>
                </div>
                <div className='LeadNav'>
                    <h3>Recent Leads</h3>
                    <button style={{ 'cursor': 'pointer', 'border': 'none', 'background': 'transparent', textDecoration: 'underline' }} onClick={viewAllLeads}> view all</button>
                </div>
                <LeadsList viewAll={viewAll}></LeadsList>
            </div>
        </div>
    );
};

export default Profile;