import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import people from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(people, applyMiddleware(sagaMiddleware))
export default store

sagaMiddleware.run(mySaga)
