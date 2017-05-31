import React from 'react';
import ReactDOM from 'react-dom';
import Network from './Network';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Network />, document.getElementById('root'));
registerServiceWorker();
