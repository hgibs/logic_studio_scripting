var is_on = false;

function HandleMIDI(event){
  if (event instanceof NoteOn){ /* if it is a NoteOn */
    if (! is_on) {
  		pads_on(GetParameter("Color")); //gets index of param
  		is_on = true;
  	}
  	else {
  		pads_off();
  		is_on = false;
  	}
  }
}

function pads_on(color){
  var note = new NoteOn;
  note.velocity = color;
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

var PluginParameters = [
  {
    name:"Color",
    type:"menu",
    defaultValue:"3",
    valueStrings: [
      "OFF",
      "ON_LOW",
      "ON_MED",
      "ON_HI",
      "Red_Lite",
      "Red",
      "Red2",
      "Red3",
      "Brown_Lite",
      "Brown",
      "Brown2",
      "Brown3",
      "Yellow_Lite",
      "Yellow",
      "Yellow2",
      "Yellow3",
      "Lime_Lite",
      "Lime",
      "Lime2",
      "Lime3",
      "Green_Lite",
      "Green",
      "Green2",
      "Green3",
      "SeaGreen_Lite",
      "SeaGreen",
      "SeaGreen2",
      "SeaGreen3",
      "Aquamarine_Lite",
      "Aquamarine",
      "Aquamarine2",
      "Aquamarine3",
      "Aqua_Lite",
      "Aqua",
      "Aqua2",
      "Aqua3",
      "Skyblue_Lite",
      "Skyblue",
      "Skyblue2",
      "Skyblue3",
      "Steelblue_Lite",
      "Steelblue",
      "Steelblue2",
      "Steelblue3",
      "Purple_Lite",
      "Purple",
      "Purple2",
      "Purple3",
      "Violet_Lite",
      "Violet",
      "Violet2",
      "Violet3",
      "Pink_Lite",
      "Pink",
      "Pink2",
      "Pink3",
      "DeepPink_Lite",
      "DeepPink",
      "DeepPink2",
      "DeepPink3",
      "IndianRed",
      "Amber",
      "Amber2",
      "Amber3",
      "CadetBlue",
      "Seafoam",
      "Blue",
      "Teal",
      "MediumBlue",
      "MediumPurple",
      "Thistle",
      "MistyRose",
      "Blush",
      "Goldenrod_Dark",
      "Gold",
      "Olive",
      "Green4",
      "Aquamarine4",
      "Skyblue4",
      "Blue2",
      "Purple4",
      "Pink4",
      "Pink5",
      "Brown4",
      "Orange",
      "Lime4",
      "Lime5",
      "Green5",
      "Seagreen4",
      "Seagreen5",
      "Skyblue5",
      "Steelblue4",
      "Skyblue6",
      "Thistle2",
      "DeepPink4",
      "DeepPink5",
      "Orange2",
      "Gold2",
      "Olive2",
      "Yellow4",
      "Amber4",
      "Shamrock",
      "Sage",
      "Steel2",
      "Periwinkle",
      "Khaki",
      "Cranberry",
      "Salmon2",
      "Cantelope",
      "Butter",
      "Chartreuse_Lite",
      "KeyLime",
      "Steel",
      "Cream",
      "Mint",
      "Lavender",
      "Lavender2",
      "ON_LOW-",
      "ON_MED-",
      "ON_MED+",
      "Cranberry2",
      "Mud",
      "Lime6",
      "Grass",
      "Goldenrod",
      "Gold3",
      "Honey",
      "Rust"]
  }
];
