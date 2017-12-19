import React, {Component} from 'react';
import FilterLink from '../containers/FilterLink';
import filters from '../constants/filters';
import '../styles.css';

export default class Bar extends Component {
  render() {
    let allFilters = filters.map((e, i) => {
      return (
        <li key={i}>
          <FilterLink key={i} filter={e.type}>{e.title}</FilterLink>
        </li>
      )
    });
    return (
      <div className="catalog">
        <div className="catalogName">Каталог</div>
        <ul className="catalogItem">
          {allFilters}
        </ul>
      </div>
    )
  }
}