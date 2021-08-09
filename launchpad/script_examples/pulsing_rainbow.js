var NeedsTimingInfo = true;  /* needed for GetTimingInfo to work */

const colors_ascending = [60, 96, 109, 73, 86, 75, 88, 77, 33, 90, 37, 41, 67, 80, 81, 94, 53, 95, 72];
var column_bases = [11, 12, 13, 14, 15, 16, 17, 18]
var col_index = 0;
var start_beatPos = 0;

var pulsing = false;
var pressed_pitch = 0;

var pressed_pitches = {};

function ProcessMIDI() {
  var info = GetTimingInfo(); /* get the timing info from the host */
  if (Object.keys(pressed_pitches).length > 0){  /* if the transport is playing */
    color_start = Math.floor(info.blockStartBeat * 10) % colors_ascending.length;
    pad_on_spec(color_start, info.blockStartBeat);
  } else {
    pads_off();
  }
}

function HandleMIDI(event){
  var info = GetTimingInfo();
  if (event instanceof NoteOn) {
    pressed_pitches[event.pitch] = event.pitch;
    // Trace(pressed_pitch);
  }
  if (event instanceof NoteOff){
    delete pressed_pitches[event.pitch];
    pad_on_spec(0, info.blockStartBeat);
  }
}

function pad_on_spec(color, beatPos){
  var note = new NoteOn;
  for (var key in pressed_pitches) {
    note.velocity = color;
    note.pitch = pressed_pitches[key];
    note.sendAtBeat(beatPos);
  }

}

function pads_off(){
  var note = new NoteOn;
  note.velocity = 0;
  for (let i = 11; i < 89; i++) {
    note.pitch = i;
    note.send();
  }
}
