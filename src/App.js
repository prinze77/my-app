import React from 'react';
import './App.css';
import  SoftPhone  from 'react-softphone'
import { WebSocketInterface } from 'jssip';

const config = {
  domain: 'your-asterisk-domain.io', // your-asterisk-domain.io
  uri: 'sip:100@your-asterisk-domain.io', // sip:sip-user@your-asterisk-domain.io
  password: 'xxx', // SIP EXTENSION  PASSWORD ,
  ws_servers: 'wss://your-asterisk-domain.io:8089/ws', //ws server
  sockets: new WebSocketInterface('wss://your-asterisk-domain.io:8089/ws'),
  display_name: '100',//EXTENSION
  debug: false // Turn debug messages on

};
const setConnectOnStartToLocalStorage =(newValue)=>{
// Handle save the auto connect value to local storage
  return true
}
const setNotifications =(newValue)=>{
// Handle save the Show notifications of an incoming call to local storage
  return true
}
const setCallVolume =(newValue)=>{
// Handle save the call Volume value to local storage
  return true
}
const setRingVolume =(newValue)=>{
// Handle save the Ring Volume value to local storage
  return true
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <SoftPhone
              callVolume={33} //Set Default callVolume
              ringVolume={44} //Set Default ringVolume
              connectOnStart={false} //Auto connect to sip
              notifications={false} //Show Browser Notification of an incoming call
              config={config} //Voip config
              setConnectOnStartToLocalStorage={setConnectOnStartToLocalStorage} // Callback function
              setNotifications={setNotifications} // Callback function
              setCallVolume={setCallVolume} // Callback function
              setRingVolume={setRingVolume} // Callback function
              timelocale={'UTC+3'} //Set time local for call history
          />
        </header>
      </div>  );
}

export default App;
