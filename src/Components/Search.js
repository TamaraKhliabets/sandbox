import React, { Component } from 'react';
import MainRoutes from "./MainRoutes";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
        this.handleSearch = this.handleSearch.bind(this);
        this.loadProducts = this.loadProducts.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        let searchQuery = e.target.value.toLowerCase();
        let displayedProduct = this.props.data.filter(function(i) {
            let searchValue = i.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        let newData = displayedProduct.slice(0, 20);

        this.setState({ data: newData });
    }

    loadProducts() {
        this.setState({ data: this.props.data.slice(0, 20) });
        console.log('hi from search')
    }

    componentDidMount() {
        // this.loadProducts();
        setInterval(this.loadProducts, 10000)
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Поиск' onChange={this.handleSearch} />
                <MainRoutes data={ this.state.data }/>
            </div>
        )
    }
}