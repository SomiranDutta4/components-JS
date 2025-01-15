// import React, { useEffect, useState } from 'react'
import dummyData from '../dummyData'
import './EnquiryAndLead.css';

const Lead = ({ Index }) => {
    // const [lastIndex, setLastIndex] = useState(3);
    // // const [list,setList]=useState(dummyData.slice(4*Index, lastIndex))
    // useEffect(() => {
    //     Index + 3 > dummyData.length ? setLastIndex(dummyData.length - 1) : setLastIndex(Index + 3)
    // }, [Index])
    return (
        <div className='Leads-container'>
           <div className='nav-Leads'>
                <div>
                    <button>
                        Name
                    </button>
                </div>
                <div>
                    <button>
                        Phone No
                    </button>
                </div>
                <div>
                    <button>
                        Email
                    </button>
                </div>
                <div>
                    <button>
                        Company
                    </button>
                </div>
                <div>
                    <button>
                        Job Title/Role
                    </button>
                </div>
                <div>
                    <button>
                        Interest
                    </button>
                </div>
                <div>
                    <button>
                        Role
                    </button>
                </div>
            </div>
            <div className='Leads'>
                {dummyData.map((contact, index) => (
                    <div key={index} className="contact-item">
                        <p>{contact.name}</p>
                        <p>{contact.phone_number}</p>
                        <p>{contact.email}</p>
                        <p>{contact.company_name}</p>
                        <p>{contact.role}</p>
                        <p>{contact.interest}</p>
                        <p>{contact.interestRole}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lead
