import React from 'react';
import {Link} from 'react-router';


export default class App extends React.Component {
  render() {
    return(
      <div>
        
        <nav className="navbar navbar-primary">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-primary">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="/">Primary Color</a>
							</div>

							<div className="collapse navbar-collapse" id="example-navbar-primary">
								<ul className="nav navbar-nav navbar-right">
									<li className="active">
                      <Link to="/Content">
  											             <i className="material-icons">explore</i>
  											                        Content

                      </Link>
                  </li>
                  <li className="active">
                      <Link to="/profile">
  											             <i className="material-icons">account_box</i>
  											                        profile
                      </Link>
                  </li>
                  <li className="active">
                      <Link to="/Css">
  											             <i className="material-icons">announcement</i>
  											                        Css
                      </Link>
                  </li>
								</ul>
							</div>
						</div>
					</nav>
          {this.props.children}
      </div>
    )
  }
}
