import React from 'react';
import ReactDOM from 'react-dom';

import {
  firebaseAppConfig,
  resumeConfig
} from './config';
import Firebase from './firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const firebase = new Firebase({
  firebaseAppConfig,
  resumeConfig
});

ReactDOM.render( < App firebase = {
      firebase
    }
    />, document.getElementById('root'));
    registerServiceWorker();