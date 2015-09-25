import React, {PropTypes} from 'react';

import Header from './Header';

var App = React.createClass({

  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

export default App;
