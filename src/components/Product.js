import React, {Component} from 'react';
import Gallery from './Gallery'
import '../styles.css';

export default class Product extends Component {

  render() {
    const info = this.props.match.params._id;
    const DATA = this.props.products;
    let product = '';
    for (let key in DATA) {
      if (DATA[key]._id === info) {
        product = DATA[key];

      }
    }

    return (
      <div className="product">
        <Gallery picture={product.picture}/>
        <div className="pictureDescription">
          <div className="productName">{product.name}</div>
          <table className="features">
            <tbody>
            <tr>
              <td className="feature">Вес:</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td className="feature">Страна происхожения:</td>
              <td>{product.country_of_origin}</td>
            </tr>
            <tr>
              <td className="feature">Размер упаковки (ДхШхВ):</td>
              <td>{product.dimensions}</td>
            </tr>
            </tbody>
          </table>
          <div className="description">
            <h3 className="definition">Описание</h3>
            <div>{product.description}</div>
          </div>
          <div className="prices">
            <h5>Старая цена: {product.oldprice} {product.currencyId}</h5>
            <h3>Новая цена: {product.price} {product.currencyId}</h3>
          </div>
        </div>
      </div>

    )
  }
}