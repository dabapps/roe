import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const app = document.createElement('div');
app.className = 'app';

document.body.appendChild(app);

ReactDOM.render(<App />, app);
