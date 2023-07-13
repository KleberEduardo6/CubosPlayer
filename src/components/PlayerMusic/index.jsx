    import stop from '../../assets/stop.svg';
    import previous from '../../assets/previous.svg';
    import play from '../../assets/play.svg';
    import pause from '../../assets/pause.svg';
    import next from '../../assets/next.svg';
    import { useRef, useState } from 'react';
    import { musics } from '../../musics';
    import './styles.css'

    export default function PlayerMusic() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

     
    function handlePlayPause() {
        (playing ? audioRef.current.pause() : audioRef.current.play())  
        setPlaying(!playing);
    }

    function handleStop() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
    }

    function handleNext() {
        setMusicIndex(( musicIndex + 1) % musics.length);
        setTimeout(() => {
            audioRef.current.play();
            setPlaying(true);
        }, 1);

    }

    function handlePrevious() {
        setMusicIndex((musicIndex - 1 + musics.length) % musics.length );
        setTimeout(() => {
            audioRef.current.play();
            setPlaying(true);
        }, 1);
         

    }

    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
      }
      
    

    return (
        <div className='display'>
            <audio 
                src={musics[musicIndex].url} 
                ref={audioRef} 
                    onTimeUpdate={function() {
                        console.log('rolou', audioRef.current.currentTime)
                    }}
            />
            <div className='buttons'>
                <img src={stop} onClick={handleStop} />
                <img src={previous} alt="Previous" onClick={handlePrevious} />
                <img src={playing ? pause : play } onClick={handlePlayPause} />
                <img src={next} alt="Next" onClick={handleNext} />
                
            </div>
            <div>
            <input type="range" min= "0" max= "100" />
            </div>
        </div>
    );
    }

