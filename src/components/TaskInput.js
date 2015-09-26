import React, {PropTypes} from 'react';
import TaskActions from '../actions/TaskActions';
import {PENDING} from '../constants';
import style from "../styles/TaskInput.styl"

var TaskInput = React.createClass({

    getInitialState() {
        return { text: this.props.text };
    },

    componentDidMount() {
        this._input.focus();
    },

    handleSubmit(e) {
        e.preventDefault();
        TaskActions.addNew({ text: this.state.text, status: PENDING });
        this.setState({text: ''}, this._input.focus);
    },

    handleInputChange(e) {
        let text = e.currentTarget.value;
        this.setState({ text });
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
        return (
            <form className={style.taskInput}>
                <input type="text"
                    ref={ component => this._input = component }
                    name="task"
                    onChange={this.handleInputChange}
                    value={this.state.text} />
                <button type="submit" onClick={this.handleSubmit}> + </button>
                <button onClick={this.handleClearDoneClick}>Clear Done</button>
                <button onClick={this.handleUndo}>Undo</button>
            </form>
        );
    }
});

export default TaskInput;