import React, { Component } from 'react';
import style from '../style';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.goToPicture = this.goToPicture.bind(this);
        this.goToPrevPicture = this.goToPrevPicture.bind(this);
        this.goToNextPicture = this.goToNextPicture.bind(this);
    }

    goToPicture(index) {
        this.setState({ activeIndex: index })
    }

    goToPrevPicture() {
        let index = this.state.activeIndex;
        let pictures = this.props.picture.split(',');
        let picturesLength = pictures.length;

        if ( index < 1) {
            index = picturesLength;
        }
        --index;

        this.setState({activeIndex: index})
    }

    goToNextPicture() {
        let index = this.state.activeIndex;
        let pictures = this.props.picture.split(',');
        let picturesLength = pictures.length - 1;

        if ( index === picturesLength ) {
            index = -1;
        }
        ++index;

        this.setState({activeIndex: index})
    }



    render() {
        let picture = this.props.picture.split(',').map((e, index) => {
            return (
                <img src={e} alt='page 1' key={index} style={ style.picture }/>
            )
        });
        return (
            <div style={ style.gallery }>
                <button onClick={this.goToPrevPicture}
                        style={ style.leftArrow }>
                    prev
                </button>
                {picture[this.state.activeIndex]}
                <button onClick={this.goToNextPicture}
                        style={ style.rightArrow }>
                    next
                </button>
            </div>
        )
    }
}