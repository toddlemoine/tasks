import React, {PropTypes} from 'react';
import classnames from 'classnames';
import TaskActions from '../actions/TaskActions';
import LinkButton from './LinkButton';
import {DONE, PENDING} from '../constants';

import style from '../styles/TaskList.styl';
import linkIntactIcon from '../images/link-intact.svg';

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
                ref="text"
                type="text"
                name="text"
                value={this.props.task.get('text')}
                onChange={this.handleTextChange} />
            );

        if (isDone) {
            item = <label>{this.props.task.get('text')}</label>;
        }

        return (
            <li className={classnames(style.task, { [style.done]: isDone })}>
                <span className={style.reorder}>::</span>
                <input
                    ref="status"
                    name={this.props.task.get('id')}
                    type="checkbox"
                    checked={isDone}
                    onChange={this.handleStatusChange}
                    />
                {item}
                <LinkButton ref="viewLink" onClick={this.handleViewClick}>
                    <img src={linkIntactIcon} alt="View or share this task" />
                </LinkButton>
            </li>
        );
    }
});

export default TaskListItem;