import SideNav from './components/SideNav';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './components/HomePage';
import Popular from './components/Popular';
import  {useState} from 'react';

import './App.css';

function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="App">
        <Popular open={open}/>
      <HomePage open={open}/>
    <SideNav open={open} handleOpen={handleOpen}/>
    <MusicPlayer/>
    </div>
  );
}

export default App;
