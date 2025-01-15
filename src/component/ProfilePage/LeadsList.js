import React, { useEffect, useState } from 'react';
import dummyData from '../dummyData';
import './Profile.css';

const LeadsList = ({ viewAll }) => {
    const [List, setList] = useState(dummyData)

    useEffect(() => {
        if (viewAll === false) {
            setList(dummyData.slice(0, 4))
        } else {
            setList(dummyData)
        }
    }, [viewAll])
    return (
        <div className="leads-list">
            <div className="nav-options">
                <div className='nav-divs-Leads'>
                    <button>Name</button>
                </div>
                <div className='nav-divs-Leads'>
                    <button>Phone no</button>
                </div>
                <div className='nav-divs-Leads'>
                    <button>Company</button>
                </div>
                <div className='nav-divs-Leads'>
                    <button>Interest</button>
                </div>
            </div>
            <div className="contacts-container">
                {List.map((contact, index) => (
                    <div key={index} className="contact-item-Leads">
                        <div>
                            <p>{contact.name}</p>
                        </div>
                        <div>
                            <p>{contact.phone_number}</p>
                        </div>
                        <div>
                            <p>{contact.company_name}</p>
                        </div>
                        <div>
                            <p>{contact.interest}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeadsList;