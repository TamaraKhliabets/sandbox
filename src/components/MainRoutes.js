import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import Product from "./Product";

export default class MainRoutes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/products' component={ () => (<ProductList products={ this.props.products }/>) }/>
                    <Route path='/products/:_id' component={ ({ match }) => (<Product products={ this.props.products } match={match} />) }/>
                </Switch>
            </main>
        )
    }
}