const songs = {
  maryLamb: ["E", "D", "Low C", "D", "E", "E", "E", "D", "D", "D", "E", "G","G", "E", "D", "Low C", "D", "E", "E", "E", "E", "D", "D", "E", "D", "Low C"],
  londonBridge: ["G", "A", "G", "F", "E", "F", "G", "D", "E", "F", "E", "F", "G", "G", "A", "G", "F", "E", "F", "G", "D", "G", "E", "Low C"],
  odeToJoy: ["E", "E", "F", "G", "G", "F", "E", "D", "Low C", "Low C", "D", "E", "E", "D", "D", "E", "E", "F", "G", "G", "F", "E", "D", "Low C", "Low C", "D", "E", "D", "Low C", "Low C"]
};

let currentSong = [];
let currentIndex = 0;
let noteCounter = 0;
let songName = "";

function selectSong(name) {
  songName = name;
  currentSong = songs[name];
  currentIndex = 0;
  noteCounter = 0;
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("pianoScreen").style.display = "block";
  document.getElementById("songText").innerText = "Play: " + name;
  updateNoteText();
}

function selectFreePlay() {
  songName = "free";
  currentSong = [];
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("pianoScreen").style.display = "block";
  document.getElementById("songText").innerText = "Free Play";
  document.getElementById("noteText").innerText = "Play anything!";
}

function updateNoteText() {
  if (songName !== "free") {
    document.getElementById("noteText").innerText = "Play: " + currentSong[currentIndex];
  }
}

function playNote(note) {
  playSound(note);
  if (songName === "free") return;

  noteCounter++;

  if (note === currentSong[currentIndex]) {
    currentIndex++;
    if (currentIndex < currentSong.length) {
      updateNoteText();
      setComplement("Correct!", "green");
    } else {
      setComplement("You Finished!", "green");
      currentIndex = 0;
    }
  } else {
    currentIndex = 0;
    updateNoteText();
    setComplement("Try Again!", "red");
  }
}

function setComplement(text, color) {
  const elem = document.getElementById("complementText");
  elem.innerText = text;
  elem.style.color = color;
}

function playSound(note) {
  const fileMap = {
    "Low C": "C-note.mp3",
    "D": "D-note.mp3",
    "E": "E-note.mp3",
    "F": "F-note.mp3",
    "G": "G-note.mp3",
    "A": "A-note.mp3",
    "B": "B-note.mp3",
    "High C": "High-C-Note.mp3"
  };
  const audio = new Audio(`sounds/${fileMap[note]}`);
  audio.play();
}

function goHome() {
  document.getElementById("homeScreen").style.display = "block";
  document.getElementById("pianoScreen").style.display = "none";
  currentIndex = 0;
  noteCounter = 0;
}






