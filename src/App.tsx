import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';
import { GlobalContext, globalState } from './store/useGlobal';
// import './index.css';

function App() {
    return (
        <GlobalContext.Provider value={globalState}>
            <AppRouter />
        </GlobalContext.Provider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
