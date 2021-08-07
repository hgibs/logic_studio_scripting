var is_on = false;

function HandleMIDI(event){
  if (event instanceof NoteOn){ /* if it is a NoteOn */
    if (! is_on) {
  		pads_on();
  		is_on = true;
  	}
  	else {
  		pads_off();
  		is_on = false;
  	}
  }
}

function pads_on(){
  var note = new NoteOn;
  note.velocity = 3;
  for (let i = 11; i < 89; i++) {
    note.pitch = i;
    note.send();
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
