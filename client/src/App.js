import './App.css';
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <UserProfile userId={1}/>
    </div>
  );
}

export default App;
