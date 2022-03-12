import './App.css';
import { AuthProvider } from './contexts/AuthContext'

import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <nav>
        Hello this is nav
      </nav>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>

    </div>
  );
}

export default App;
