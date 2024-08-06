import "../CSS/Tip.css";
import { useState, useEffect } from 'react';

interface TipProps {
    setShowTips: Function
}
const Tip = ({setShowTips} : TipProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ displayIndex, setDisplayIndex ] = useState(0);
    const displayTitles = ['MoodMirror', 'Tip #1', 'Tip #2']

    const displayContents = [
        'Real time emotion detection, using facial recognition and speech sentiment analysis.', 
        'Hold your facial expressions for longer, and expect a bit of a delay as the AI model analyzes.',
        'Be in a well-lit room and project your voice. Try to look straight at your webcam.'
    ]

    useEffect(() => {
        const nextBtn = document.querySelector('.next-button');
        nextBtn?.addEventListener('mouseenter', () => {
            setIsHovered(true);
        })

        nextBtn?.addEventListener('mouseleave', () => {
            setIsHovered(false);
        })
    });

    const handleNext = () => {
        setDisplayIndex(displayIndex + 1);
        // after scrolling through 2 tips, exit the tips prop
        if(displayIndex == 2) {
            setShowTips(false);
        }
    }

    return (
        <div className="tip-bar">
            <div className="tip-outer">
                <div className="tip-inner">
                    <span className="mood-mirror-text"> 
                        {displayTitles[displayIndex]}
                    </span>
                    <div className="tip-bar-bottom">
                        <pre className="tip-bar-text">
                            {displayContents[displayIndex]}
                        </pre>
                    </div>
                </div>
                <button className={`next-button ${isHovered ? 'next-button-hovered': ''}`} onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`next-icon ${isHovered ? 'next-icon-hovered' : ''}`} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>
            </div>
        </div>
    ) 
}

export { Tip };