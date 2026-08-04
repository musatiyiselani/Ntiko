const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = "🩵";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 200);

// Old Code! 
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");
let page5 = document.getElementById("page5");
const song = document.getElementById("song");

function swap() {

    page1.style.display = "none";
    page2.style.display = "flex";

    if (!song.paused) return; // Already playing

    song.currentTime = 100.5;
    song.play().catch(err => console.log(err));
    song.volume = 0.5;

    confetti();
}
//Old Code!


// Vid1

let vid1 = document.getElementById("vid1");
let vid2 = document.getElementById("vid2");
let vid3 = document.getElementById("vid3");
let vid4 = document.getElementById("vid4");

function playVid1() {

    page2.style.display = "none";
    page4.style.display = "block";

    vid1.play()
        .catch(err => console.log("Video error:", err));

    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;

    vid1.onended = function() {
        page2.style.display = "flex";
        page4.style.display = "none";
    };
}

vid1.addEventListener("ended", function() {
    console.log("Video finished");

    page4.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid1

// Vid2

function playVid2() {

    page2.style.display = "none";
    page5.style.display = "block";

    vid2.play()
        .catch(err => console.log("Video error:", err));


    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;

    vid2.onended = function() {
        page2.style.display = "flex";
        page5.style.display = "none";
    };
}

vid2.addEventListener("ended", function() {
    console.log("Video finished");

    page5.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid2

// Vid3

function playVid3() {

    page2.style.display = "none";
    page6.style.display = "block";

    vid3.play()
        .catch(err => console.log("Video error:", err));


    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;

    vid3.onended = function() {
        page2.style.display = "flex";
        page6.style.display = "none";
    };
}

vid3.addEventListener("ended", function() {
    console.log("Video finished");

    page6.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid3

// Vid4

function playVid4() {

    page2.style.display = "none";
    page7.style.display = "block";

    vid4.play()
        .catch(err => console.log("Video error:", err));


    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;

    vid4.onended = function() {
        page2.style.display = "flex";
        page7.style.display = "none";
    };
}

vid4.addEventListener("ended", function() {
    console.log("Video finished");

    page7.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid4

// Vid5

function playVid5() {

    page2.style.display = "none";
    page3.style.display = "block";

    vid5.play()
        .catch(err => console.log("Video error:", err));

    song.pause();

    vid5.onended = function() {
        page2.style.display = "flex";
        page3.style.display = "none";
    };
}

vid5.addEventListener("ended", function() {
    console.log("Video finished");

    page3.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid5

// Vid6

function playVid6() {

    page2.style.display = "none";
    page8.style.display = "block";

    vid6.play()
        .catch(err => console.log("Video error:", err));


    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;

    vid6.onended = function() {
        page2.style.display = "flex";
        page8.style.display = "none";
    };
}

vid6.addEventListener("ended", function() {
    console.log("Video finished");

    page8.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid6

// Vid7

function playVid7() {

    page2.style.display = "none";
    page9.style.display = "block";

    vid7.play()
        .catch(err => console.log("Video error:", err));

    song.pause();

    vid7.onended = function() {
        page2.style.display = "flex";
        page9.style.display = "none";
    };
}

vid7.addEventListener("ended", function() {
    console.log("Video finished");

    page9.style.display = "none";
    page2.style.display = "flex";
});

// Done with Vid7

// Go Back!

function back() {
    console.log("Video Paused");

    vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();


    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    
    

    if (!song.paused) return; // Already playing

    song.play()
        .catch(err => console.log("Song error:", err));

    song.currentTime = 100.5;
    song.volume = 0.25;
}

// Go Back!
