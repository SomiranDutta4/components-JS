// import React, { useState } from 'react';
// import './EnquiryAndLead.css';
// import Lead from './Lead';
// import Enquiry from './Enquiry';

// const EnquiryAndLead = () => {
//     const [mode, SetMode] = useState(1);
//     // mode 1 for leads and mode 2 for enquiries
//     const TrackerbtnHandler = (num) => {
//         SetMode(num)
//     }
//     const [Index, setIndex] = useState(0);
//     const NextUsersHandler=()=>{
//         setIndex(Index+1)
//     }
//     const PrevUsersHandler=()=>{
//         if(Index>0){
//             setIndex(Index-1)
//         }
//     }
//     // const getNextOnes=()=>{
//     //     startIndex+=6
//     // }
//     return (
//         <div className="enquiry-and-lead-container">
//             <header className="header">
//                 <h1>Enquiry and Lead Management</h1>
//                 <p>See details of your Leads and Enquiry Here</p>
//             </header>
//             <div className="options">
//                 <button onClick={() => { TrackerbtnHandler(1) }} className="option-button">Leads</button>
//                 <button onClick={() => { TrackerbtnHandler(2) }} className="option-button">Enquiries</button>
//             </div>
//             <div className='List-container'>
//                 {/* <div className='List-navbar'>
//                     <input type="text" placeholder="Search" className="search-input" />
//                     <div>
//                         <button style={{'border':'none'}} onClick={PrevUsersHandler} >&lt;</button>
//                         {Index+1}
//                         <button style={{'border':'none'}} onClick={NextUsersHandler}>&gt;</button>
//                     </div>
//                 </div> */}
//                 {mode == 1 &&
//                     <Lead Index={Index}></Lead>
//                 }
//                 {mode == 2 &&
//                     <Enquiry Index={Index}></Enquiry>
//                 }
//             </div>
//         </div>
//     );
// };

// export default EnquiryAndLead;


import React, { useState } from 'react';
import './EnquiryAndLead.css';
import Lead from './Lead';
import Enquiry from './Enquiry';

const EnquiryAndLead = () => {
    const [mode, setMode] = useState(1); // mode 1 for leads and mode 2 for enquiries
    const TrackerbtnHandler = (num) => setMode(num);

    const [Index, setIndex] = useState(0);
    // const NextUsersHandler = () => setIndex(Index + 1);
    // const PrevUsersHandler = () => Index > 0 && setIndex(Index - 1);

    return (
        <div className="enquiry-and-lead-container">
            <header className="header">
                <h1>Enquiry and Lead Management</h1>
                <p>See details of your Leads and Enquiry Here</p>
            </header>
            <div className="options">
                <div className={`halfNavBtn  ${mode === 1 ? 'selected-option' : ''} first`} onClick={() => TrackerbtnHandler(1)}>
                    <button className={`option-button`}>
                        Leads
                    </button>
                </div>
                <div className={`halfNavBtn ${mode === 2 ? 'selected-option' : ''} second`} onClick={() => TrackerbtnHandler(2)}>
                    <button className={`option-button`}>
                        Enquiries
                    </button>
                </div>
            </div>
            <div className="List-container">
                {mode === 1 && <Lead Index={Index} />}
                {mode === 2 && <Enquiry Index={Index} />}
            </div>
        </div>
    );
};

export default EnquiryAndLead;
