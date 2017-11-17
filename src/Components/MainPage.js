import React, { Component } from 'react';
import Title from './Title';
import Sidebar from './Sidebar';
import axios from 'axios';
import style from '../style';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
    }

    loadProductsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data })
            })
    }

    componentDidMount() {
        this.loadProductsFromServer();
        // setInterval(this.loadProductsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div style={ style.main }>
                <Title />
                <Sidebar data={ this.state.data }/>
            </div>
        )
    }
}