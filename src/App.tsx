import React,{ useState } from 'react'
import Navigation from './navigation'
import { AuthProvider } from './navigation/AuthContext'
import { LoadingContextProvider } from './components/utils/loadingContext'
import { Provider } from 'react-redux'
import { store } from './store'
import { NotificationTriggerProvider } from './components/utils/notificationTrigger'
function App(): React.JSX.Element {
  return (
    <main>
      <AuthProvider>
        <LoadingContextProvider>
          <NotificationTriggerProvider>
            <Provider store={store}>
              <Navigation />
            </Provider>
          </NotificationTriggerProvider>
        </LoadingContextProvider>
      </AuthProvider>
    </main>
  )
}

export default App
