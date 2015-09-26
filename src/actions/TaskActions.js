import alt from '../alt';
import TaskService from '../services/TaskService';
import history from '../history';

class TaskActions {
  addNew (task) {
    TaskService.create(task)
        .then(response => this.dispatch(response))
        .catch(error => this.actions.addNewFailed(error));
  }

  addNewFailed(error) {
    this.dispatch(error);
  }

  update(task) {
    TaskService.update(task.toJS())
        .then(response => this.dispatch(response))
        .catch(error => this.actions.updateFailed(error));
  }

  updateFailed(error) {
    this.dispatch(error);
  }

  archive(task) {
    this.dispatch(task);
  }

  destroy(taskId) {
    this.dispatch(taskId);
  }

  readAll() {
    TaskService.readAll()
        .then(response => this.dispatch(response))
        .catch(error => this.actions.readAllFailed(error));
  }

  readAllFailed (error) {
    this.dispatch(error);
  }

  routeToList () {
    history.pushState(null, '/');
  }

  routeToView (taskId) {
    history.pushState(null, `/view/${taskId}`);
  }

}

module.exports = alt.createActions(TaskActions);