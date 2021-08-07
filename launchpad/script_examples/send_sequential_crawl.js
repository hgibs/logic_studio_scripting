function HandleMIDI(event){
  if (event instanceof NoteOn){ /* Only on the down-press (not release) */
    start_crawl(GetParameter("Color"), GetParameter("Delay (ms)"));
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

var PluginParameters = [
  {
    name:"Delay (ms)",
    type:"lin",
    minValue:1,
    maxValue:500,
    numberOfSteps:499,
    defaultValue:25
  },
  {
    name:"Color",
    type:"menu",
    defaultValue:3,
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
