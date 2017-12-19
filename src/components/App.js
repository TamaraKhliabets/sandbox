import React, {Component} from 'react';
import Title from './Title';
// import Sidebar from "./Sidebar";
import Bar from './Bar';
import CurrentFilterList from '../containers/CurrentFilterList';
import Footer from './Footer';
import '../styles.css';

export default class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="main">
          <Title/>
          <div className="page">
            {/*<Sidebar/>*/}
            <Bar/>
            <CurrentFilterList/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}