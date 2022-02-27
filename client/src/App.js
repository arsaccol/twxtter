import './App.css';
import ProfileDisplay from './components/ProfilePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ProfileDisplay userId={1}/>
    </div>
  );
}

export default App;
