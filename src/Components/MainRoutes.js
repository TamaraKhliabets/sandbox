import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import Product from "./Product";

export default class App extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/products' component={ () => (<ProductList data={ this.props.data }/>) }/>
                    <Route path='/products/:_id' component={ ({ match }) => (<Product data={ this.props.data } match={match} />) }/>
                </Switch>
            </main>
        )
    }
}