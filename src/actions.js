import { put, call } from 'redux-saga/effects'

export const fetchPeople = () => ({ type: 'FETCH_PEOPLE' })

function api(url) {
  /* eslint-disable-next-line */
  return fetch(url).then(res => res.json())
}

export function* fetchStarWarsPeople() {
  try {
    const people = yield call(api, 'https://swapi.co/api/people')

    yield put({ type: 'LOADED_PEOPLE_SUCCESSFULLY', data: people.results })
  } catch (e) {
    // yield put({ type: 'LOAD_PEOPLE_FAILED', message: e.message })
    // console.log(e)
  }
}
