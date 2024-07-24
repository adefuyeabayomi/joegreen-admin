import React,{ useState } from 'react'
import Navigation from './navigation'
import { AuthProvider } from './navigation/AuthContext'
import { LoadingContextProvider } from './components/utils/loadingContext'
import AuthService from 'joegreen-service-library'
function App(): React.JSX.Element {
  console.log(AuthService)
  return (
    <main>
      <AuthProvider>
        <LoadingContextProvider>
          <Navigation />
        </LoadingContextProvider>
      </AuthProvider>
    </main>
  )
}

export default App
