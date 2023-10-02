
var audioEvnentListener = new Audio();
var masterPlay = document.getElementById('masterPlay');
var prevPlay = document.getElementById('previous');
var nextPlay = document.getElementById('next');
let progressBar = document.getElementById('progressBar');
let songList = document.getElementsByClassName('songList');
let containerLeft = document.getElementsByClassName('container-left')[0];

var id = 0;

var songListArr = [
    { songName: 'one song', songCover: 'covers/1.jpg', filepath: "songs/1.mp3" },
    { songName: 'two song', songCover: 'covers/2.jpg', filepath: "songs/2.mp3" },
    { songName: 'three song', songCover: 'covers/3.jpg', filepath: "songs/3.mp3" },
    { songName: 'four song', songCover: 'covers/4.jpg', filepath: "songs/4.mp3" },
    { songName: 'nine song', songCover: 'covers/9.jpg', filepath: "songs/9.mp3" },
];

songListArr.forEach((element, i) => {
    
    // var duration;
    // audioEvnentListener.src = element.filepath;
    // audioEvnentListener.addEventListener('loadedmetadata', function() {
    //     duration = audioEvnentListener.duration;
    //     console.log("Audio duration: " + duration + " seconds");
    // });
    // let duration = audioEvnentListener.duration;
    // console.log(duration);
    // progressBar.max = duration;
    let songDuration = document.createElement('div');
    songDuration.className = "song-length";
    // songDuration.textContent = duration;

    let img = document.createElement('img');
    img.src = songListArr[i].songCover;

    let songLogo = document.createElement('div');
    songLogo.className = "song-logo";
    songLogo.appendChild(img);

    let songName = document.createElement('div');
    songName.className = "song-name";
    songName.id = i;
    songName.textContent = songListArr[i].songName;

    let songList = document.createElement('div');
    songList.className = "song-list";
    songList.addEventListener('click', () => {
        playSong(i);
    });
    containerLeft.appendChild(songList);

    songList.appendChild(songLogo);
    songList.appendChild(songName);
    songList.appendChild(songDuration);
    
});



// 1. create a child div
// 2. append it in parent div



audioEvnentListener.src = "songs/4.mp3";
// console.log(songListArr);

masterPlay.addEventListener('click', () => {
    console.log('play song btn clicked');
    if (audioEvnentListener.paused) {
        audioEvnentListener.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }
    else {
        console.log('btn paused pressed')
        audioEvnentListener.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }

});


progressBar.min = 0;

audioEvnentListener.addEventListener('timeupdate', () => {
    progressBar.value = audioEvnentListener.currentTime;
});

progressBar.addEventListener('change', () => {
    audioEvnentListener.currentTime = progressBar.value;
});


// console.log(audioEvnentListener.duration);

prevPlay.addEventListener('click',()=>{
    playSong(i-1);

});
nextPlay.addEventListener('click',()=>{
    playSong(i+1);
});

// play when click song list
function playSong(id) {
    console.log(id);
    audioEvnentListener.src = songListArr[id].filepath;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    audioEvnentListener.play();
}