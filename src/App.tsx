import React from 'react';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types';

import { css } from '@emotion/css';

import Card from './components/Card';

function App() {

  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          setTitle(response.title);
        });
      });
      
  });

  return (
    <div className="App">
      <h2 className={css`
          margin-bottom: 5px;
        `}>
        Chrome Extension Manifest v3 Using React and Typescript
      </h2>
      <Card>
        <h4 className={css`
          margin-bottom: 5px;
        `}>{title}</h4>
        <p>the title of this page contains <b>{title.length}</b> characters</p>

        <p className={css`
          position: absolute;
          font-size: 8px;
          overflow-wrap: break-word;
          bottom: 10px;
        `}>https://github.com/JoseCGDEV/ChromeExtension-v3-usingReact-Typescript</p>
      </Card>
    </div>
  );
}

export default App;
