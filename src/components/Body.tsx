import { useState } from 'react';
import { Tip } from './Tip';
import '../CSS/Body.css';

/** Body: defines the Body of the application, (root component) */
const Body = () => {
    // showTips: prop to indicate if we are showing the tips toolbar
    const [showTips, setShowTips] = useState(true);
    return (
        <div className="main dark">
            {
                showTips ? <Tip 
                                setShowTips={setShowTips}/> : <div> hello world </div>
            }
        </div>
    )
}

export { Body };