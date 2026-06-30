async function notifyTelegram() {

    try {

        await fetch("https://patient-union-72c4birthday-alert.ff21715402.workers.dev/");

    } catch (error) {

        console.log(error);

    }

}
/* ==========================================================
   PREMIUM BIRTHDAY WEBSITE V3.0
   script.js - Part 1
   Created By : Chaithanya (Chotu)
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const scenes = document.querySelectorAll(".scene");

const loadingScreen = document.getElementById("loading-screen");
const introScreen = document.getElementById("intro-screen");
const passwordScreen = document.getElementById("password-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const letterScreen = document.getElementById("letter-screen");
const memoriesScreen = document.getElementById("memories-screen");
const cakeScreen = document.getElementById("cake-screen");
const giftScreen = document.getElementById("gift-screen");
const finalScreen = document.getElementById("final-screen");
/* ===========================================
   Videos
===========================================*/

const videoScreen = document.getElementById("video-screen");

const memoryVideo = document.getElementById("memoryVideo");

const videoTitle = document.getElementById("videoTitle");

const videoMessage = document.getElementById("videoMessage");

const giftVideo = document.getElementById("giftVideo");

const giftVideoTitle = document.getElementById("giftVideoTitle");

/* ==========================================================
   BUTTONS
========================================================== */

const unlockBtn = document.getElementById("unlockBtn");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const blowBtn = document.getElementById("blowBtn");
const giftBtn = document.getElementById("giftBtn");

/* ==========================================================
   PASSWORD
========================================================== */

const day = document.getElementById("day");
const month = document.getElementById("month");
const passwordMessage = document.getElementById("passwordMessage");

/* ==========================================================
   LETTER
========================================================== */

const letterContent = document.getElementById("letterContent");

/* ==========================================================
   MEMORIES
========================================================== */

const slideshow = document.getElementById("slideshow");
const gallery = document.getElementById("gallery");

/* ==========================================================
   LIGHTBOX
========================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

/* ==========================================================
   MUSIC
========================================================== */

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

/* ==========================================================
   SHOW SCENE
========================================================== */

function showScene(sceneId){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    document.getElementById(sceneId).classList.add("active");

}

/* ==========================================================
   WEBSITE START
========================================================== */

window.addEventListener("load",()=>{

    notifyTelegram();   // 👈 Add this line

    showScene("loading-screen");

    setTimeout(()=>{

        showScene("intro-screen");

    },2500);

    setTimeout(()=>{

        showScene("password-screen");

    },6500);

});
/* ==========================================================
   PASSWORD CHECK
========================================================== */

unlockBtn.addEventListener("click",()=>{

    const selectedDay = day.value;
    const selectedMonth = month.value;

    if(selectedDay==="1" && selectedMonth==="July"){

        passwordMessage.style.color="#00ff99";
        passwordMessage.innerHTML="✨ Access Granted ✨";

        song1.volume=0.6;

        song1.play().catch(()=>{});

        setTimeout(()=>{

            showScene("birthday-screen");

        },1500);

    }

    else{

        passwordMessage.style.color="#ff4f9a";
        passwordMessage.innerHTML = "🤭 Chota Don... You forgot your own birthday? Try again ❤️";

    }

});

/* ==========================================================
   OPEN LETTER
========================================================== */

startBtn.addEventListener("click",()=>{

    showScene("letter-screen");

});
/* ==========================================================
   SCRIPT.JS PART 2
   LETTER • TYPEWRITER • OPEN MEMORIES BUTTON
========================================================== */

/* ==========================================================
   LETTER TEXT
========================================================== */

const letter = `Dear Chota Don ❤️

Happy 19th Birthday!

Today is all about celebrating YOU.

Thank you for filling our family with happiness,
love and beautiful memories.

Watching you grow into such a wonderful person
has been one of the greatest blessings in my life.

Keep smiling.

Keep believing in yourself.

Keep chasing your dreams.

No matter how old you become...

You'll always be my little Chota Don.

I wish you happiness,
good health,
success,
peace,
and endless smiles.

Happy Birthday Once Again ❤️

With Love,

❤️ Your Brother ❤️

Chaithanya (Chotu)
`;

/* ==========================================================
   TYPEWRITER VARIABLES
========================================================== */

let letterIndex = 0;
let typingSpeed = 40;

