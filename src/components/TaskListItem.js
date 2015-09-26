import React, {PropTypes} from 'react';
import classnames from 'classnames';
import TaskActions from '../actions/TaskActions';
import {DONE, PENDING} from '../constants';

var TaskListItem = React.createClass({

    handleTextChange(e) {
        TaskActions.update(this.props.task.set('text', e.target.value));
    },

    handleStatusChange (e) {
        // Toggle our status
        let status = this.props.task.get('status') == DONE ? PENDING : DONE;
        TaskActions.update(this.props.task.set('status', status));
    },

    handleViewClick () {
        TaskActions.routeToView(this.props.task.get('id'));
    },

    render () {
        let isDone = this.props.task.get('status') == DONE;
        let item = (
            <input
                type="text"
                name="text"
                value={this.props.task.get('text')}
                onChange={this.handleTextChange} />
            );

        if (isDone) {
            item = <label>{this.props.task.get('text')}</label>;
        }

        return (
            <li className={classnames("task", { done: isDone })}>
                <span className="reorder">===</span>
                <input
                    name={this.props.task.get('id')}
                    type="checkbox"
                    checked={isDone}
                    onChange={this.handleStatusChange}
                    />
                {item}
                <button onClick={this.handleViewClick}>
                    View
                </button>
            </li>
        );
    }
});

export default TaskListItem;