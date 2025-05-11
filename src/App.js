import SideNav from './components/SideNav';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './components/HomePage';
import Popular from './components/Popular';

import './App.css';

function App() {
  return (
    <div className="App">
        <Popular/>
      
      <HomePage/>
    <SideNav/>
    <MusicPlayer/>
    </div>
  );
}

export default App;