/* ==========================================================
   START LETTER
========================================================== */

startBtn.addEventListener("click",()=>{

    showScene("letter-screen");

    letterContent.innerHTML = "";

    letterIndex = 0;

    nextBtn.style.display = "none";

    setTimeout(typeLetter,700);

});

/* ==========================================================
   TYPEWRITER EFFECT
========================================================== */

function typeLetter(){

    if(letterIndex < letter.length){

        letterContent.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,typingSpeed);

    }

    else{

        setTimeout(()=>{

            nextBtn.style.display="block";

            nextBtn.classList.add("fade-in");

        },800);

    }

}

/* ==========================================================
   OPEN MEMORIES
========================================================== */

nextBtn.addEventListener("click",()=>{

    nextBtn.style.display="none";

    showScene("memories-screen");

    currentPhoto = 0;

    slideshow.style.display = "flex";

    gallery.style.display = "none";

    startSlideshow();

});

/* ==========================================================
   MUSIC HELPERS
========================================================== */

function playSong1(){

    song1.volume = 0.6;

    song1.play().catch(()=>{});

}

function stopSong1(){

    song1.pause();

    song1.currentTime = 0;

}

function playSong2(){

    song2.volume = 0.6;

    song2.play().catch(()=>{});

}

function stopSong2(){

    song2.pause();

    song2.currentTime = 0;

}
/* ==========================================================
   SCRIPT.JS PART 3
   MEMORIES • SLIDESHOW • GALLERY • LIGHTBOX
========================================================== */

/* ==========================================================
   PHOTO LIST
========================================================== */

const photos = [];

for(let i = 1; i <= 17; i++){

    photos.push(`images/photo ${i}.jpeg`);

}

/* ==========================================================
   SLIDESHOW VARIABLES
========================================================== */

let currentPhoto = 0;

/* ==========================================================
   START SLIDESHOW
========================================================== */

function startSlideshow(){

    slideshow.innerHTML = "";

    gallery.innerHTML = "";

    slideshow.style.display = "flex";

    gallery.style.display = "none";

    currentPhoto = 0;

    showPhoto();

}

/* ==========================================================
   SHOW PHOTO
========================================================== */

function showPhoto(){

    slideshow.innerHTML = "";

    const img = document.createElement("img");

    img.src = photos[currentPhoto];

    img.alt = "Memory";

    img.classList.add("fade-in");

    slideshow.appendChild(img);

    currentPhoto++;

    if(currentPhoto < photos.length){

        setTimeout(showPhoto,2000);

    }

    else{

    setTimeout(()=>{

        slideshow.style.display = "none";

        showScene("video-screen");

        videoTitle.innerHTML = "🎉 Happy Birthday To You ❤️";

        videoMessage.innerHTML = "Sit back and enjoy this beautiful memory... ❤️";
        // Stop background songs
        song1.pause();
        song1.currentTime = 0;

        song2.pause();
        song2.currentTime = 0;

       // Play Video 1
        memoryVideo.src = "videos/video1.mp4";

        memoryVideo.load();

        memoryVideo.muted = false;

        memoryVideo.play().catch((err)=>{

        console.log("Video Error:", err);

    });
        
    },2000);

}
}
/* ==========================================================
   SHOW GALLERY
========================================================== */

function showGallery(){

    showScene("memories-screen");

    slideshow.style.display = "none";

    gallery.style.display = "grid";

    gallery.innerHTML = "";

    photos.forEach(photo=>{

        const img = document.createElement("img");

        img.src = photo;

        img.alt = "Memory";

        img.addEventListener("click",()=>{

            openLightbox(photo);

        });

        gallery.appendChild(img);

    });

    enableCakeButton();

}

/* ==========================================================
   LIGHTBOX
========================================================== */

function openLightbox(photo){

    lightbox.style.display = "flex";

    lightboxImage.src = photo;

}

/* ==========================================================
   CLOSE LIGHTBOX
========================================================== */

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

lightbox.addEventListener("click",(event)=>{

    if(event.target===lightbox){

        lightbox.style.display="none";

    }

});
/* ==========================================================
   SCRIPT.JS PART 4
   CAKE • CANDLES • CONFETTI
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const cake = document.getElementById("cake");
const smoke = document.getElementById("smoke");
const confettiBox = document.getElementById("confetti");

/* ==========================================================
   CREATE CONTINUE BUTTON
========================================================== */

