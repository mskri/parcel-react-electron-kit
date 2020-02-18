import { hot } from 'react-hot-loader';
import React from 'react';

const App = () => {
    return (
        <div>
            <h1>parcel-react-electron-kit</h1>
            We are using Node.js <span id="node-version"></span>, Chromium
            <span id="chrome-version"></span>, and Electron <span id="electron-version"></span>.
        </div>
    );
};

export default hot(module)(App);
