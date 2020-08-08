import React from "react";
//import './Translate.css';
import classes from "./Translate.css";

//import ToggleButton from 'react-toggle-button';
import Speech from "./TranslateBuild/Speech";
//import SpeechToText from './TranslateBuild/SpeechToText';

const translate = (props) => {
  return (
    <div className={classes.Translate}>
      <div className={classes.TranslateBox}>
        <h1>translate text to GIF</h1>
        <p>we need build data base</p>
      </div>
      <div className={classes.TranslateVoice}>
        <Speech />
      </div>
    </div>
  );
};

export default translate;
