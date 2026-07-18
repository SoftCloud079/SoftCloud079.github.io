function enterRoom(){


    let welcome=document.getElementById("welcome");
    
    let inside=document.getElementById("inside");
    
    let credit=document.getElementById("musicCredit");
    
    
    
    welcome.classList.remove("show");
    
    welcome.classList.add("hide");
    
    
    
    setTimeout(()=>{
    
    
    inside.classList.remove("hide");
    
    inside.classList.add("show");
    
    
    credit.classList.add("show-credit");
    
    
    },1400);
    
    
    
    let music=document.getElementById("music");
    
    music.volume=.25;
    
    music.play();
    
    roomEntered = true;
    
    resetIdle();
    
    }
    
    
    
    
    
    function muteMusic(){
    
    
    let music=document.getElementById("music");
    
    let button=document.getElementById("muteButton");
    
    
    music.muted=!music.muted;
    
    
    
    if(music.muted){
    
    button.innerHTML="Unmute music";
    
    }
    
    else{
    
    button.innerHTML="Mute music";
    
    }
    
    
    }
    
    
    
    
    
    function leaveRoom(){
    
    let message=document.getElementById("exitMessage");
    
    let music=document.getElementById("music");
    
    
    message.classList.add("show");
    
    
    document.body.classList.add("fade-out");
    
    
    let fadeMusic=setInterval(()=>{
    
    if(music.volume > 0.02){
    
    music.volume-=0.02;
    
    }else{
    
    clearInterval(fadeMusic);
    
    music.pause();
    
    }
    
    },100);
    
    
    
    setTimeout(()=>{
    
    window.location.href="index.html";
    
    },6000);
    
    
    }
    
    
    
    
    
    const logo=document.getElementById("logo");
    
    const room=document.querySelector(".room");
    
    
    let idleTimer;
    
    let roomEntered = false;
    
    
    
    ["mousemove","mousedown","keypress","touchstart","scroll"].forEach(event=>{
    
        document.addEventListener(event, () => {
    
            if(roomEntered){
    
                resetIdle();
    
            }
    
        });
    
    });
    
    
    
    
    
    function resetIdle(){
    
        logo.style.opacity = "1";
    
        room.style.opacity = "1";
    
        document.body.style.cursor = "default";
    
        clearTimeout(idleTimer);
    
    
    
        idleTimer = setTimeout(() => {
    
    
            logo.style.opacity = "0";
    
            room.style.opacity = "0";
    
            document.body.style.cursor = "none";
    
    
        },4000);
    
    
    }
    
    
    
    
    
    async function toggleFullscreen(){
    
    
    const button=document.getElementById("fullscreenButton");
    
    
    
    if(!document.fullscreenElement){
    
    
    await document.documentElement.requestFullscreen();
    
    
    button.innerHTML="Exit Fullscreen";
    
    
    }
    
    else{
    
    
    await document.exitFullscreen();
    
    
    button.innerHTML="Enter Fullscreen";
    
    
    }
    
    
    }
    
    
    
    
    
    document.addEventListener("fullscreenchange",()=>{
    
    
    const button=document.getElementById("fullscreenButton");
    
    
    
    if(document.fullscreenElement){
    
    
    button.innerHTML="Exit Fullscreen";
    
    
    }
    
    else{
    
    
    button.innerHTML="Enter Fullscreen";
    
    
    }
    
    
    });
