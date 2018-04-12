import React from 'react'
import rightAr from 'C:/my-app/src/assets/images/slider-right-arrow.svg';
import stylesCss from './style.scss';
require('./style.scss');


// const RightArrow = ({ nextSlide, coolButtons }) => {
//   return (
//     <div className={coolButtons ? 'right-arrow cool-buttons' : 'right-arrow'} onClick={nextSlide}>
//       <img src={rightAr} />

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
  right: '25px',
  zIndex: '999',
  color: '#fff'
}

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} style={styleArrow}>
      <img src={rightAr} />
    </div>
  );
}

export default RightArrow