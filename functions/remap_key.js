var PluginParameters = [
  {
    name: "Note Target",
    type: "menu",
    valueStrings: [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ]
  },
  {
    name: "Octave Target",
    type: "menu",
    valueStrings: [
      "-1",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ]
  }
];

function HandleMIDI(event) {
  let noteString = 
  if (event instanceof Note) {  /* if it is a note */
    event.pitch == 12;   /* transpose to given pitch */
    event.send();
  }
}
