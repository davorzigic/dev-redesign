import React, { Components } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import imgRome from '../../assets/images/slider/upornost.jpg';

const SliderOne = (props) => {

    let imgB = imgRome;
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
        <h1 style={title}>UPORNOST</h1> <br/>
        <p style={text}>Od naših polaznika se očekuje velika posvećenost, želja za učenjem i napredovanjem</p>
        
    </div>
}

export default SliderOne;