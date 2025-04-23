const fisk = document.getElementById("fisk");
const storFisk = document.getElementById("storFisk");
const tekstBoks = document.getElementById("tekstBoks");
const musik = document.querySelector("audio");
let fiskVenstre = 0;

setInterval(fiskRykkerSig, 10);

function fiskRykkerSig(){
   if (fiskVenstre < window.innerWidth){
    fiskVenstre += 1;
    fisk.style.left = fiskVenstre + "px";}
    else{
        fiskVenstre = 0; 
        fisk.style.left = fiskVenstre + "px";
    }
}

function visStorFisk() {
    storFisk.style.display = "block";
    fisk.style.display = "none";
    tekstBoks.style.display = "block";
    musik.play();

}

// Når man klikker på den store fisk, går vi "tilbage"
storFisk.addEventListener("click", function() {
    storFisk.style.display = "none";
    fisk.style.display = "block";
    tekstBoks.style.display = "none";
    musik.pause();
    musik.currentTime = 0;
    bevægelseInterval = setInterval(fiskRykkerSig);
});



//bobbel fisk
const fisk2 = document.getElementById("fisk2");
let fiskHoejre1 = window.innerWidth;

setInterval(fiskRykkerSigModVenstre1, 20);

function fiskRykkerSigModVenstre1() {
    if (fiskHoejre1 > -100) { // vi antager fisken er ca. 100px bred
        fiskHoejre1 -= 1;
        fisk2.style.left = fiskHoejre1 + "px";
    } else {
        fiskHoejre1 = window.innerWidth; // reset helt til højre
        fisk2.style.left = fiskHoejre1 + "px";
    }
}


//blå og gul fisk
const fisk3 = document.getElementById("fisk3");
let fiskHoejre = window.innerWidth;

setInterval(fiskRykkerSigModVenstre, 10);

function fiskRykkerSigModVenstre() {
    if (fiskHoejre > -100) { // vi antager fisken er ca. 100px bred
        fiskHoejre -= 1;
        fisk3.style.left = fiskHoejre + "px";
    } else {
        fiskHoejre = window.innerWidth; // reset helt til højre
        fisk3.style.left = fiskHoejre + "px";
    }
}




