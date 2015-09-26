import React, {PropTypes} from 'react';

import TaskViewer from './TaskViewer';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

var ViewContainer = React.createClass({
    getInitialState () {
        return TaskStore.getState();
    },

    componentDidMount () {
        TaskStore.listen(this.handleStoreChange);
        TaskActions.readAll();
    },

    componentWillUnmount () {
        TaskStore.unlisten(this.handleStoreChange);
    },

    handleStoreChange (state) {
        this.setState(state);
    },

    render() {
        return <TaskViewer task={this.state.tasks.get(this.props.params.id)} />;
    }
});

export default ViewContainer;
