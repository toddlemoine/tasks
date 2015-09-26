import React, {PropTypes} from 'react';
import Slip from 'slipjs';
import TaskActions from '../actions/TaskActions';
import LinkButton from './LinkButton';
import TaskListItem from './TaskListItem';
import StatusBar from './StatusBar';
import {DONE} from '../constants';

import actionUndoIcon from '../images/action-undo.svg';
import taskIcon from '../images/task.svg';
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

    handleClearDoneClick (e) {
        e.preventDefault();
        TaskActions.clearDone();
    },

    handleUndo (e) {
        e.preventDefault();
        TaskActions.undo();
    },

    render () {
        let numberDone = this.props.tasks.filter(task => task.get('status') == DONE).size;
        let percentDone = Math.round((numberDone/this.props.tasks.size) * 100);
        let items;

        if (this.props.tasks.size == 0 ) {
            items = <li className={style.allDone}>Now, just look at that. You're all done!</li>
        } else {
            items = this.props.tasks.map((task, index) => <TaskListItem key={index +'.'+ task.get('id')} task={task} />)
        }

        return (
            <div className={style.taskList}>
                <StatusBar percentDone={percentDone} />
                <div className={style.actionGroup}>
                    <LinkButton onClick={this.handleClearDoneClick}
                        disabled={this.props.tasks.size == 0 || numberDone == 0}>
                        <img src={taskIcon} alt="Permanently remove `done` items from your list." />
                        Sweep all done
                    </LinkButton>
                    <LinkButton onClick={this.handleUndo}>
                        <img src={actionUndoIcon} alt="Undo last action"/>
                        Undo
                    </LinkButton>
                </div>
                <ul ref="list">
                    {items}
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