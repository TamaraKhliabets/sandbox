import React, {Component} from 'react';
import '../styles.css';

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
    this.setState({activeIndex: index})
  }

  goToPrevPicture() {
    let index = this.state.activeIndex;
    let pictures = this.props.picture.split(',');
    let picturesLength = pictures.length;

    if (index < 1) {
      index = picturesLength;
    }
    --index;

    this.setState({activeIndex: index})
  }

  goToNextPicture() {
    let index = this.state.activeIndex;
    let pictures = this.props.picture.split(',');
    let picturesLength = pictures.length - 1;

    if (index === picturesLength) {
      index = -1;
    }
    ++index;

    this.setState({activeIndex: index})
  }


  render() {
    let picture = this.props.picture.split(',').map((e, index) => {
      return (
        <img src={e} alt='page 1' key={index} className="picture"/>
      )
    });
    return (
      <div className="gallery">
        <button onClick={this.goToPrevPicture}
                className="leftArrow">
          &larr;
        </button>
        {picture[this.state.activeIndex]}
        <button onClick={this.goToNextPicture}
                className="rightArrow">
          &rarr;
        </button>
      </div>
    )
  }
}