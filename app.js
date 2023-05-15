const trackCover= document.querySelector("#track_cover");
const trackArtist= document.querySelector("#track_artist");
const trackTitle= document.querySelector("#track_title");
const currentMins= document.querySelector("#current_time_mins");
const currentSecs= document.querySelector("#current_time_secs");
const trackmins= document.querySelector("#track_mins");
const tracksecs= document.querySelector("#track_secs");
const prevBtn=document.querySelector("#prev");
const playPause=document.querySelector("#play_pause");
const nextBtn= document.querySelector("#next");
const trackRange=document.querySelector("#range");
const vol=document.querySelector("#vol");
const currentTrack= document.createElement("audio");
const container= document.querySelector("#container");

let isPlaying= false;
let trackIndex= 0;

const songs=[
    {
        artistName: "Destroy Lonely",
        songName:"If Looks Could Kill",
        img:"images/Destroy_Lonely_-_If_Looks_Could_Kill.jpg",
        music:"musics/Destroy_Lonely_-_If_Looks_Could_Kill.mp3"
    },
    {
        artistName: "Die To Live",
        songName:"Juice WRLD",
        img:"images/die to live.jpg",
        music:"musics/die_to_live_mp3_72332.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"Conversations",
        img:"images/conversations juice wrld.jpg",
        music:"musics/juice_wrld_conversations_official_audio_mp3_72417.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"Legends",
        img:"images/Juice_Wrld_-_Legends.jpg",
        music:"musics/juice_wrld_legends_official_audio_mp3_72260.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"Autograph",
        img:"images/autograph.jpg",
        music:"musics/juice_wrld_autograph_on_my_line_official_audio_mp3_72049.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"moonlight",
        img:"images/moonlight.jpg",
        music:"musics/juice_wrld_moonlight_official_audio_mp3_72219.mp3"
    },
];

loadTrack(trackIndex);
setInterval(fulltime, 1000);


function loadTrack(trackIndex){
    currentTrack.src= songs[trackIndex].music;
    currentTrack.load();

    trackCover.src= songs[trackIndex].img;
    trackArtist.textContent= songs[trackIndex].artistName;
    trackTitle.textContent= songs[trackIndex].songName;
    container.style.backgroundImage= "url("+songs[trackIndex].img+")";
    volume();
};
function next(){
    if(trackIndex>=songs.length-1){
        trackIndex=0;
    }else{
        trackIndex++
    }
    loadTrack(trackIndex);
    play();
};
function prev(){
    if(trackIndex<=0){
        trackIndex=songs.length-1;
    }else{
        trackIndex--
    }
    loadTrack(trackIndex);
    play();
};
function play_pause(){
    isPlaying? pause() : play();
};
function play(){
    isPlaying= true;
    currentTrack.play();
    playPause.classList.remove("bi-play-circle");
    playPause.classList.add("bi-pause-circle");
};
function pause(){
    isPlaying= false;
    currentTrack.pause();
    playPause.classList.remove("bi-pause-circle");
    playPause.classList.add("bi-play-circle");
};
function fulltime(){
    const mins=String(Math.floor((currentTrack.duration)/60)).padStart(2,"0");
    const secs=String(Math.floor(currentTrack.duration-(mins*60))).padStart(2,"0");

    const currMins=String(Math.floor((currentTrack.currentTime)/60)).padStart(2,"0");
    const currSecs=String(Math.abs(Math.floor((currMins*60)-currentTrack.currentTime))).padStart(2,"0");

    trackmins.textContent=mins;
    tracksecs.textContent=secs;
    currentMins.textContent= currMins;
    currentSecs.textContent=currSecs;
    


    trackRange.value=currentTrack.currentTime;
    trackRange.max= currentTrack.duration;


    if(currentTrack.ended){
        next();
    };
};
function volume(){
    currentTrack.volume=vol.value/11;
};
function seek(){
    currentTrack.currentTime=trackRange.value;
};
