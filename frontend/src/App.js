import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App(){
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/">
            <h1>Welcome to Connectify</h1>
          </Route>
        </switch>
      </div>
    </Router>
  )
}

export default App