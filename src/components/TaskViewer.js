import React, {PropTypes} from 'react';
import TaskListItem from './TaskListItem';
import TaskActions from '../actions/TaskActions';
import StatusLabel from './StatusLabel';
import LinkButton from './LinkButton';

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
                <section>
                    <h1>{task.text}</h1>
                    <p>Created on {Date(task.timestamp).toString()}</p>
                    <StatusLabel status={task.status} />
                </section>
                <footer>
                    <LinkButton onClick={TaskActions.routeToList}>
                        &#171; Task List
                    </LinkButton>
                </footer>
            </div>
        );
    }
});

export default TaskViewer;