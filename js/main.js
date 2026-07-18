function showDeer(){

    document
    .getElementById("deer-message")
    .classList
    .add("show");
    
    }
    
    
    let logoClicks = 0;
    
    let clickTimer;
    
    
    document.getElementById("cloudButton").addEventListener("click",()=>{
    
    
    logoClicks++;
    
    
    clearTimeout(clickTimer);
    
    
    
    clickTimer=setTimeout(()=>{
    
    logoClicks=0;
    
    },1500);
    
    
    
    if(logoClicks === 3){
    
    
    document.body.style.transition="opacity 1s ease";
    
    document.body.style.opacity="0";
    
    
    
    setTimeout(()=>{
    
    
    window.location.href="cloudroom.html";
    
    
    },1000);
    
    
    }
    
    
    });
