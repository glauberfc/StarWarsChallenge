import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './src/components/App'
import { name as appName } from './app.json'
import { store } from './src/store'

// import { NativeModules } from 'react-native'

// if (__DEV__) {
//   NativeModules.DevSettings.setIsDebuggingRemotely(true)
// }

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
