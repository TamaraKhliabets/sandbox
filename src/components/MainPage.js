import React, {Component} from 'react';
import CurrentFilterList from '../containers/CurrentFilterList';
import '../styles.css';
import Sidebar from "./Sidebar";

export default class MainPage extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar/>
        <CurrentFilterList/>
      </div>
    )
  }
}
