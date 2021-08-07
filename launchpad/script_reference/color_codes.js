/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Colors matched from programmers reference PDF for names,  *
 * RGB values are also listed, for reference                 *
 * Page 12: https://fael-downloads-prod.focusrite.com/customer/prod/s3fs-public/downloads/Launchpad%20X%20-%20Programmers%20Reference%20Manual.pdf
 *                                                           *
 * I have done my best for creating best names, feel free to *
 * open a pull request if you have a better idea!            *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Color name to decimal number
const launchpad_color_decimal = {
  /* RGB values are in parenthesis */
  "OFF": 0, /* off */
  "ON_LOW": 1, //179,179,179
  "ON_MED": 2, //221,221,221
  "ON_HI":  3, //255,255,255
  "Red_Lite": 4, //253,179,180
  "Red": 5, //252,98,101
  "Red2": 6,
  "Red3": 7,
  "Brown_Lite": 8,
  "Brown": 9,
  "Brown2": 10,
  "Brown3": 11,
  "Yellow_Lite": 12,
  "Yellow": 13,
  "Yellow2": 14,
  "Yellow3": 15,
  "Lime_Lite": 16,
  "Lime": 17,
  "Lime2": 18,
  "Lime3": 19,
  "Lime3": 19,
  "Green_Lite": 20,
  "Green": 21,
  "Green2": 22,
  "Green3": 23,
  "SeaGreen_Lite": 24,
  "SeaGreen": 25,
  "SeaGreen2": 26,
  "SeaGreen3": 27,
  "Aquamarine_Lite": 28, //105,254,205
  "Aquamarine": 29,
  "Aquamarine2": 30,
  "Aquamarine3": 31,
  "Aqua_Lite": 32,
  "Aqua": 33,
  "Aqua2": 34,
  "Aqua3": 35,
  "Skyblue_Lite": 36,
  "Skyblue": 37,
  "Skyblue2": 38,
  "Skyblue3": 39,
  "Steelblue_Lite": 40,
  "Steelblue": 41,
  "Steelblue2": 42,
  "Steelblue3": 43,
  "Purple_Lite": 44,
  "Purple": 45,
  "Purple2": 46,
  "Purple3": 47,
  "Violet_Lite": 48,
  "Violet": 49,
  "Violet2": 50,
  "Violet3": 51,
  "Pink_Lite": 52,
  "Pink": 53,
  "Pink2": 54,
  "Pink3": 55,
  "DeepPink_Lite": 56,
  "DeepPink": 57,
  "DeepPink2": 58,
  "DeepPink3": 59,
  "IndianRed": 60,
  "Amber": 61,
  "Amber2": 62,
  "Amber3": 63,
  "SeaGreen": 64,
  "CadetBlue": 65,
  "Seafoam": 65,
  "Blue": 66,
  "Teal": 67,
  "MediumBlue": 68,
  "MediumPurple": 69,
  "Thistle": 70,
  "MistyRose": 71,
  "Blush": 72,
  "Goldenrod_Dark": 73,
  "Gold": 74,
  "Olive": 75,
  "Green4": 76,
  "Aquamarine4": 77,
  "Skyblue4": 78,
  "Blue2": 79,
  "Purple4": 80,
  "Pink4": 81,
  "Pink5": 82,
  "Brown4": 83,
  "Orange": 84,
  "Lime4": 85,
  "Lime5": 86,
  "Green5": 87,
  "Seagreen4": 88,
  "Seagreen5": 89,
  "Skyblue5": 90,
  "Steelblue4": 91,
  "Skyblue6": 92,
  "Thistle2": 93,
  "DeepPink4": 94,
  "DeepPink5": 95,
  "Orange2": 96,
  "Gold2": 97,
  "Olive2": 98,
  "Yellow4": 99,
  "Amber4": 100,
  "Shamrock": 101,
  "Sage": 102,
  "Steel2": 103,
  "Periwinkle": 104,
  "Khaki": 105,
  "Cranberry": 106,
  "Salmon2": 107,
  "Cantelope": 108,
  "Butter": 109,
  "Chartreuse_Lite": 110,
  "KeyLime": 111,
  "Steel": 112,
  "Cream": 113,
  "Mint": 114,
  "Lavender": 115,
  "Lavender2": 116,
  "ON_LOW-": 117,
  "ON_MED-": 118,
  "ON_MED+": 119,
  "Cranberry2": 120,
  "Mud": 121,
  "Lime6": 122,
  "Grass": 123,
  "Goldenrod": 124,
  "Gold3": 125,
  "Honey": 126,
  "Rust": 127
};

//grayscale range (no color)
const grayscale2 = [1, 117, 2, 118, 3]
const grayscale2 = [1, 117, 2, 118, 3, 119]

//Rainbow Scale (no white/grey)
const rainbow_short = [
  5, //red
  9, //Orange
  13, //Yellow
  21, //Green
  37, //Blue
  45, //Indigo
  49  //Violet
];

//All bright colors sorted by rainbow
const colors_sorted = [
  5, //red
  72,
  120,
  60,
  84, //orange
  9,
  96,
  109,
  13, //yellow
  74, //75?
  17,
  85,
  21, // green
  25,
  29, //33 fits too
  37, // blue
]
