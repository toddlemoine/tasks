import React from 'react';
import Immutable from 'immutable';
import TaskStore from '../../src/stores/TaskStore';

describe('TaskStore', () => {

    beforeEach(() => {
        TaskStore.tasks = Immutable.fromJS({
            '19bd3b7c98c6d9717e955dd885a317db': {
                id: '79bd3b7c98c6d9717e955dd885a317db',
                text: 'Apples',
                status: 0,
                timestamp: Date.now()
            },
            '29bd3b7c98c6d9717e955dd885a317db': {
                id: '29bd3b7c98c6d9717e955dd885a317db',
                text: 'Bananas',
                status: 1,
                timestamp: Date.now()
            },
            '39bd3b7c98c6d9717e955dd885a317db': {
                id: '39bd3b7c98c6d9717e955dd885a317db',
                text: 'Kiwis',
                status: 0,
                timestamp: Date.now()
            }
        });

        TaskStore._resetHistory();
    });

    // Unfortunately, altjs doensn't expose the action listeners
    // as public methods on the store instance it creates, making
    // direct testing difficult.

    // The test stubs below give an idea of what a set of store
    // tests might look like.

    it('should add new tasks', () => {

    });

    it('should save a snapshot to history', () => {

    });

    it('should clear tasks marked done', () => {

    });

    it('should undo the last state', () => {

    });

});
