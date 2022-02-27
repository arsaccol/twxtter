import './App.css';
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ProfilePage userId={1}/>
    </div>
  );
}

export default App;
