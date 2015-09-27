import React from 'react';
import Immutable from 'immutable';
import TaskListItem from '../../src/components/TaskListItem';
import * as utils from '../utils';
import TestUtils from 'react-addons-test-utils';

describe('TaskListItem', () => {

    const task = Immutable.Map({
        id: '79bd3b7c98c6d9717e955dd885a317db',
        text: 'Apples',
        status: 0,
        timestamp: Date.now()
    });

    const component = utils.shallowlyRenderedOutput(<TaskListItem task={task} />);

    it('should be an LI', () => {
        assert.equal(component.type, 'li');
    });

    it('should contain a reorder icon', () => {
      // expect(typeof TestUtils.isElementOfType(component.props.children) !== 'undefined').to.be.true;

    });

    it('should show an item as text when marked done', () => {

    });

    it('should show an item as input when marked pending', () => {

    });

    it('should have a link to share or view the task', () => {

    });

    it('should update the task text on change', () => {

    });

    it('should update the task status when the checkbox is toggled', () => {

    });

});
