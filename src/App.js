import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Assignment from './components/Assignment'
import Count from './components/Count'
import Random from './components/Random'
import RandomNumber from './components/randomnumbers'
import { connect } from 'react-redux'
import UserList from './components/UserList'
import UserRemove from './components/UserTableRemove'
import Tasks from './components/Task'
import './App.css'
function App() {
  return (
    <BrowserRouter >
      <div className='App'>
        {/* <h2>hello to redux-app</h2> */}
        <header className="App-header">
          <Link className='App-link' to='/home'>Home</Link>
          <Link className='App-link' to='/assignment'>Assignment</Link>
          <Link className='App-link' to='/task'>Task</Link>
        </header>

        <Route path='/home' component={Home} exact={true} />
        <Route path='/assignment' component={Assignment} exact={true} />
        <Route path='/assignment/counter' component={Count} exact={true} />
        <Route path='/assignment/random' component={Random} exact={true} />
        <Route path='/assignment/rannumber' component={RandomNumber} exact={true} />
        <Route path='/assignment/userlist' component={UserList} exact={true} />
        <Route path='/assignment/userremove' component={UserRemove} exact={true} />
        <Route path='/task' component={Tasks} extact={true}/>
      </div>
    </BrowserRouter>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   }
// }
export default connect()(App)

