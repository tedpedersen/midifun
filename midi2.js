var midi = null;  // global MIDIAccess object
var output = null;

function echoMIDIMessage( event ) {
  if (output) {
    output.send( event.data, event.timestamp );
  }
}

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  var input = midiAccess.inputs.entries.next();
  if (input)
    input.onmidimessage = echoMIDIMessage;
  output = midiAccess.outputs.values().next().value;
  if (!input || !output)
    console.log("Uh oh! Couldn't get i/o ports.");
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

// navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );

navigator.requestMIDIAccess().then(success).catch(failure);
