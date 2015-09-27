import React from 'react';
import Uuid from 'uuid-lib';
import TaskService from '../../src/services/TaskService';
import {ERRORS} from '../../src/constants';

describe('TaskService', () => {

    describe('create', () => {

        it('should return a promise', () => {
            assert.instanceOf(TaskService.create(), Promise);
        });

        it('should validate input before saving', done => {
            let invalidInput = null;
            TaskService
                .create(invalidInput)
                .catch(error => {
                    assert.instanceOf(error, Error);
                    assert.equal(error.message, ERRORS.INVALID_TASK);
                    done();
                });
        });

        it('should return a task with id and timestamp', done => {
            let task = { text: 'foo', status: 0 };
            TaskService.create(task)
                .then(savedTask => {
                    assert.ok(Uuid.isUuid(savedTask.id));
                    assert.ok(savedTask.timestamp);
                    done();
                });
        })
    });

    describe('readAll', () => {
        it('should return a promise', () => {
            assert.instanceOf(TaskService.create(), Promise);
        });

        it('should resolve to an array', done => {
            TaskService
                .readAll()
                .then(tasks => {
                    assert.ok(Array.isArray(tasks));
                    done();
                });
        });
    })

});
