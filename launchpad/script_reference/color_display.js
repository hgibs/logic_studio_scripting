//an example of seeing the colors staticly:
var is_on = false;
function HandleMIDI(event){
  if (event instanceof NoteOn){
    if (! is_on) {
      is_on = true;
      greyscale_pads(event.pitch, is_on);
  	}
  	else {
      is_on = false;
      greyscale_pads(event.pitch, is_on);
  	}
  }
}

function greyscale_pads(startNote, on){
  var grayscale = [1, 117, 2, 118, 3, 119];
  for (let i = 0; i < grayscale.length; i++) {
    var note = new NoteOn;
    note.pitch = startNote + i;
    if(on) {
      note.velocity = grayscale[i];
    } else {
      note.velocity = 0;
    }
    note.send();
  }
}


//An example of the rainbow:
var is_on = false;
function HandleMIDI(event){
  if (event instanceof NoteOn){
    if (! is_on) {
      is_on = true;
      rainbow_pads(event.pitch, is_on);
  	}
  	else {
      is_on = false;
      rainbow_pads(event.pitch, is_on);
  	}
  }
}

function rainbow_pads(startNote, on){
  var rainbow_short = [5, 9, 13, 21, 37, 45, 49];
  for (let i = 0; i < rainbow_short.length; i++) {
    var note = new NoteOn;
    note.pitch = startNote + i;
    if(on) {
      note.velocity = rainbow_short[i];
    } else {
      note.velocity = 0;
    }
    note.send();
  }
}
