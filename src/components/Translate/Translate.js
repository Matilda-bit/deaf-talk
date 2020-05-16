import React from 'react';
import './Translate.css';

//import ToggleButton from 'react-toggle-button';
import Speech from './TranslateBuild/Speech';
//import SpeechToText from './TranslateBuild/SpeechToText';




const translate = ( props ) => {

    return (
        <div className="Translate">
            <div className="TranslateBox">
                <h1>translate text to GIF</h1>
                <p>we need build data base</p>
            </div>
            <div className="TranslateVoice">
                
                    <Speech />
                
            </div>
        </div>
  
    );
};

export default translate;