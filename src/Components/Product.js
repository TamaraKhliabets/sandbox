import React, {Component} from 'react';
import Gallery from './Gallery'
import style from '../style';

export default class Product extends Component {

    render() {
        const info = this.props.match.params._id;
        const DATA = this.props.data;
        let product = '';
        for(let key in DATA) {
            if(DATA[key]._id === info) {
                product = DATA[key];

            }
        }

        return (
            <div style={ style.product } >
                <Gallery picture={product.picture}/>
                <div style={ style.pictureDescription }>
                    <div style={ style.productName }>{product.name}</div>
                    <table style={ style.features }>
                        <tbody>
                        <tr>
                            <td style={ style.feature }>Вес:</td>
                            <td>{product.weight}</td>
                        </tr>
                        <tr>
                            <td style={ style.feature }>Страна происхожения:</td>
                            <td>{product.country_of_origin}</td>
                        </tr>
                        <tr>
                            <td style={ style.feature }>Размер упаковки (ДхШхВ):</td>
                            <td>{product.dimensions}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={ style.description }>
                        <h3 style={ style.definition }>Описание</h3>
                        <div>{product.description}</div>
                    </div>
                    <div style={ style.prices }>
                        <h5>Старая цена: {product.oldprice} {product.currencyId}</h5>
                        <h3>Новая цена: {product.price} {product.currencyId}</h3>
                    </div>
                </div>
            </div>

        )
    }
}