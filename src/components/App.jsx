import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import {Link} from 'react-router';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <Link to="/"><span>Home</span></Link><br/>
        <Link to="/header"><span>header</span></Link><br/>
        <Link to="/content"><span>content</span></Link><br/>
        <Link to="/footer"><span>footer</span></Link>
          {this.props.children}
      </div>
    )
  }
}
