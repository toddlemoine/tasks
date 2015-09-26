import React, {PropTypes} from 'react';
import TaskListItem from './TaskListItem';
import TaskActions from '../actions/TaskActions';

import style from '../styles/TaskViewer.styl';

var TaskViewer = React.createClass({
    propTypes: {
        task: PropTypes.object
    },
    render () {
        if (!this.props.task) return <div key="taskViewer" />;

        let task = this.props.task.toJS();

        return (
            <div key="taskViewer" className={style.taskViewer}>
                <button onClick={TaskActions.routeToList}>Task List</button>
                <h1>{task.text}</h1>
                <p>Created on {Date(task.timestamp).toString()}</p>
                <p>Status: {task.status}</p>
            </div>
        );
    }
});

export default TaskViewer;