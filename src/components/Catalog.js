import React, {Component} from 'react';
// import * as types from '../constants/actionsType';
import { setFilter } from '../actions/productActions';
import '../styles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainPage from "./MainPage";

class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <h3>Каталог</h3>
        <MainPage setCurrentFilter={ this.props.setFilter }/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)