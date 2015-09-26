import React, {PropTypes} from 'react';

import Current from './Current';
import TaskStore from '../stores/TaskStore';

var CurrentContainer = React.createClass({
    getInitialState () {
        return TaskStore.getState();
    },

    componentDidMount () {
        TaskStore.listen(this.handleStoreChange);
    },

    componentWillUnmount () {
        TaskStore.unlisten(this.handleStoreChange);
    },

    handleStoreChange (tasks) {
        this.setState(tasks);
    },

    render() {
        return <Current tasks={this.state.tasks} />;
    }
});

export default CurrentContainer;
