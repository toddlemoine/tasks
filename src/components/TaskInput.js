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
        this.setState({text: ''}, () => this._input.focus);
    },

    handleInputChange(e) {
        let text = e.currentTarget.value;
        this.setState({ text });
    },

    render () {
        return (
            <form className={style.taskInput}>
                <div className={style.textGroup}>
                    <input type="text"
                        ref={ component => this._input = component }
                        name="task"
                        onChange={this.handleInputChange}
                        value={this.state.text}
                        maxLength={150}
                        placeholder="What do you need to do today?"
                        />
                    <button type="submit" onClick={this.handleSubmit}> + </button>
                </div>
            </form>
        );
    }
});

export default TaskInput;