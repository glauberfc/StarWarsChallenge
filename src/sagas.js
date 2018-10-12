import { takeLatest } from 'redux-saga/effects'
import { fetchStarWarsPeople } from './actions'

function* mySaga() {
  yield takeLatest('FETCH_PEOPLE', fetchStarWarsPeople)
}

export default mySaga
