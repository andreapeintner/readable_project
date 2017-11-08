import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store, { history } from './store'

import css from './styles/style.styl'

import App from './components/App'
import Single from './components/Single'
import Grid from './components/Grid'
import Category from './components/Category'
import CategoryList from './components/CategoryList'
import SortTool from './components/SortTool'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Grid}></IndexRoute>
                <Route path="categoryList" component={CategoryList}></Route>
                <Route path="sortTool" component={SortTool}></Route>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
            <Route path="/category" component={Category}></Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))

