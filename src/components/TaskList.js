import React, {PropTypes} from 'react';
import Slip from 'slipjs';
import TaskActions from '../actions/TaskActions';
import TaskListItem from './TaskListItem';
import StatusBar from './StatusBar';
import {DONE} from '../constants';

import style from '../styles/TaskList.styl';

var TaskList = React.createClass({
    propTypes: {
        tasks: PropTypes.object
    },
    componentDidMount() {
        let list = React.findDOMNode(this.refs.list);
        new Slip(list);
        list.addEventListener('slip:beforewait', (e) => {
            if ( nodeIsDragHandle(e.target) ) e.preventDefault();
        }, false);
        list.addEventListener('slip:reorder', this.handleSlipReorder, false);
        list.addEventListener('slip:beforeswipe', (e => e.preventDefault()), false);
    },

    handleSlipReorder (e) {
        e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
        if ( e.detail.originalIndex == e.detail.spliceIndex) return;
        let reorderedTasks = moveTask(this.props.tasks.toJS(), e.detail.originalIndex, e.detail.spliceIndex);
        TaskActions.reorder(reorderedTasks);
        return false;
    },

    render () {
        let numberDone = this.props.tasks.filter(task => task.get('status') == DONE).size;
        let percentDone = Math.round((numberDone/this.props.tasks.size) * 100);
        return (
            <div className={style.taskList}>
                <StatusBar percentDone={percentDone} />
                <ul ref="list">
                    {this.props.tasks.map((task, index) => <TaskListItem key={index +'.'+ task.get('id')} task={task} />)}
                </ul>
            </div>
        );
    }
});

function nodeIsDragHandle(node) {
    return node.className.indexOf('reorder') > -1;
}

function moveTask(tasks, from, to) {
    tasks.splice(to, 0, tasks.splice(from, 1)[0]);
    return tasks;
}


export default TaskList;