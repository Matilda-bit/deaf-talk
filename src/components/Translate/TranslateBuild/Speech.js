import React, { Component } from "react";
//import "./Speech.css";
import classes from "./Speech.css";
//import { SpeechRecognition, webkitSpeechRecognition } from 'react-speech-recognition';
//import SpeechRecognition from 'react-speech-recognition';
import webkitSpeechRecognition from "react-speech-recognition";

//-----------------SPEECH RECOGNITION SETUP---------------------

// Create a new instance of SpeechRecognition
//const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();

// Define whether continuous results are returned for each recognition
// or only a single result. Defaults to false
recognition.continuous = true;
// Define whether continuous results are returned for each recognition
// or only a single result. Defaults to false
recognition.interimResults = true;
// Returns and sets the language of the current SpeechRecognition.
// If not specified, this defaults to the HTML lang attribute value
// or the user agent's language setting if that isn't set either.
// There are a lot of supported languages
recognition.lang = "en-US";

//------------------------COMPONENT-----------------------------

class Speech extends Component {
  constructor() {
    super();
    this.state = {
      listening: false,
    };
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
  }

  toggleListen() {
    //Start/Stop speech recognition if this.state.listening = true/false, respectively
    this.setState(
      {
        listening: !this.state.listening,
      },
      this.handleListen
    );
  }

  handleListen() {
    console.log("listening?", this.state.listening);
    // start the speech recognition
    if (this.state.listening) {
      this.recognition.start();
      this.recognition.onend = () => {
        recognition.start();
      };
    } else {
      this.recognition.stop();
      this.recognition.onend = () => {
        console.log("Stopped listening per click");
      };
    }
    this.recognition.onstart = () => {
      console.log("Listening!");
    };
    //   // This event is triggered when the speech recognition service
    //   // returns a result — a word or phrase has been positively
    //   //recognized and this has been communicated back to your app

    let finalTranscript = "";
    this.recognition.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        // Verify if the recognized text is the last with the isFinal property
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else interimTranscript += transcript;
      }

      document.getElementById("interim").innerHTML = interimTranscript;
      document.getElementById("final").innerHTML = finalTranscript;
    };
    //-----------------------------------------------------------------------

    this.recognition.onerror = (event) => {
      console.log("Error occurred in recognition: " + event.error);
    };
  }

  render() {
    return (
      <div className={classes.container}>
        <button
          id="microphone-btn"
          className={classes.button}
          onClick={() => this.toggleListen}
        >
          Click to speak
        </button>
        <br />
        <div id="interim" className={classes.interim}></div>
        <div id="final" className={classes.final}></div>
      </div>
    );
  }
}
const options = {
  autoStart: false,
};

export default webkitSpeechRecognition(options)(Speech);

//export default SpeechRecognition(Speech);