const cakeButton = document.createElement("button");

cakeButton.innerHTML = "🎂 Make A Birthday Wish";

cakeButton.className = "next-button";

cakeButton.style.display = "none";

memoriesScreen.appendChild(cakeButton);

/* ==========================================================
   SHOW CAKE BUTTON
========================================================== */

function enableCakeButton(){

    cakeButton.style.display = "block";

    cakeButton.classList.add("fade-in");

}

/* ==========================================================
   AFTER GALLERY SHOW BUTTON
========================================================== */


/* ==========================================================
   OPEN CAKE SCREEN
========================================================== */

cakeButton.addEventListener("click",()=>{

    cakeButton.style.display="none";

    showScene("cake-screen");

});

/* ==========================================================
   BLOW CANDLES
========================================================== */

blowBtn.addEventListener("click",()=>{

    createSmoke();

    launchConfetti();

    stopSong1();

    playSong2();

    blowBtn.disabled = true;

    blowBtn.innerHTML = "🎉 Wish Made";

    setTimeout(()=>{

        showScene("gift-screen");

    },5000);

});

/* ==========================================================
   SMOKE EFFECT
========================================================== */

function createSmoke(){

    smoke.innerHTML="";

    for(let i=0;i<20;i++){

        const puff=document.createElement("div");

        puff.className="smoke";

        puff.style.left=Math.random()*180+"px";

        puff.style.animationDelay=(Math.random()*2)+"s";

        smoke.appendChild(puff);

    }

}

/* ==========================================================
   CONFETTI
========================================================== */

function launchConfetti(){

    confetti({

        particleCount:250,

        spread:120,

        origin:{ y:0.6 }

    });

}
/* ==========================================================
   SCRIPT.JS PART 5
   GIFT • FINAL MESSAGE • FIREWORKS
========================================================== */

/* ==========================================================
   GIFT VARIABLES
========================================================== */

const giftBox = document.getElementById("giftBox");
const finalMessage = document.getElementById("finalMessage");

/* ==========================================================
   FINAL MESSAGE
========================================================== */

const finalText = `❤️

Happy Birthday Once Again Chota Don ❤️

May your life always be filled with

😊 Happiness
🌸 Beautiful Memories
💖 Endless Love
🎯 Great Success
✨ Peace
🎂 Good Health

Keep Smiling...
Keep Dreaming...
Keep Shining...

Thank You For Being
The Most Wonderful Sister ❤️

Love You Forever...

❤️ Your Brother ❤️
Chaithanya (Chotu)
`;

/* ==========================================================
   OPEN GIFT
========================================================== */

giftBtn.addEventListener("click",()=>{

    giftBox.style.transform="scale(1.2) rotate(10deg)";

    giftBox.style.opacity="0";

    giftBtn.disabled=true;

    giftBtn.style.display="none";

    giftVideoTitle.style.display="block";

    giftVideo.style.display="block";

    giftVideo.play();

});
/* ==========================================================
   FINAL TYPEWRITER
========================================================== */

let finalIndex = 0;

function startFinalMessage(){

    finalMessage.innerHTML="";

    finalIndex=0;

    typeFinal();

}

function typeFinal(){

    if(finalIndex < finalText.length){

        finalMessage.innerHTML += finalText.charAt(finalIndex);

        finalIndex++;

        setTimeout(typeFinal,45);

    }

}

/* ==========================================================
   FIREWORKS
========================================================== */

function startFireworks(){

    const duration = 12000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:6,

            angle:60,

            spread:80,

            origin:{x:0}

        });

        confetti({

            particleCount:6,

            angle:120,

            spread:80,

            origin:{x:1}

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}

/* ==========================================================
   END OF PART 5
========================================================== */
/* ==========================================================
   SCRIPT.JS PART 6
   PREMIUM ANIMATIONS
========================================================== */

/* ==========================================================
   RANDOM LOVE MESSAGES
========================================================== */

const wishes = [

    "❤️ Happy Birthday Chota Don ❤️",

    "🎂 Stay Happy Forever",

    "🌸 Keep Smiling Always",

    "✨ Dreams Do Come True",

    "💖 You Are Special",

    "🎁 Enjoy Every Moment",

    "😊 Smile More, Worry Less",

    "❤️ Family Loves You"

];

function randomWish(){

    const title = document.querySelector(".final-content h1");

    if(!title) return;

    setInterval(()=>{

        const random = Math.floor(Math.random()*wishes.length);

        title.innerHTML = wishes[random];

    },4000);

}

/* ==========================================================
   FLOATING HEARTS
========================================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=0;

    const move=setInterval(()=>{

        pos+=2;

        heart.style.bottom=pos+"px";

        heart.style.opacity=1-(pos/900);

        if(pos>900){

            clearInterval(move);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,2500);

/* ==========================================================
   FLOATING SPARKLES
========================================================== */

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize="18px";

    sparkle.style.pointerEvents="none";

    sparkle.style.zIndex="998";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1800);

}

