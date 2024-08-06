import "../CSS/Tip.css";

const Tip = () => {
    return (
        <div className="tip-bar">
            <div className="tip-outer">
                <div className="tip-inner">
                    <span className="mood-mirror-text"> 
                        MoodMirror
                    </span>
                    <div className="tip-bar-bottom">
                        <pre className="tip-bar-text">
                            Real time emotion detection, using facial recognition and speech sentiment analysis
                        </pre>
                    </div>
                </div>
                <div className="next-button"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="next-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </div>
            </div>
        </div>
    ) 
}

export { Tip };