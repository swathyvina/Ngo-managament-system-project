import UserPage from './userpage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <UserPage />
        
      </div>
    </Router>
  );
}

export default App;
