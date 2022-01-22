import './globals.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Models from './pages/Models'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Models} />
      <Route exact path="/model/:id" component={Home} />
    </Router>
  )
}

export default App
