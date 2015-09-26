import React, {PropTypes} from 'react';

import TaskInput from './TaskInput';
import TaskList from './TaskList';
import style from "../styles/Current.styl"

var Current = React.createClass({
    propTypes: {

    },

    render() {
        return (
            <div className={style.current}>
                <TaskInput text="" />
                <TaskList tasks={this.props.tasks} />
            </div>
            );
    }
});

export default Current;
