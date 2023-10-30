import { useState, useRef } from 'react';
import '.././index.css';
import ResultModal from './ResultModal';
export default function TimerChallenge({title, targetTime}){

    const timer  = useRef();
    const dialog = useRef();
    const[timeExpired, setTimeExpired] = useState(false);
    const[timeStarted, setTimeStarted] = useState(false);
    function handleStart(){
        timer.current =  setTimeout(()=>{
            setTimeExpired(true);
            dialog.current.showModal();
        setTimeStarted(false);

        },targetTime*1000);
        setTimeStarted(true);
    }


    function handleStop(){
clearTimeout(timer.current);
setTimeStarted(false);

    }

    return(
        <>
        {TimerChallenge&& <ResultModal ref={dialog} targetTime={targetTime} result={"lost"}/>}
        <section className='challenge'>
            <h2>
                {title}
            </h2>
            {timeExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ?"s":''}
            </p>
            <p>
                <button onClick={timeStarted ? handleStop:handleStart }>
                    {timeStarted ? "Stop": "Start"} challenge
                </button>
            </p>
            <p className={timeStarted ? 'active' :undefined}>
                {timeStarted ? "time is running..." : "timer inactive"}
            </p>
        </section>
        </>
    )
}