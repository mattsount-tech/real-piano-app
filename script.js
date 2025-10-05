//creating lists to store notes in each song
var maryLamb = ["E", "D", "Low C", "D", "E", "E", "E", "D", "D", "D", "E", "G","G", "E", "D", "Low C", "D", "E", "E", "E", "E", "D", "D", "E", "D", "Low C"];
var londonBridge = ["G", "A", "G", "F", "E", "F", "G", "D", "E", "F", "E", "F", "G", "G", "A", "G", "F", "E", "F", "G", "D", "G", "E", "Low C"];
var odeToJoy = ["E", "E", "F", "G", "G", "F", "E", "D", "Low C", "Low C", "D", "E", "E", "D", "D", "E", "E", "F", "G", "G", "F", "E", "D", "Low C", "Low C", "D", "E", "D", "Low C", "Low C"];
//declaring my variables
var note;
var index;
var song; 
var noteCounter=0;

//What each  button does
onEvent("maryButt", "click", function( ) {
  resetSong("Mary Had A Little Lamb", 18, "maryLamb", maryLamb[0]);
  setImageURL("pianoImage", "https://easydrawingguides.com/wp-content/uploads/2023/05/how-to-draw-an-easy-cartoon-sheep-featured-image.png");
});
onEvent("londonButt", "click", function ( ){
  resetSong("London Bridge", 26, "londonBridge", londonBridge[0]);
  setImageURL("pianoImage", "https://i.ytimg.com/vi/JUke3Hnv8o4/maxresdefault.jpg");
});
onEvent("odeButt", "click", function( ) {
  resetSong("Ode To Joy", 26, "odeToJoy", odeToJoy[0]);
  setImageURL("pianoImage", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg/960px-Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg");
});
onEvent("freeButt", "click", function( ) {
  index = 0;
  setScreen("pianoScreen");
  setText("songText", "Play A Song!");
  bgColor("black");
  setText("complementText", "Play!");
  setProperty("songText", "font-size", 26);
  song = "free";
  setProperty("complementText", "background-color", "rgb(255, 53, 212)");
  playFree();
  setImageURL("pianoImage", "https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/connections/science-and-music/music-science169.jpg");
});
onEvent("homeButt", "click", function( ) {
  setScreen("homeScreen");
  noteCounter = 0;
  index = 0;
});
//output for each piano key
onEvent("lowCKey", "click", function( ) {
  note = "Low C";
  chooseSong();
  noteCounter++;
  playSound("C-note.mp3", false);
});
onEvent("dButt", "click", function( ) {
  note = "D";
  chooseSong();
  noteCounter++;
  playSound("D-note.mp3", false);
});
onEvent("eButt", "click", function( ) {
  note = "E";
  chooseSong();
  noteCounter++;
  playSound("E-note.mp3", false);
});
onEvent("fButt", "click", function( ) {
  note = "F";
  chooseSong();
  noteCounter++;
  playSound("F-note.mp3", false);
});
onEvent("gButt", "click", function( ) {
  note = "G";
  chooseSong();
  noteCounter++;
  playSound("G-note.mp3", false);
});
onEvent("aButt", "click", function( ) {
  note = "A";
  chooseSong();
  noteCounter++;
  playSound("A-note.mp3", false);
});
onEvent("bButt", "click", function( ) {
  note = "B";
  chooseSong();
  noteCounter++;
  playSound("B-note.mp3", false);
});
onEvent("highCButt", "click", function( ) {
  note = "High C";
  noteCounter++;
  chooseSong();
  playSound("High-C-Note.mp3", false);
});

//All the functions

//so that the correct song lesson is selected
function chooseSong(){
  if (song == "maryLamb") {
    playSong(maryLamb);
  }
  if (song == "londonBridge") {
    playSong(londonBridge);
  }
  if (song == "odeToJoy") {
    playSong(odeToJoy);
  }
  if (song == "free") {
    playFree();
  }
}
//for when user chooses free play mode
function playFree() {
  bgColor("black");
  setText("noteText", "Free Play!");
}
//controls background colors on piano screen
function bgColor(color) {
  setProperty("titleBG", "background-color", color);
   setProperty("pianoBG", "background-color", color);
}
//resets song lesson when user chooses song
function resetSong(titleText, fontSize, songName, firstNote) {
  index = 0;
  setText("noteText", "Play: " + firstNote);
  setScreen("pianoScreen");
  setText("songText", titleText);
  setProperty("songText", "font-size", fontSize);
  song = songName;
  bgColor("black");
  setText("complementText", "Play!");
  noteCounter++;
  setProperty("complementText", "background-color", "rgb(255, 53, 212)");
}
//functionality of song lesson, matching user note to songlist note, screen changes
function playSong(songList) {
  setText("noteText", "Play: " + songList[index]);
  if ((note == songList[index]) && (index<songList.length-1)) {
    index = index + 1;
    setText("noteText","Play: " + songList[index]);
    setText("complementText", "Play!");
    bgColor("black");
    setProperty("complementText", "background-color", "rgb(255, 53, 212)");
   }else if ((note != songList[index])&&(noteCounter > 0)) {
    index = 0;
    setText("noteText", "Play: " + songList[index]);
    setText("complementText", "Try Again!");
    bgColor(rgb(255, 0, 0));
    playSound("sound://category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
  } else if ((index==songList.length-1)) {
    console.log(songList[index]);
    index=0;
    setText("noteText", "Play: " + songList[index]);
    setText("complementText", "You Finished!");
    setProperty("complementText", "background-color", "green");
    bgColor(rgb(0, 234, 23));
  }
}






