import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import Footer from './components/Footer';
import { useState , useRef} from 'react';
import { musics } from './musics';

function App() {
  const audioRef = useRef(null);
  const [findIndex, setFindIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  function IndexMusic  (urlMusic) {
    const index = musics.findIndex((music) => music.url === urlMusic)
    setFindIndex(index)
    setPlaying(true)
  }  
  function handleNext() {
    const nextIndex = (( findIndex + 1) % musics.length);
    setFindIndex(nextIndex);
    setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
    }, 1);
  }
  function handlePrevious() {
    const previousIndex = ((findIndex - 1 + musics.length) % musics.length )
    setFindIndex(previousIndex);
    setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
    }, 1);
  }

  return (
    <div className="container">
      <Header />
      <Main IndexMusic={IndexMusic}/>   
      <Footer  
        findIndex = {findIndex}  
        handleNext={handleNext}  
        handlePrevious = {handlePrevious} 
        audioRef={audioRef} playing={playing} 
        setPlaying={setPlaying}
      />
    </div>
  );
}

export default App; 
