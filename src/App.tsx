import './App.css'
import Editor from './Editor'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
    <>
      <h1>Test</h1>
      <ErrorBoundary>
        <div><Editor/></div>
      </ErrorBoundary>
    </>
  )
}

export default App
