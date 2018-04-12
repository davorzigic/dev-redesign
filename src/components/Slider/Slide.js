import React, { Component } from 'react';
import imgBck from 'C:/my-app/src/components/Slider/DavorRome.jpg';

const Slide = (props) => {
   
    let imgB = imgBck;
    // console.log({imgB});
    // const current = props.background[props.current];
    // console.log(current);
      const styles = {
        imageBackground: {
          backgroundImage: `url(${imgB})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }
      }
    
      return (
        <div className="slide" style={styles.imageBackground}>
            test <br/>
            lorem<br/>
            ipsum<br/>
            test <br/>
            lorem<br/>
            ipsum<br/>
            test <br/>
            lorem<br/>
            ipsum<br/>
            test <br/>
            lorem<br/>
            ipsum<br/>
            something
        </div>
      )
    }


export default Slide;