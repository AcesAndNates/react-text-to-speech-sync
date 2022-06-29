import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

import App from './components/App';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App message="React, Bootstrap, and TypeScript Template" />
  </React.StrictMode>
);
