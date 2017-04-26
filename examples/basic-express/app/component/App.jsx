import React from 'react';
import './app.less';


export default function App(props) {
  return (
    <div>
      <h1>{props.appName}</h1>
      <p>Hello i am your react app.</p>
    </div>
  );
}
