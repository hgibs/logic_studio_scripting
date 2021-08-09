var NeedsTimingInfo = true;  /* needed for GetTimingInfo to work */
var is_on = false;
const img_array2d = [[0, 0, 5, 5, 5, 5, 0, 0], [0, 5, 5, 5, 5, 5, 5, 0], [5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 0, 0, 5, 5, 5], [3, 3, 3, 0, 0, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3, 3], [0, 3, 3, 3, 3, 3, 3, 0], [0, 0, 3, 3, 3, 3, 0, 0]];

function HandleMIDI(event){
  if (event instanceof NoteOn){
    if (! is_on) {
      display_image(img_array2d);
      is_on = true;
    }
    else {
      pads_off();
      is_on = false;
    }
  }
}

function set_pad_pixel(x, y, color){
  //starts at top left as 0,0

  row_starts = [81, 71, 61, 51, 41, 31, 21, 11];
  var note = new NoteOn;
  note.velocity = color;
  note.pitch = row_starts[y] + x;
  // Trace(x, y, color, pitch);
  // note.sendAtBeat(beatPos);
  note.send();
}

function display_image(img_array){
  var info = GetTimingInfo();
  //expecting an 8x8 image
  for (let y=0; y<8; y++){
    for (let x=0; x<8; x++){
      set_color = img_array[y][x];
      set_pad_pixel(x, y, set_color); //, info.blockStartBeat);
    }
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
