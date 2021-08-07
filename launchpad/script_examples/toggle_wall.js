var is_on = false;

function HandleMIDI(event){
  if (event instanceof NoteOn){ /* On note down (not release)*/
    if (! is_on) {
  		extra_pads_on();
  		is_on = true;
  	}
  	else {
  		extra_pads_off();
  		is_on = false;
  	}
  }
}

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
