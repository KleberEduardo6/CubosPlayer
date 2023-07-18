    import stop from '../../assets/stop.svg';
    import previous from '../../assets/previous.svg';
    import play from '../../assets/play.svg';
    import pause from '../../assets/pause.svg';
    import next from '../../assets/next.svg';
    import { useState } from 'react';
    import { musics } from '../../musics';
    import './styles.css'
  

export default function PlayerMusic({findIndex, handlePlayPause, handleNext, handlePrevious, audioRef, playing, setPlaying}) {
    const [percentageCurrentTime, setpercentageCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0)
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

    function handleTimeUpdate() {
        const currentPercentage = (audioRef.current.currentTime /audioRef.current.duration) * 100  
        setCurrentTime (audioRef.current.currentTime)
        setpercentageCurrentTime (currentPercentage)
        setDurationTime (audioRef.current.duration)
      }

    function handleChangeMusicPercentage(event){
        const currentPercentageValue = audioRef.current.duration / 100 * event.target.value;
        audioRef.current.currentTime =  currentPercentageValue;
    }

      function formatTime(event) {
        const minutes = Math.floor(event / 60);
        const seconds = Math.floor(event % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }


    return (
        <div className='display'>         
            <audio
                src={findIndex >= 0 && musics[findIndex].url} 
                ref={audioRef} 
                onTimeUpdate={handleTimeUpdate}
                autoPlay
            />
            <div className='buttons'>
                <img src={stop} onClick={handleStop} />     
                <img src={previous} alt="Previous" onClick={handlePrevious} />
                <img src={playing ? pause : play } onClick={handlePlayPause} />
                <img src={next} alt="Next" onClick={handleNext} />   
            </div>
            <div className='timeBar'>
                <p>{formatTime(currentTime)}</p>    
                <input 
                type="range" 
                min= "0" 
                max= "100"  
                onChange={handleChangeMusicPercentage}
                value={percentageCurrentTime }/>
                <p>{formatTime(durationTime)}</p>
            </div>
        </div>
    );
}

