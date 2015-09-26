// TaskService
// -----------
// TaskService is a localStorage interface for persisting tasks.
// By providing a common *Service api, it could easily be swapped
// with a different persistance implementation, such as ajax,
// sessionStorage, or websocket.

// All methods exposed by the TaskService return a promise.

import {NAMESPACE, ERRORS, PENDING} from '../constants';
import Uuid from 'uuid-lib';

// Assuming support for localStorage
const ls = window.localStorage;

function generateTasks() {
  let verbs = ['Fetch', 'Prune', 'Buy', 'Feed', 'Endorse'];
  let quantifier = ['the', 'all the', 'some of the', 'any'];
  let objects = ['groceries', 'clothes', 'kiwis', 'happiness', 'stubble'];
  let tasks = [];
  for (var i=1; i<=5; i++) {
    let v = getRandom(verbs);
    let q = getRandom(quantifier);
    let o = getRandom(objects);
    tasks.push({ id: Uuid.create().value, text: [v,q,o].join(' '), status: PENDING });
  }
  return tasks;
}

// Random part taken shamelessly from MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random.
function getRandom(collection) {
  let min = 0;
  let max = collection.length;
  return collection[Math.floor(Math.random() * (max - min)) + min] ;
}

// Initialize our storage with some sample tasks.
if (!ls.getItem(NAMESPACE)) {
    ls.setItem(NAMESPACE, JSON.stringify(generateTasks()));
}

var TaskService = {

    initialize (tasks = []) {
        return new Promise((resolve, reject) => {
            ls.setItem(NAMESPACE, JSON.stringify(tasks));
            resolve(tasks);
        });
    },

    create (task) {
        return new Promise((resolve, reject) => {

            // Simple valdation check since we are acting the part of an application service.
            if (!isValid(task)) {
                reject(new Error(ERRORS.INVALID_TASK));
            } else {
                // Assign a unique id for each task for easy sharing and look-up,
                // and timestamp for filtering or grouping.
                task.timestamp = Date.now();
                task.id = Uuid.create().value;

                // Persist the task
                let tasks = JSON.parse(ls.getItem(NAMESPACE));
                tasks.push(task);
                ls.setItem(NAMESPACE, JSON.stringify(tasks));

                // And return it for use in the store, just as you would hope a typical
                // CREATE call to return the object created.
                resolve(task);
            }
        });
    },

    update (task) {
        return new Promise((resolve, reject) => {
            if (!isValid(task)) {
                reject(new Error(ERRORS.INVALID_TASK));
            } else {
                // Persist the task by getting the collection, looking up the existing by id,
                // assign new props, and resave collection. Because the existing object in the
                // collection is just reference, we don't have to update the collection itself.
                let tasks = JSON.parse(ls.getItem(NAMESPACE));
                let existing = tasks.find(t => t.id == task.id);
                Object.assign(existing, task);
                ls.setItem(NAMESPACE, JSON.stringify(tasks));
                resolve(task);
            }
        });
    },

    readAll () {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(ls.getItem(NAMESPACE)));
            } catch (e) {
                reject(e);
            }
        });
    }
}

function isValid(task) {
    let isObject = task && typeof task == 'object';
    let keys = isObject && new Set(Object.keys(task));
    return isObject && keys.has('text') && keys.has('status') && !isNaN(task.status);
}


export default TaskService;