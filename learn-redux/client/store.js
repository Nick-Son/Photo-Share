import { createStore, compose } from 'redux'
// Connects redux with react-router
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Import the root reducer
import rootReducer from './reducers/index'

// Import data
import comments from './data/comments'
import posts from './data/posts'

// Create an object for the default data
const defaultstate = {
	posts,
	comments
}

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

// createStore() requires 2 things; how we will interface with the store, and the default state
const store = createStore(rootReducer, defaultstate, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default
		store.replaceReducer(nextRootReducer)
	})
}

export default store