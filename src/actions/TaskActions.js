import alt from '../alt';
import TaskService from '../services/TaskService';

class TaskActions {
  addNew (task) {
    TaskService.create(task)
        .then(this.dispatch)
        .catch(this.dispatch);
  }

  update(task) {
    this.dispatch(task);
  }

  archive(task) {
    this.dispatch(task);
  }

  destroy(taskId) {
    this.dispatch(taskId);
  }

  readAll() {
    TaskService.readAll()
        .then(this.dispatch)
        .catch(this.dispatch);

  }

}

module.exports = alt.createActions(TaskActions);