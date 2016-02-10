jest.dontMock(
  '../../app/assets/javascripts/components/CheckboxWithLabel.js.jsx'
);

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require(
  '../../app/assets/javascripts/components/CheckboxWithLabel.js.jsx'
);

describe('CheckboxWithLabel', function() {

  beforeEach(function() {
    this.checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel onLabel="On" offLabel="Off" />
    );

    this.checkboxNode = ReactDOM.findDOMNode(this.checkbox);
  })

  it('is On by default', function() {
    expect(this.checkboxNode.textContent).toEqual('On');
  });

  it('changes the text after a click', function() {
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(this.checkbox, 'input')
    );
    expect(this.checkboxNode.textContent).toEqual('Off');
  });

});