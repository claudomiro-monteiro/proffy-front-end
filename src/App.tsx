
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/global.css'
import Routes from './routes';

function App() {
  return (
    <Router>
        <Routes />
    </Router>
  );
}

export default App;
