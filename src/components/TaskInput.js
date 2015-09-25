import React, {PropTypes} from 'react';
import style from "../styles/TaskInput.styl"

var TaskInput = React.createClass({

    getInitialState() {
        return { text: this.props.text };
    },

    handleSubmit() {

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