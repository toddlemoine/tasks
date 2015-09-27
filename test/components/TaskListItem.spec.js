import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import TaskListItem from '../../src/components/TaskListItem';
import * as utils from '../utils';
import TestUtils from 'react-addons-test-utils';
import TaskActions from '../../src/actions/TaskActions';

describe('TaskListItem', () => {
    const task = Immutable.Map({
        id: '79bd3b7c98c6d9717e955dd885a317db',
        text: 'Apples',
        status: 0,
        timestamp: Date.now()
    });

    // Adopting a convention that the underscore-component is the shallowRender
    // representation of it.
    const listItemComponent = <TaskListItem task={task} />;
    const _listItemComponent = utils.shallowlyRenderedOutput(listItemComponent);
    var node;

    beforeEach(() => {
        node = TestUtils.renderIntoDocument(listItemComponent);
    });

    afterEach(() => {
        node = null;
    });

    it('should be an LI', () => {
        assert.equal(_listItemComponent.type, 'li');
    });

    it('should contain a reorder icon', () => {
        assert.equal(_listItemComponent.props.children[0].props.children, '::');
    });

    it('should show an item as text when marked done', () => {
        const doneItem = utils.shallowlyRenderedOutput(<TaskListItem task={task.set('status', 1)} />);
        assert.equal(doneItem.props.children[2].type, 'label');
    });

    it('should show an item as input when marked pending', () => {
        assert.equal(_listItemComponent.props.children[2].type, 'input');
    });

    it('should have a link to share or view the task', () => {
        assert.equal(_listItemComponent.props.children[3].type.displayName, 'LinkButton');

        let actionStub = sinon.stub(TaskActions, 'routeToView');
        TestUtils.Simulate.click(ReactDOM.findDOMNode(node.refs.viewLink));
        assert.ok(actionStub.called);
        actionStub.restore();
    });


    it('should update the task text on change', () => {
        let actionStub = sinon.stub(TaskActions, 'update');
        TestUtils.Simulate.change(ReactDOM.findDOMNode(node.refs.text), {
            target: { value: 'Bananas' }
        });
        let updatedTask = actionStub.getCall(0).args[0];
        assert.equal('Bananas', updatedTask.get('text'));
        actionStub.restore();
    });

    it('should update the task status when the checkbox is toggled', () => {
        let actionStub = sinon.stub(TaskActions, 'update');
        TestUtils.Simulate.change(ReactDOM.findDOMNode(node.refs.status));
        let updatedTask = actionStub.getCall(0).args[0];
        assert.equal(1, updatedTask.get('status'));
        actionStub.restore();
    });

});
