import React from 'react';
import { render } from 'react-dom';

import { getAppName } from './lib/lib1';
import App from './component/App';

import './index.less';

const appContainer = document.getElementById('app');
const myAppName = getAppName();

render(<App appName={myAppName} />, appContainer);
