import './styles.css';
import Cards from '../MusicCards'
import { musics } from '../../musics';

 
export default function Main({IndexMusic}) {
    return( 
      <main>    
        <div>
          <h2>The best playlist</h2>
          <div>
            {musics.map((music) => (
              <div key={music.id}>
                <Cards
                  cover={music.cover}
                  title={music.title}
                  description={music.description}
                  url = {music.url}
                  onClick={() => IndexMusic(music.url)}
                />  
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }