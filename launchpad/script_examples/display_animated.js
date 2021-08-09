var NeedsTimingInfo = true;  /* needed for GetTimingInfo to work */
var is_on = false;
const img_animated = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 5, 0, 0, 5, 0, 0], [0, 0, 5, 5, 5, 5, 0, 0], [0, 0, 5, 5, 5, 5, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 5, 0, 0, 5, 5, 0], [0, 5, 5, 5, 5, 5, 5, 0], [0, 5, 5, 5, 5, 5, 5, 0], [0, 0, 5, 5, 5, 5, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 5, 0, 0, 5, 5, 0], [5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5], [0, 5, 5, 5, 5, 5, 5, 0], [0, 0, 5, 5, 5, 5, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 5, 0, 0, 5, 5, 0], [5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 0, 5, 5, 0, 5, 5], [5, 5, 0, 0, 0, 0, 5, 5], [0, 5, 5, 0, 0, 5, 5, 0], [0, 0, 5, 5, 5, 5, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 5, 0, 0, 5, 5, 0], [5, 0, 0, 5, 5, 0, 0, 5], [5, 0, 0, 0, 0, 0, 0, 5], [5, 0, 0, 0, 0, 0, 0, 5], [0, 5, 0, 0, 0, 0, 5, 0], [0, 0, 5, 0, 0, 5, 0, 0], [0, 0, 0, 5, 5, 0, 0, 0]]];

const blank_out = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

function HandleMIDI(event){
  if (event instanceof NoteOn){
    play_animation(img_animated);
  }
}

function set_pad_pixel(x, y, color, beatPos){
  //starts at top left as 0,0
  row_starts = [81, 71, 61, 51, 41, 31, 21, 11];
  var note = new NoteOn;
  note.velocity = color;
  note.pitch = row_starts[y] + x;
  note.sendAtBeat(beatPos);
}

function display_image(img_array, index){
  var info = GetTimingInfo();
  //expecting an 8x8 image
  for (let y=0; y<8; y++){
    for (let x=0; x<8; x++){
      set_color = img_array[y][x];
      set_pad_pixel(x, y, set_color, info.blockStartBeat+(index / 2.0));
    }
  }
}

function play_animation(animation_array){
  for (let i=0; i < animation_array.length; i++){
    display_image(animation_array[i], i);
  }
  display_image(blank_out, animation_array.length);
}
