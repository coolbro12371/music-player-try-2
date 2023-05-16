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
    {
        artistName: "Shmerk",
        songName:"Lies",
        img:"images/shmerklies.jpg",
        music:"musics/shmerk_lies_official_music_video_mp3_73185.mp3"
    },
    {
        artistName: "Tory Lanez",
        songName:"She Make It Clap Freestyle",
        img:"images/she make it clap free style.jpg",
        music:"musics/tory_lanez_she_make_it_clap_freestyle_lyrics_mp3_74166.mp3"
    },
    {
        artistName: "jaybexo",
        songName:"telly man",
        img:"images/telly man.jpg",
        music:"musics/telly_man_mp3_74052.mp3"
    },
    {
        artistName: "Drake",
        songName:"Do Not Disturb",
        img:"images/do not disturb.jpg",
        music:"musics/drake_do_not_disturb_mp3_73746.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"Lean Wit Me",
        img:"images/lean wit me.jpg",
        music:"musics/juice_wrld_lean_wit_me_official_music_video_mp3_74241.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"In My Head",
        img:"images/in my head jw.jpg",
        music:"musics/juice_wrld_in_my_head_official_music_video_mp3_74193.mp3"
    },
    {
        artistName: "Lil Uzi Vert",
        songName:"Erase Your Social",
        img:"images/erase your social.jpg",
        music:"musics/lil_uzi_vert_erase_your_social_produced_by_don_cannon_+_lyle_leduff_mp3_73798.mp3"
    },
    {
        artistName: "Polo G",
        songName:"Flex ft. Juice WRLD",
        img:"images/FLEX JUICE WRLD.jpg",
        music:"musics/polo_g_flex_official_audio_ft._juice_wrld_mp3_78125.mp3"
    },
    {
        artistName: "Playboi Carti",
        songName:"Flex",
        img:"images/FLEX PBC.jpg",
        music:"musics/playboi_carti_flex_audio_ft._leven_kali_mp3_78010.mp3"
    },
    {
        artistName: "Kendrick Lamar",
        songName:"Pray For Me",
        img:"images/pray for me.jpg",
        music:"musics/the_weeknd_kendrick_lamar_pray_for_me_lyric_video_mp3_77020.mp3"
    },
    {
        artistName: "Gunna",
        songName:"Drip Or Drown",
        img:"images/Drip Or Drown1.jpg",
        music:"musics/gunna_drip_or_drown_official_video_mp3_77694.mp3"
    },
    {
        artistName: "Travis Scott",
        songName:"YOSEMITE",
        img:"images/YOSEMITE.jpg",
        music:"musics/travis_scott_yosemite_audio_mp3_49237.mp3"
    },
    {
        artistName: "Lil Baby",
        songName:"Drip Too Hard ft. Gunna",
        img:"images/drip to hard.jpg",
        music:"musics/lil_baby_gunna_drip_too_hard_mp3_62573.mp3"
    },
    {
        artistName: "Juice WRLD",
        songName:"Victorious - Unrealeased",
        img:"images/victorious.jpg",
        music:"musics/juice_wrld_victorious_unreleased_mp3_74249.mp3"
    },
    {
        artistName: "Lil Yachty",
        songName:"Yacht Club",
        img:"images/yacht club.jpg",
        music:"musics/lil_yachty_yacht_club_audio_ft._juice_wrld_mp3_74758.mp3"
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
