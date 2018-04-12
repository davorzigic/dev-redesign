import React, { Component } from 'react';

const SlideTwo = (props) => {
    const current = props.background[props.current];
    console.log(current);
    const styles = {
        imageBackground: {
        backgroundImage: `url(${current})`,
        backgroundSize: '500px',
        backgroundPosition: 'center center'
        }
        
    }
    console.log(styles.imageBackground.backgroundImage);
    

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


export default SlideTwo;