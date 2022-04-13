import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducer'

const reducers = combineReducers({
    userLogin: userLoginReducer
})

const user = JSON.parse(localStorage.getItem('userInfo'))

const inititlState = {
    userLogin: { userInfo: user ? user : null },
}

const middleware = [thunk]
const store = createStore(
    reducers,
    inititlState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store