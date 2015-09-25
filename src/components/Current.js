import React, {PropTypes} from 'react';

import TaskInput from './TaskInput';
import style from "../styles/Current.styl"

var Current = React.createClass({
    propTypes: {

    },

    render() {
        return (
            <div className={style.current}>
                <TaskInput text="" />
            </div>
            );
    }
});

export default Current;
