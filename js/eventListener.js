let PATH = './assets/gulingtangan-notes/';
let FILE_EXTENSION = '.wav';
let sustain = 0;
//declaration
let guling = document.querySelectorAll(".pots:not(.empty)");

<<<<<<< HEAD
let guling = document.querySelectorAll(".pots:not(empty)");
=======
>>>>>>> e7c2e7e80706cf2edb57cbe93b45ac4d8feefb5a

let keyArray = ["s", "d", "g", "h", "j", "z", "x", "c", "v", "b", "n", "m", ","];

let urlsList = new Object;
let keyNoteMap = new Object;
guling.forEach(function (gulingtangan, index) {
    let note = gulingtangan.id;

<<<<<<< HEAD
let notes=[
    {
        noteId: "Db4",
        note: "./assets/gulingtangan-notes/Db4.wav"
    }
    ,   
    {
        noteId: "Eb4",
        note: "./assets/gulingtangan-notes/Eb4.wav"
    }
    ,
    {
        noteId: "Gb4",
        note: "./assets/gulingtangan-notes/Gb4.wav"
    }
    ,
    {
        noteId: "Ab4",
        note: "./assets/gulingtangan-notes/Ab4.wav"
    }
    ,
    {
        noteId: "Bb4",
        note: "./assets/gulingtangan-notes/Bb4.wav"
    }
    ,
    {
        noteId: "C4",
        note: "./assets/gulingtangan-notes/C4.wav"
    }
    ,
    {
        noteId: "D4",
        note: "./assets/gulingtangan-notes/D4.wav"
    }
    ,
    {
        noteId: "E4",
        note: "./assets/gulingtangan-notes/E4.wav"
    }
    ,
    {
        noteId: "F4",
        note: "./assets/gulingtangan-notes/F4.wav"
    }
    ,
    {
        noteId: "G4",
        note: "./assets/gulingtangan-notes/G4.wav"
    }
    ,
    {
        noteId: "A4",
        note: "./assets/gulingtangan-notes/A4.wav"
    }
    ,
    {
        noteId: "B4",
        note: "./assets/gulingtangan-notes/B4.wav"
    }
    ,
    {
        noteId: "C5",
        note: "./assets/gulingtangan-notes/C5.wav"
    }

]
=======
    // keyNoteMap FOR MAPPING KEYBOARD KEYS TO ITS NOTE
    keyNoteMap[keyArray[index]] = note;
>>>>>>> e7c2e7e80706cf2edb57cbe93b45ac4d8feefb5a

    // urlsList FOR MAPPING NOTE TO ITS URL
    urlsList[note] = note + FILE_EXTENSION;

<<<<<<< HEAD
guling.forEach(function(gulingtangan){
    gulingtangan.addEventListener("click", function(){
//      gulingtangan.children[1].play();
        for(i=0; i<notes.length;i++){
            if((notes[i].noteId)===(gulingtangan.id)){
                playNote(notes[i].note);
            }
        }
    })
})

function playNote(note){
    let audio = new Audio(note);
    audio.play();
}

//gulingtangan keypress
=======
    //MOUSE CLICK EVENT LISTENER
    gulingtangan.addEventListener("mousedown", function () {
        playNote(note);
    })
})

function playNote(note) {
    gulingtangan.triggerAttackRelease(note, sustain);
}
>>>>>>> e7c2e7e80706cf2edb57cbe93b45ac4d8feefb5a

//KEYBOARD KEYS EVENT LISTENER
document.addEventListener("keypress", logKey);
<<<<<<< HEAD

let keyArray = ["s", "d", "g", "h", "j", "z", "x", "c", "v", "b", "n", "m", ","];

function logKey(e){
    for(i=0; i<keyArray.length; i++){
        if(e.key === keyArray[i]){
            playNote(notes[i].note);
        }
=======
function logKey(e) {
    if (keyNoteMap[e.key]) {
        let note = keyNoteMap[e.key];
        playNote(note);
>>>>>>> e7c2e7e80706cf2edb57cbe93b45ac4d8feefb5a
    }
}

let loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.classList.add("hidden");
})