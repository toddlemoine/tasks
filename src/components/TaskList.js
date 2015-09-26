import React, {PropTypes} from 'react';
import TaskListItem from './TaskListItem'

import style from '../styles/TaskList.styl';

var TaskList = React.createClass({
    propTypes: {
        tasks: PropTypes.object
    },
    render () {
        return (
            <ul className={style.taskList}>
                {this.props.tasks.map(task => <TaskListItem key={task.get('id')} task={task} />)}
            </ul>
        );
    }
});

export default TaskList;