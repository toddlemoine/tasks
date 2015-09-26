import React, {PropTypes} from 'react';
import classnames from 'classnames';
import style from '../styles/LinkButton.styl';

var LinkButton = React.createClass({
    render () {
        return (
            <button className={classnames(style.linkButton, this.props.className)} {...this.props}>
                {this.props.children}
            </button>
            )
    }
});

export default LinkButton;