import SideNav from './components/SideNav';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './components/HomePage';
import Popular from './components/Popular';
import  {useState} from 'react';
import ThemeProvider from './components/ThemeProvider'; // adjust path
import { useContext } from 'react';
import ThemeContext from './components/ThemeContext';


  
 
  
function App() {
  const theme = useContext(ThemeContext);

  const [open, setOpen] = useState(true);
 const handleOpen = () => setOpen(!open);
  return (
    <ThemeProvider>
   <div className={theme === 'light' ? 'bg-green-400' : 'bg-pink-600'}>
          <Popular open={open}/>
           <HomePage open={open}/>
          <SideNav open={open} handleOpen={handleOpen}/>
          <MusicPlayer/> 
        </div>
    </ThemeProvider>
  );
}
export default App;
