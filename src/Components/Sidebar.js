import React, {Component} from 'react';
import Menu from "./Menu";
import style from '../style';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadData = this.loadData.bind(this);
        this.handleClickBike = this.handleClickBike.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickProtection = this.handleClickProtection.bind(this);
        this.handleClickRoller = this.handleClickRoller.bind(this);
        this.handleClickScooter = this.handleClickScooter.bind(this);
        this.handleClickSkateboards = this.handleClickSkateboards.bind(this);
        this.handleClickBikeSpareParts = this.handleClickBikeSpareParts.bind(this);
        this.handleClickAccessories = this.handleClickAccessories.bind(this);
        this.handleClickBikeClothes = this.handleClickBikeClothes.bind(this);
        this.handleClickElectricTransport = this.handleClickElectricTransport.bind(this)
    }

    loadData() {
        this.setState({data: this.props.data});
        console.log('hi from sidebar')
    }

    handleClick() {
        this.setState({data: this.props.data})
    }

    handleClickBike() {
        this.setState({data: this.props.data});
        console.log(this.props.data)
    }

    handleClickAccessories() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });

        let indexOfCategory = [ 0, 1, 4, 5, 7, 9, 11, 12, 22, 30, 33, 34, 37 ];

        let accessoryArr = indexOfCategory.map(e => {
           return category[e];
        });

        let filterData = [];

        this.props.data.map(e => {
            if(accessoryArr.indexOf(e.categoryId) !== -1) {
                filterData.push(e);
            }
        });
        console.log(filterData);
        this.setState({data: filterData})
    }

    handleClickBikeSpareParts() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });

        let indexOfCategory = [ 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28 ];

        let accessoryArr = indexOfCategory.map(e => {
            return category[e];
        });

        let filterData = [];

        this.props.data.map(e => {
            if(accessoryArr.indexOf(e.categoryId) !== -1) {
                filterData.push(e);
            }
        });
        console.log(filterData);
        this.setState({data: filterData})
    }

    handleClickBikeClothes() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[31]) {
                return e
            }
        });
        this.setState({data: filterData})
    }

    handleClickProtection() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[32] || e.categoryId === category[35]) {
                return e
            }
        });
        this.setState({data: filterData});
        console.log(category)
    }

    handleClickRoller() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[38]) {
                return e
            }
        });
        this.setState({data: filterData})
    }

    handleClickScooter() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[2]) {
                return e
            }
        });
        this.setState({data: filterData})
    }

    handleClickSkateboards() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[3]) {
                return e
            }
        });
        this.setState({data: filterData})
    }

    handleClickElectricTransport() {
        let product = this.props.data.map(p => {
            return p.categoryId;
        });
        let category = product.filter((e, i, arr) => {
            return arr.indexOf(e) === i
        });
        let filterData = this.props.data.filter(e => {
            if (e.categoryId === category[36]) {
                return e
            }
        });
        this.setState({data: filterData})
    }

    componentDidMount() {
        this.loadData();
        setTimeout(this.loadData, 10000)
    }


    render() {
        return (
            <div>
                <h3>Каталог</h3>
                <div style={ style.page }>
                    <div style={ style.catalog }>
                        <label style={ style.catalogName }>
                            <input
                                style={ style.radio }
                                type='radio'
                                name='catalog'
                                // value={'Все предложения'}
                                onChange={this.handleClick}
                            />{'Все предложения'}
                        </label>
                        <label style={ style.catalogName }>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Велосипеды'
                                onChange={this.handleClickBike}
                            />{'Велосипеды'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Аксессуары'
                                onChange={this.handleClickAccessories}
                            />{'Аксессуары'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Запчасти'
                                onChange={this.handleClickBikeSpareParts}
                            />{'Запчасти'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Одежда'
                                onChange={this.handleClickBikeClothes}
                            />{'Одежда'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Защита'
                                onChange={this.handleClickProtection}
                            />{'Защита'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Ролики'
                                onChange={this.handleClickRoller}
                            />{'Ролики'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Самокаты'
                                onChange={this.handleClickScooter}
                            />{'Самокаты'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Скейтборды и пенни борды'
                                onChange={this.handleClickSkateboards}
                            />{'Скейтборды и пенни борды'}
                        </label>
                        <label>
                            <input
                                style={ style.radio }
                                id='Bike'
                                type='radio'
                                name='catalog'
                                // value='Электротранспорт'
                                onChange={this.handleClickElectricTransport}
                            />{'Электротранспорт'}
                        </label>
                    </div>
                    <Menu data={this.state.data}/>
                </div>
            </div>
        )
    }
}