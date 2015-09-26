import React, {PropTypes} from 'react';
import TaskActions from '../actions/TaskActions';
import style from "../styles/Header.styl";

var Header = React.createClass({

    handleClick(route) {
        TaskActions.routeToList();
    },

    render () {
        return (
            <header className={style.header}>
                <button onClick={() => this.handleClick('current')}>
                    Current
                </button>
            </header>
        );
    }
});

export default Header;