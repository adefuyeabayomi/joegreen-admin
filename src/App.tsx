import React,{ useState } from 'react'
import Navigation from './navigation'
import { AuthProvider } from './navigation/AuthContext'
import { LoadingContextProvider } from './components/utils/loadingContext'
function App(): React.JSX.Element {
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
