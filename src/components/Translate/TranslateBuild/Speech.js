import React, { Component } from 'react';
import './Speech.css';
import SpeechRecognition from 'react-speech-recognition'

//-----------------SPEECH RECOGNITION SETUP---------------------

// const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

//------------------------COMPONENT-----------------------------

class Speech extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }
  
  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen(){
    // handle speech recognition here 
//     if (this.state.listening) recognition.start();

//     let finalTranscript = '';
//     recognition.onresult = event => {
//       let interimTranscript = '';

//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const transcript = event.results[i][0].transcript;
//         if (event.results[i].isFinal) finalTranscript += transcript + ' ';
//         else interimTranscript += transcript;
//       }
//       document.getElementById('interim').innerHTML = interimTranscript
//       document.getElementById('final').innerHTML = finalTranscript
//   }
  }
  render() {
    return (
      <div className="container">
        <button id='microphone-btn' className="button" onClick={this.toggleListen} />
        <br />
        <p>click and speak into the micro</p>
        <div id='interim' className="interim"></div>
        <div id='final' className="final"></div>
      </div>
    )
  }
}

export default Speech;