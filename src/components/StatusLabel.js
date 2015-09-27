import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {PENDING, DONE} from '../constants';

import style from '../styles/StatusLabel.styl';

var StatusLabel = React.createClass({
    propTypes: {
        status: PropTypes.number
    },
    render () {
        let text = this.props.status == PENDING ? 'Pending' : 'Done';
        let classes = classnames(style.statusLabel, style['status-'+ this.props.status]);
        return <div className={classes}>{text}</div>;
    }
});

export default StatusLabel;