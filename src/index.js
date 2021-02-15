import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './root'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  global.document.getElementById('root'),
)

serviceWorker.unregister()
