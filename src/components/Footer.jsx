import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
          <div className="container">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="/">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright pull-right">
              © 2016, made with <i className="material-icons">favorite</i> by TT Team.
            </div>
          </div>
        </footer>
    )
  }
}
