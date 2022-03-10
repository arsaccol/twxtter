import './App.css';
import UserProfile from './components/UserProfile'
import AuthContext from './contexts/AuthContext';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <AuthProvider>
        <UserProfile userId={1}/>
      </AuthProvider>

    </div>
  );
}

export default App;
