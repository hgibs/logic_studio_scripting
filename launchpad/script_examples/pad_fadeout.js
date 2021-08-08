const grays_descending = [3, 2, 118, 117, 71, 1, 0];

var speed = 100;

function HandleMIDI(event){
  if (event instanceof NoteOn) { /* if it is a NoteOn */
    event.velocity = 3;
    event.send()
  } else if (event instanceof NoteOff) {
    var pad = new NoteOn;
    var delay = 0;
    for (var i = 1; i < grays_descending.length; i++) {
      pad.pitch = event.pitch;
      pad.velocity = grays_descending[i];
      pad.sendAfterMilliseconds(delay);
      delay += speed;
    }
  }
}
