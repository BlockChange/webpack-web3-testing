import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Web3 from 'web3'
import Pudding from 'ether-pudding'

// Set the provider, as you would normally.
var web3 = new Web3()
Pudding.setWeb3(web3)
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))

// console.log(web3)
const cb = (err, result) => {
  if (err) {
    console.log(err)
  }
  console.log(result)
}
console.log(web3.eth.getAccounts(cb))

import test from './contracts/SimpleStorage.sol'
import {} from './app.css'

console.log(test)

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='/app'>Dashboard</Link></li>
            <li><Link to='/inbox'>Inbox</Link></li>
            <li><Link to='/calendar'>Calendar</Link></li>
          </ul>
        </header>
      </div>
    )
  }
})

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    )
  }
})

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <p>Inbox</p>
      </div>
    )
  }
})

var Calendar = React.createClass({
  render: function () {
    return (
      <div>
        <p>Calendar</p>
      </div>
    )
  }
})

let history = createBrowserHistory()

render((
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path='app' component={Dashboard}/>
      <Route path='inbox' component={Inbox}/>
      <Route path='calendar' component={Calendar}/>
      <Route path='*' component={Dashboard}/>
    </Route>
  </Router>
), document.body)