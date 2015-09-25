import React, {PropTypes} from 'react';
import style from "../styles/Header.styl";

var Header = React.createClass({

    handleClick(route) {
        console.log(route);
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