setInterval(createSparkle,900);

/* ==========================================================
   FLOATING PETALS
========================================================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-30px";

    petal.style.fontSize="28px";

    petal.style.pointerEvents="none";

    petal.style.zIndex="997";

    document.body.appendChild(petal);

    let y=-30;

    const fall=setInterval(()=>{

        y+=2;

        petal.style.top=y+"px";

        petal.style.transform=`rotate(${y}deg)`;

        if(y>window.innerHeight+40){

            clearInterval(fall);

            petal.remove();

        }

    },18);

}

setInterval(createPetal,2800);

/* ==========================================================
   FLOATING BALLOONS
========================================================== */

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.innerHTML="🎈";

    balloon.style.position="fixed";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.bottom="-60px";

    balloon.style.fontSize="35px";

    balloon.style.pointerEvents="none";

    balloon.style.zIndex="996";

    document.body.appendChild(balloon);

    let y=-60;

    const fly=setInterval(()=>{

        y+=2;

        balloon.style.bottom=y+"px";

        if(y>window.innerHeight+100){

            clearInterval(fly);

            balloon.remove();

        }

    },20);

}

setInterval(createBalloon,5000);

/* ==========================================================
   START PREMIUM EFFECTS
========================================================== */

window.addEventListener("load",()=>{

    randomWish();

});
/* ==========================================================
   SCRIPT.JS PART 7
   PREMIUM GIFT SCREEN
========================================================== */

/* ==========================================================
   GIFT VARIABLES
========================================================== */

let giftOpened = false;

/* ==========================================================
   GIFT ANIMATION
========================================================== */

giftBtn.addEventListener("click",()=>{

    if(giftOpened) return;

    giftOpened = true;

    giftBtn.disabled = true;

    giftBtn.style.display = "none";

    giftBox.style.transition = "1s";

    giftBox.style.transform = "scale(1.2) rotate(15deg)";

    giftBox.style.opacity = "0";

    confetti({

        particleCount:250,

        spread:120,

        origin:{ y:0.6 }

    });

    giftVideoTitle.style.display = "block";

    giftVideo.style.display = "block";

    giftVideo.play();

});

/* ==========================================================
   GIFT HOVER EFFECT
========================================================== */

giftBox.addEventListener("mouseenter",()=>{

    giftBox.style.transform="scale(1.05) rotate(-5deg)";

});

giftBox.addEventListener("mouseleave",()=>{

    if(!giftOpened){

        giftBox.style.transform="scale(1) rotate(0deg)";

    }

});

/* ==========================================================
   FINAL SCREEN MUSIC
========================================================== */

function playFinalMusic(){

    song2.volume = 0.4;

    song2.play().catch(()=>{});

}

/* ==========================================================
   FINAL SCREEN ENTRY
========================================================== */

finalScreen.addEventListener("transitionend",()=>{

    if(finalScreen.classList.contains("active")){

        playFinalMusic();

    }

});
/* ==========================================================
   SCRIPT.JS PART 8
   FINAL EFFECTS
========================================================== */

/* ==========================================================
   DISABLE RIGHT CLICK
========================================================== */

document.addEventListener("contextmenu",(event)=>{

    event.preventDefault();

});

/* ==========================================================
   DISABLE IMAGE DRAGGING
========================================================== */

document.querySelectorAll("img").forEach(img=>{

    img.draggable = false;

});

/* ==========================================================
   ESC CLOSES LIGHTBOX
========================================================== */

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        lightbox.style.display="none";

    }

});

/* ==========================================================
   PRELOAD PHOTOS
========================================================== */

