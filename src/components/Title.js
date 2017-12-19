import React, {Component} from 'react';
import '../styles.css';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="titleName">Костыли</div>
        <div className="quote">«Купите себе велосипед. Не пожалеете, если останетесь живы».<br/>
          <div>Марк Твен</div>
        </div>
      </div>
    )
  }
}