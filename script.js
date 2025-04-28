const neonColors = [
    "#FFD700", // Bright Gold
    "#FF6347", // Bright Tomato Red
    "#FF4500", // Bright Orange Red
    "#32CD32", // Bright Lime Green
    "#1E90FF", // Bright Dodger Blue
    "#FF1493", // Bright Deep Pink
    "#00BFFF", // Bright Deep Sky Blue
    "#8A2BE2", // Bright Blue Violet
    "#FF8C00"  // Bright Dark Orange
  ];
  


function loading() {
    const loadingScreen = document.querySelector(".loadingScreen");
    const container = document.querySelector(".container");
    loadingScreen.childNodes[1].style.transform = "scale(1)";

    setTimeout(() => {

        container.style.opacity = 1;
        loadingScreen.style.display = "none";
    }, 5000);
    
}

loading(); 


function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);

    if (!audio || !keyElement) return; 
    audio.currentTime = 0;
    keyElement.style.backgroundColor = neonColors[Math.floor(Math.random() * neonColors.length)];

    audio.play(); 
    setTimeout(() => {
        keyElement.style.backgroundColor = ""; 
    }, 500); 
}



document.querySelector(".keys").addEventListener("click", function(e) {
    const key = e.target.closest(".key").dataset.key;
    if (!key) return;
    playSound(key); 
})

window.addEventListener("keydown", function(e) {
    const key = e.keyCode;
    playSound(key);
})


