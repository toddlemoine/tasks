import Immutable from 'immutable';
import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = Immutable.Map();

    this.bindListeners({
      // handleUpdate: TaskActions.UPDATE,
      // handleAddNew: TaskActions.ADD_NEW,
      // handleDestroy: TaskActions.DESTROY,
      handleReadAll: TaskActions.READ_ALL,
      // handleToggleHelp: TaskActions.TOGGLE_HELP
    });
  }

  handleReadAll(tasks) {
    let tasksMap = {};
    tasks.forEach(task => tasksMap[task.id] = task);
    this.tasks = Immutable.Map(tasksMap);
  }

}

export default alt.createStore(TaskStore, 'TaskStore');