import Immutable from 'immutable';
import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = Immutable.Map();
    this.errors = Immutable.Map();

    this.bindListeners({
      handleAddNew: TaskActions.ADD_NEW,
      handleAddNewFailed: TaskActions.ADD_NEW_FAILED,
      handleReadAll: TaskActions.READ_ALL,
      handleUpdate: TaskActions.UPDATE,
      // handleDestroy: TaskActions.DESTROY,
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
      this.tasks = this.tasks.set(task.id, Immutable.Map(task));
      this.clearErrors();
  }

  handleAddNewFailed (error) {
    this.errors = this.errors.set('addNew', error);
  }

  handleUpdate (task) {
    this.tasks = this.tasks.set(task.id, Immutable.Map(task));
    this.clearErrors();
  }

}

export default alt.createStore(TaskStore, 'TaskStore');