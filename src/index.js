import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut';
import Signin from './components/auth/Signin';

const store = createStore(
  reducers,
  {
    auth: { auth: localStorage.getItem('token') },
  },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/signout' element={<SignOut />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
