import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { Provider } from 'react-redux'
import store from './redux/store'
import User from './components/User'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/users' element={<User />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
