'use strict';

describe('HedeApp', () => {
  let React = require('react/addons');
  let HedeApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    HedeApp = require('components/HedeApp.js');
    component = React.createElement(HedeApp);
  });

  it('should create a new instance of HedeApp', () => {
    expect(component).toBeDefined();
  });
});
