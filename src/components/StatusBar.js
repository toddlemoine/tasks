import React, {PropTypes} from 'react';
import style from '../styles/StatusBar.styl';

var StatusBar = React.createClass({
    propTypes: {
        percentDone: PropTypes.number
    },
    render () {
        let bgColor = this.props.percentDone == null ?
            {backgroundColor: '#ddd'} :
            {backgroundColor: `hsl(${this.props.percentDone}, 85%, 50%)`};
        return <div className={style.statusBar} style={bgColor} />;
    }
});

export default StatusBar;