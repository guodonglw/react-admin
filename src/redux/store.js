import {createStore, combineReducers} from 'redux'
import SideBar from './SideBar.js'
import App from './App.js'

const initState = {
  SideBar: SideBar.initState,
  App: App.initState
}

const reducers = {
  SideBar: SideBar.reducer,
  App: App.reducer
}

// 组合最终的store
const store = createStore(combineReducers(reducers), initState)

export default store