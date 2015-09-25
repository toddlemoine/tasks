import React, {PropTypes} from 'react';
import classnames from 'classnames';

import {DONE} from '../constants';

var TaskListItem = React.createClass({

    handleTextChange(e) {
        console.log('text', e.target.value);
    },

    render () {
        let isDone = this.props.status == DONE;
        let item = (
            <input
                type="text"
                name="text"
                value={this.props.task.get('text')}
                onChange={this.handleTextChange} />
            );

        if (isDone) {
            item = <label>this.props.task.get('text')</label>;
        }

        return (
            <li className={classnames("task", { done: isDone })}>
                <input
                    name={this.props.task.get('id')}
                    type="checkbox"
                    checked={!!this.props.task.get('status')}/>
                {item}
            </li>
        );
    }
});

export default TaskListItem;