function preloadImages(){

    photos.forEach(photo=>{

        const img=new Image();

        img.src=photo;

    });

}

preloadImages();

/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener("resize",()=>{

    if(lightbox.style.display==="flex"){

        lightboxImage.style.maxHeight="90vh";

        lightboxImage.style.maxWidth="90vw";

    }

});

/* ==========================================================
   SCROLL TO TOP
========================================================== */

function resetScroll(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",resetScroll);

});

/* ==========================================================
   PERFORMANCE
========================================================== */

window.addEventListener("blur",()=>{

    song1.pause();

    song2.pause();

});

window.addEventListener("focus",()=>{

    if(song1.currentTime>0 && song1.paused){

        song1.play().catch(()=>{});

    }

});

/* ==========================================================
   MOBILE TOUCH
========================================================== */

document.addEventListener("touchstart",()=>{

},{passive:true});

/* ==========================================================
   END PART 8
========================================================== */
/* ==========================================================
   SCRIPT.JS PART 9
   FINAL POLISH
========================================================== */

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",(event)=>{

        const ripple=document.createElement("span");

        const rect=button.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";
        ripple.style.left=(event.clientX-rect.left-size/2)+"px";
        ripple.style.top=(event.clientY-rect.top-size/2)+"px";

        ripple.className="ripple";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* ==========================================================
   PAGE TITLE ANIMATION
========================================================== */

const titles=[
    "❤️ Happy Birthday Pujitha ❤️",
    "🎂 Many Happy Returns 🎂",
    "✨ Have A Wonderful Day ✨"
];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},3000);

/* ==========================================================
   SMOOTH SCENE TRANSITIONS
========================================================== */

document.querySelectorAll(".scene").forEach(scene=>{

    scene.style.transition="opacity 0.8s ease";

});

/* ==========================================================
   END OF PART 9
========================================================== */
/* ==========================================================
   SCRIPT.JS PART 10
   FINAL OPTIMIZATION & PREMIUM FINISH
========================================================== */

/* ==========================================================
   PREVENT DOUBLE CLICKS
========================================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.disabled=true;

        setTimeout(()=>{

            button.disabled=false;

        },800);

    });

});

/* ==========================================================
   PRELOAD AUDIO
========================================================== */

window.addEventListener("load",()=>{

    song1.load();

    song2.load();

});

/* ==========================================================
   AUTO PLAY SAFETY
========================================================== */

document.addEventListener("click",()=>{

    if(song1.paused){

        song1.play().catch(()=>{});

    }

},{once:true});

/* ==========================================================
   SMOOTH IMAGE LOADING
========================================================== */

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});

/* ==========================================================
   DISABLE TEXT SELECTION
========================================================== */

document.addEventListener("selectstart",(event)=>{

    event.preventDefault();

});

/* ==========================================================
   WINDOW UNLOAD
========================================================== */

window.addEventListener("beforeunload",()=>{

    song1.pause();

    song2.pause();

});

/* ==========================================================
   THANK YOU MESSAGE
========================================================== */

console.clear();

console.log("%c❤️ Premium Birthday Website ❤️",
"color:#ff4f9a;font-size:24px;font-weight:bold;");

console.log("%cCreated By : Chaithanya (Chotu)",
"color:#FFD700;font-size:18px;");

console.log("%cMade With Love For Pujitha Reddy ❤️",
"color:#ffffff;font-size:16px;");

/* ==========================================================
   PROJECT COMPLETED
========================================================== */

console.log("🎉 Project Loaded Successfully 🎉");
/* ===========================================
   VIDEO FLOW
===========================================*/

memoryVideo.addEventListener("ended",()=>{

    if(memoryVideo.src.includes("video1.mp4")){

        videoTitle.innerHTML="❤️ Sweet Memories With Amma ❤️";

        videoMessage.innerHTML="One More Beautiful Memory... ❤️";

        memoryVideo.src="videos/video2.mp4";

        memoryVideo.load();

        memoryVideo.play();

    }

    else{

        showGallery();

    }

});
/* ===========================================
   Gift Video
===========================================*/

/* ===========================================
   GIFT VIDEO END
===========================================*/

giftVideo.addEventListener("ended",()=>{

    giftVideo.style.display="none";

    giftVideoTitle.style.display="none";

    showScene("final-screen");

    startFinalMessage();

    startFireworks();

});
