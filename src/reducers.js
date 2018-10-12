import { combineReducers } from 'redux'

const people = (state = [], action) => {
  if (action.type === 'LOADED_PEOPLE_SUCCESSFULLY') {
    return [...action.data]
  }

  return state
}

export default combineReducers({ people })
