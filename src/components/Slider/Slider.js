import React, { Component } from 'react';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';
import SliderThree from './SliderThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Slide from './Slide';
import SlideTwo from './AnotherSlide';
// import imgRome from 'C:/my-app/src/components/Slider/DavorRome.jpg';
// import imgEgypt from 'C:/my-app/src/components/Slider/DavorEgipat.jpg';
// import imgLunar from 'C:/my-app/src/components/Slider/lunar.jpg';
import imgT from 'C:/my-app/src/assets/images/members/test.jpg';
import styles from './style.scss';
require('./style.scss');

export default class Slider extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// background: [imgEgypt, imgRome, imgT],
			slideCount: 1
		}

		this.nextSlide = this.nextSlide.bind(this);
    	this.previousSlide = this.previousSlide.bind(this);

	}

	render() {
		// let testCss = imgT;

		return (
			<div className={"slider"}>
				{/* There are no more individual slides, you only need one Slide Component */}
				{/* <Slide background={this.state.background} current={1} /> */}
				{/* <Slide /> */}
				{/* <SlideTwo background={this.state.background} current={0} /> */}

				{ this.state.slideCount === 1 ? <SliderOne /> : null }
				{ this.state.slideCount === 2 ? <SliderTwo /> : null }
				{ this.state.slideCount === 3 ? <SliderThree /> : null }
				
				{/* Arrow Functionality */}
				<RightArrow nextSlide={this.nextSlide} />
				<LeftArrow previousSlide={this.previousSlide} />
			
			</div>
		);
	}


	nextSlide() {

		if(this.state.slideCount >= 3) {
			this.setState({ slideCount: this.state.slideCount = 1 })
		} else {
			this.setState({ slideCount: this.state.slideCount + 1 })
		}
	}

	previousSlide() {

		if(this.state.slideCount === 1) {
			this.setState({ slideCount: this.state.slideCount = 3 })
		} else {
			this.setState({ slideCount: this.state.slideCount - 1 })
		}
	}
}


