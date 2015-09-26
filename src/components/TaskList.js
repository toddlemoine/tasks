import React, {PropTypes} from 'react';
import TaskListItem from './TaskListItem';
import StatusBar from './StatusBar';
import {DONE} from '../constants';

import style from '../styles/TaskList.styl';

var TaskList = React.createClass({
    propTypes: {
        tasks: PropTypes.object
    },
    render () {
        let numberDone = this.props.tasks.filter(task => task.get('status') == DONE).size;
        let percentDone = Math.round((numberDone/this.props.tasks.size) * 100);
        return (
            <div className={style.taskList}>
                <StatusBar percentDone={percentDone} />
                <ul>
                    {this.props.tasks.map(task => <TaskListItem key={task.get('id')} task={task} />)}
                </ul>
            </div>
        );
    }
});

export default TaskList;