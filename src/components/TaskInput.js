import React, {PropTypes} from 'react';
import TaskActions from '../actions/TaskActions';
import {PENDING} from '../constants';
import style from "../styles/TaskInput.styl"

var TaskInput = React.createClass({

    getInitialState() {
        return { text: this.props.text };
    },

    handleSubmit(e) {
        e.preventDefault();
        TaskActions.addNew({ text: this.state.text, status: PENDING });
        this.setState({text: ''});
    },

    handleInputChange(e) {
        let text = e.currentTarget.value;
        this.setState({ text });
    },

    render () {
        return (
            <form className={style.taskInput}>
                <input type="text"
                    name="task"
                    onChange={this.handleInputChange}
                    value={this.state.text} />
                <button type="submit" onClick={this.handleSubmit}> + </button>
            </form>
        );
    }
});

export default TaskInput;