import './styles.css';
import Cards from '../cards/MusicCards';
import { musics } from '../../musics';
 
 
export default function Main (){
    return(
    
        <main>
            <div>
                <h2> The best play list</h2>
                <div>
                    {musics.map((music) =>(   
                        <Cards 
                            key={music.id}
                            cover = {music.cover}
                            title = {music.title}
                            description = {music.description}        
                        />
                    ))}
                </div>
            </div>
        </main>

    )
} 