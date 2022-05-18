import React, { useState, useRef, useEffect } from "react";

function Video({
    src = "https://media.giphy.com/media/KctGIT2JHvVRC7ESeR/giphy.mp4"
}) {
    const [speed, setSpeed] = useState(1);
    useEffect (() => {

        const video = document.querySelector('video');
        video.playbackRate = speed;
    }, [speed])
    return (
        <div>
            <video muted autoPlay loop>
                <source src={src} />
            </video>
            <div>
                <button onClick={() => setSpeed(s => s / 2)}>slow</button>
                <button onClick={() => setSpeed(s => s * 2)}>fast</button>
                <p>Current speed: {speed}</p>
            </div>
        </div>
    )
}

export default Video;