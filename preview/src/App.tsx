import React from 'react'

import ReactBackgroundFading from 'react-backgroud-fading'
import 'react-backgroud-fading/dist/index.css'

const App = () => {
  return <div style={{
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <div>
      <ReactBackgroundFading height={500} width={1000} transitionTiming={5} fullAsScreen={true} children={
        <div style={{ margin: 0, padding: 0, display: 'flex' }}>
          <h1>Hello from <a href={"https://github.com/lyhourchhen"}>ME</a> :D</h1>
        </div>
      }/>
    </div>
  </div>
}

export default App
