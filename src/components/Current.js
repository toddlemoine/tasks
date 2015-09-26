import React, {PropTypes} from 'react';

import TaskInput from './TaskInput';
import TaskList from './TaskList';
import style from "../styles/Current.styl"

var Current = React.createClass({
    propTypes: {

    },

    handleClearDoneClick (e) {
        e.preventDefault();
        TaskActions.clearDone();
    },

    handleUndo (e) {
        e.preventDefault();
        TaskActions.undo();
    },

    render() {
        return (
            <div className={style.current}>
                <h1>Current Tasks</h1>
                <TaskInput text="" />
                <TaskList tasks={this.props.tasks} />
            </div>
            );
    }
});

export default Current;
