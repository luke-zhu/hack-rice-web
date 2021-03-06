import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import './main.html';
import '../imports/ui/style.css';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
