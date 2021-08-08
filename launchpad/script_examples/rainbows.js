var NeedsTimingInfo = true;  /* needed for GetTimingInfo to work */

const colors_ascending = [60, 96, 109, 73, 86, 75, 88, 77, 33, 90, 37, 41, 67, 80, 81, 94, 53, 95, 72];
var column_bases = [11, 12, 13, 14, 15, 16, 17, 18]
var col_index = 0;
var start_beatPos = 0;

function ProcessMIDI() {
  var info = GetTimingInfo(); /* get the timing info from the host */
  if (info.playing){  /* if the transport is playing */
    color_start = Math.floor(info.blockStartBeat * 10) % colors_ascending.length;
    pad_rainbow(color_start, info.blockStartBeat);
  } else {
    pads_off();
    col_index = 0;
  }
}

function pad_rainbow(color_start_idx, atBeatPos){
  for (let j = 0; j < column_bases.length; j++) {
    var nextColor = (color_start_idx + j) % colors_ascending.length;
    color = colors_ascending[nextColor];
    light_column(column_bases[j], color, atBeatPos);
  }
}

function light_column(base, color, beatPos){
  color_note = new NoteOn();
  for (let i = base; i <= 80+base; i += 10) {
    color_note.pitch = i;
    color_note.velocity = color;
    color_note.sendAtBeat(beatPos);
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
