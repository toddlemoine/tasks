import Immutable from 'immutable';
import alt from '../alt';
import TaskActions from '../actions/TaskActions';
import {PENDING, DONE} from '../constants';

var history = [];

class TaskStore {
  constructor() {
    this.tasks = Immutable.Map();
    this.errors = Immutable.Map();

    this.bindListeners({
      handleAddNew: TaskActions.ADD_NEW,
      handleAddNewFailed: TaskActions.ADD_NEW_FAILED,
      handleReadAll: TaskActions.READ_ALL,
      handleUpdate: TaskActions.UPDATE,
      handleClearDone: TaskActions.CLEAR_DONE,
      handleUndo: TaskActions.UNDO,
      handleReorder: TaskActions.REORDER,
      // handleToggleHelp: TaskActions.TOGGLE_HELP
    });
  }

  clearErrors () {
    this.errors = this.errors.clear();
  }

  handleReadAll (tasks) {
    let tasksMap = {};
    tasks.forEach(task => tasksMap[task.id] = task);
    this.tasks = Immutable.fromJS(tasksMap);
    this.clearErrors();
  }

  handleAddNew (task) {
      history.push(this.tasks);
      this.tasks = this.tasks.set(task.id, Immutable.Map(task));
      this.clearErrors();
  }

  handleAddNewFailed (error) {
    this.errors = this.errors.set('addNew', error);
  }

  handleUpdate (task) {
    history.push(this.tasks);
    this.tasks = this.tasks.set(task.id, Immutable.Map(task));
    this.clearErrors();
  }

  handleClearDone () {
    history.push(this.tasks);
    this.tasks = this.tasks.filterNot(task => task.get('status') == DONE);
    TaskActions.reset(this.tasks.toList());
  }

  handleUndo () {
    let previous = history.pop();
    previous && TaskActions.reset(previous.toList());
  }

  handleReorder(tasks) {
    history.push(this.tasks);
    this.handleReadAll(tasks);
  }

}

export default alt.createStore(TaskStore, 'TaskStore');