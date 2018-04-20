import React, { Components } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import imgLunar from '../../assets/images/slider/okruzenje.jpg';

const SliderThree = (props) => {

    let imgB = imgLunar;
    let background = {
        backgroundImage: `url(${imgB})`,
        backgroundSize: 'cover',
        minHeight: '500px',
        backgroundPosition: 'center'
    }

    let title = {
        paddingTop: '150px',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'white'
    }

    let text = {
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'white'
    }
    

    return <div className="slide" style={background}>
        <h1 style={title}>OKRUŽENJE</h1> <br/>
        <p style={text}>Želimo da pružimo mladima okruženje gde će njihov talenat doći do izražaja</p>
        
    </div>
}

export default SliderThree;