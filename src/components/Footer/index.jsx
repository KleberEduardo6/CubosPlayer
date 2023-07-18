import './styles.css'
import PlayerMusic from '../PlayerMusic'
import { musics } from '../../musics';

export default function Footer ({findIndex, setFindIndex, playing, setPlaying}){
 
    return(
        <footer>
          <div className='titleAndArtist'>
            <h2>{findIndex >= 0 && musics[findIndex].title}</h2>
            <strong>{findIndex >= 0 && musics[findIndex].artist}</strong>
          </div>  
          <div className='playerMusic'> 
            <PlayerMusic 
             findIndex = {findIndex} 
             setFindIndex={setFindIndex}
             playing = {playing}
             setPlaying = {setPlaying}
            />
          </div>
            </footer>
        )

}