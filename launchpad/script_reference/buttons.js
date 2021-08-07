/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * The launchpad X has 128 primary buttons and 16 function buttons. The  *
 * primary buttons are referenced as notes and the function buttons are  *
 * referenced as MIDI control codes.                                     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


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

/* Use factory user layout #4 (#2 for pro) to illuminate every button
 sequentially. */
function start_crawl(colorNum, speed){
  //pads start on 11 and go to 88
  var on = new NoteOn;
  on.velocity = colorNum;
  var off = new NoteOn;
  off.velocity = 0;

  var delay = 0;
  for (let i = 11; i < 89; i++) {
    on.pitch = i;
    off.pitch = i;
    on.sendAfterMilliseconds(delay);
    off.sendAfterMilliseconds(delay + speed);
    delay += speed;
  }
}

/* These are the extra pads on the Launchpad X, but aren't hard to extend */
function extra_pads_on(){
  var cc_on = new ControlChange;
  cc_on.value = 3;
  var cc_pads = [19,29,39,49,59,69,79,89,91,92,93,94,95,96,97,98,99];
  cc_pads.forEach(padnum => {
    cc_on.number = padnum;
    cc_on.send();
  });
}

function extra_pads_off(){
  var cc_off = new ControlChange;
  cc_off.value = 0;
  var cc_pads = [19,29,39,49,59,69,79,89,91,92,93,94,95,96,97,98,99];
  cc_pads.forEach(padnum => {
    cc_off.number = padnum;
    cc_off.send();
  });
}
