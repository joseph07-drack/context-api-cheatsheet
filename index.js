import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';

// importing the Context API provider
import { StateProvider } from './StateProvider';

// importing the reducer and the inital state
import { reducer, initialState } from './reducer'

import App from './App';

ReactDom.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.querySelector('#root')
)

reportWebVitals();