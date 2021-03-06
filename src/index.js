import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Router} from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');


ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
registerServiceWorker();
