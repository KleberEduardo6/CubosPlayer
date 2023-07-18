import './styles.css'
import PlayerMusic from '../PlayerMusic'
import { musics } from '../../musics';

export default function Footer ({findIndex, handlePlayPause, handleNext, handlePrevious, audioRef, playing, setPlaying}){
 
    return(
        <footer>
          <div className='titleandArtist'>
            <h2>{findIndex >= 0 && musics[findIndex].title}</h2>
            <strong>{findIndex >= 0 && musics[findIndex].artist}</strong>
          </div>  
          <div className='playerMusic'> 
            <PlayerMusic 
             findIndex = {findIndex} 
             handlePlayPause={handlePlayPause}
             handleNext={handleNext}  
             handlePrevious = {handlePrevious}
             audioRef= {audioRef}
             playing={playing}
             setPlaying={setPlaying}
            />
          </div>
            </footer>
        )

}