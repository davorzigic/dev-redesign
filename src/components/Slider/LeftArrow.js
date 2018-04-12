// import React, { Component } from 'react';

// const LeftArrow = (props) => {
//     return (
//       <div onClick={props.previousSlide} className="left-arrow">
//         <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }

// export default LeftArrow;

import React from 'react'
import leftAr from 'C:/my-app/src/assets/images/slider-left-arrow.svg';


// const LeftArrow = ({ prevSlide }) => {
//   return (
//     <div className={'left-arrow'} onClick={prevSlide}>
//       <img src={leftAr} />
//     </div>
//   )
  
// }
let styleArrow = {
  height: '50px',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f9f9f9',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'transform ease-in .1s',
  position: 'absolute',
  top: '40%',
  left: '25px',
  zIndex: '999',
  color: '#fff'
}

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} style={styleArrow}>
      <img src={leftAr} />
    </div>
  );
}


export default LeftArrow;