window.onload = init();
let sec=0,min=0,hr=0,id;

let inter = ()=>{
    
}
function init() {
    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");
    const seconds = document.querySelector("#sec");
    const minutes = document.querySelector("#mm");
    const hour = document.querySelector("#hh");

    resetBtn.addEventListener("click",() =>{
        clearInterval(id);
        min=0;
        hr=0;
        sec=0;
        seconds.innerHTML=`${sec} sec`;
        minutes.innerHTML=`${min} min`;
        hour.innerHTML=`${hr} hr`;
    })

    startBtn.addEventListener("click",()=>{
        startBtn.backgroundColor="#blue";
        id= setInterval(function () {
            sec+=1
            seconds.innerHTML=`${sec} sec`;
            min=Math.round(sec/60);
            minutes.innerHTML=`${min} min`;
            hr=Math.round(min/60);
            hour.innerHTML=`${hr} hr`;
        }, 1000);

        }
    )
    stopBtn.addEventListener("click",()=>{
        clearInterval(id);
        
    })
    
    
}