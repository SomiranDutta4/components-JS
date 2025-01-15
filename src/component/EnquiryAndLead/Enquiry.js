// import React, { useEffect, useState } from 'react'
import dummyData from '../dummyData'

const Enquiry = ({ Index }) => {
    // const [lastIndex, setLastIndex] = useState(3);
    // // const [list,setList]=useState(dummyData.slice(4*Index, lastIndex))
    // useEffect(() => {
    //     Index + 3 > dummyData.length ? setLastIndex(dummyData.length - 1) : setLastIndex(Index + 3)
    // }, [Index])
    return (
        <div className='Leads-container'>
            <div className='nav-Enquiry'>
                <div>
                    <button>
                        Date
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
            </div>
            <div className='Leads'>
                {dummyData.map((contact, index) => (
                    <div key={index} className="contact-item-Enquiry">
                        <p>{contact.name}</p>
                        <p>{contact.phone_number}</p>
                        <p>{contact.email}</p>
                        <p>{contact.company_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Enquiry
