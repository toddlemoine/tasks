import React, {PropTypes} from 'react';

import Current from './Current';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

var CurrentContainer = React.createClass({
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
        return <Current tasks={this.state.tasks.toList()} />;
    }
});

export default CurrentContainer;
