import React, { Components } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import imgEgypt from '../../assets/images/slider/timskiDuh.jpg';


const SliderTwo = (props) => {

    let imgB = imgEgypt;
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
        <h1 style={title}>TIMSKI DUH</h1> <br/>
        <p style={text}>Bitan je timski duh i kolaboracija sa drugim učesnicima radi bržeg zajedničkog unapređivanja znanja</p>
    
    
    </div>

}

export default SliderTwo;