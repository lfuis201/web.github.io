var vid = document.getElementById("myVideo");
var vid2 = document.getElementById("myVideo2");
var vid3 = document.getElementById("myVideo3");
var vid4 = document.getElementById("myVideo4");
var fillBar = document.getElementById("fill");

var currentTime = document.getElementById("currentTime");

var volumeSlider = document.getElementById("volume");

function playOrPause(){
    
    if(vid.paused){
        vid.play();
        $("#playBtn").attr("src","vid/Pause.png");
    }
    else{
        vid.pause();
        $("#playBtn").attr("src","vid/Play.png");
    }
}

vid.addEventListener('timeupdate',function(){
    
    var position = vid.currentTime / vid.duration;
        
    fillBar.style.width = position * 100 +'%';
    
    convertTime(Math.round(vid.currentTime));  //convert decimal no into intiger
    
    if(vid.ended){
        $("#playBtn").attr("src","vid/Play.png");
    }
});

function convertTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;
            
            totalTime(Math.round(vid.duration));
        }
        
        function totalTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec;
        }


function changeVolume(){
    
    vid.volume = volumeSlider.value;
    
    if(volumeSlider.value == 0){
        
        $("#speaker").attr("src","vid/Mute.png");
    }
    else{
        $("#speaker").attr("src","vid/Speaker.png");
    }
}

