import { config } from './config'

function App() {
  return (
    <div>
      <div>{config.appEnv}</div>
      <div>{config.baseUrl}</div>
      <div>{config.appAuthor}</div>
    </div>
  )
}

export default App
