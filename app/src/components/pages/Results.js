// import React from 'react';
// import './Results.css';

// function Results({data}) {
//     console.log(data);
//     return (
//         <div>
//             <h1 className="">LIST OF AVAILABLE HOSPITALS</h1>
//             <h2>{data.hospitals.hospital[0].name}</h2>
//             <h2>{data.hospitals.hospital[1].name}</h2>
//             <h2>{data.hospitals.hospital[2].name}</h2>
//             <h2>{data.hospitals.hospital[3].name}</h2>
//             <h2>{data.hospitals.hospital[4].name}</h2>
//             <h2>{data.hospitals.hospital[5].name}</h2>
//         </div>
//     )
// }

// export default Results;


import React from 'react';
import '../../App.css';
// import { Button } from './Button';
import './Results.css';
import { useHistory } from 'react-router-dom';

function Results({data}) {
  const history = useHistory();
  return (
    <div className='hero-container'>
      <img src='/images/blue.webp' />
      <h1 className="">LIST OF AVAILABLE HOSPITALS</h1>
            <p>{data.hospitals.hospital[0].name}</p>
            <p>{data.hospitals.hospital[1].name}</p>
            <p>{data.hospitals.hospital[2].name}</p>
            <p>{data.hospitals.hospital[3].name}</p>
            <p>{data.hospitals.hospital[4].name}</p>
            <p>{data.hospitals.hospital[5].name}</p>
    </div>
  );
}

export default Results;