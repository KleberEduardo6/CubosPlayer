import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import Footer from './components/Footer';
import { useState , useRef} from 'react';
import { musics } from './musics';

function App() {
  
  const [findIndex, setFindIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  
  function IndexMusic  (urlMusic) {
    const index = musics.findIndex((music) => music.url === urlMusic)
    setFindIndex(index)
    setPlaying(true)
  }  
 

  return (
    <div className="container">
      <Header />
      <Main IndexMusic={IndexMusic}/>   
      <Footer  
        findIndex = {findIndex}
        setFindIndex = {setFindIndex}
        playing = {playing}
        setPlaying = {setPlaying}
      />
    </div>
  );
}

export default App; 
