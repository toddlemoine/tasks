import React, {PropTypes} from 'react';

var App = React.createClass({

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

export default App;
