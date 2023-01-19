localStorage.setItem("activated", "true");
const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("video", "true");
  let spencerTrap = window.open("https://maps.triangledayschool.com/trap/");
});
setInterval(function() {
  if (localStorage.getItem("activated") === "false") {
    audioPlayer.pause();
  };
  if (localStorage.getItem("video") === "true") {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  };
}, 100);
