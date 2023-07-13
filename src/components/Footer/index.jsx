import './styles.css'
import { musics } from '../../musics'
import PlayerMusic from '../PlayerMusic'

export default function Footer (){
    return(
        <footer>
          <div className='playerMusic'>
            <PlayerMusic/>
          </div>
            </footer>
        )

}