
//counter
var imagecounter = 0;
var selectedimg = 0;
var counter = 1;
var selectedvideo = -1;
var videocounter = 0;
// array video thumbnails
var videos = [];
var playVideos = [];

const slide = document.querySelector('#slider2');
const images = document.querySelectorAll('#slider2 img');


const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const size = 1920;

slide.style.transform = 'translateX('+ (-size * selectedimg ) + 'px)';

// klik functie next button slider
next.addEventListener('click' , () => {

  if (selectedimg == counter){
    loadImage();

    slide.style.transition = "transform 0.5s ease-in-out";
    selectedimg++;

    slide.style.transform = 'translateX('+ (-size * selectedimg ) + 'px)';
    console.log(selectedimg);
    counter += videos.length - 3;

  }else {
      slide.style.transition = "transform 0.5s ease-in-out";
      selectedimg++;

      slide.style.transform = 'translateX('+ (-size * selectedimg ) + 'px)';
      console.log(selectedimg);
  }

//   loadVideo();
});




//Ophalen JSON file
  var requestURL = 'data/videodata.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);

  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var data = request.response;
    videodata(data);
}


// zet Json data in array
function videodata(jsonObj) {
  var video = jsonObj['videos']
  var playVideo = jsonObj['videos']

  for (var i = 0; i < video.length; i++) {
     videos.push(video[i].thumbnail);
     playVideos.push(playVideo[i].videourl);
  }

   loadImage();
   console.log(playVideos[0]);
}


//Laad array van images in.
function loadImage(){

  for (var i = 0; i < videos.length; ++i) {
  /*imagecounter++;
    var video = document.createElement("video");
    video.setAttribute("id", "video"+ imagecounter)
    video.src = playVideos[i];
    console.log(video);*/

   var vid = document.getElementById("slider2");

     var img = document.createElement("img");
      img.src = videos[i];
      var image = document.getElementById("slider2");

      image.appendChild(img);
    }


/*for (var i = 1; i < vid.childElementCount + 1; ++i) {

videocounter++;
if(videocounter > videos.length -1){
  videocounter = 0;
}
    document.getElementById("video2").poster = videos[videocounter];

video.autoplay = true;

    video.load();
}*/

/*    selectedvideo++
    if (selectedvideo > videos.length - 1){
      selectedvideo = 0
  }

      setTimeout(function(){
        var video = document.createElement("video");
        video.src = playVideos[selectedvideo];
        console.log(video);
       var vid = document.getElementById("slider2");

       img.parentNode.replaceChild(video, img);

      //  console.log(img.replaceWith(video));
        video.autoplay = true;
      }, 3000);*/

}

//videos inladen
function loadVideo(){
  selectedvideo++
  if (selectedvideo > videos.length - 1){
    selectedvideo = 0
}
console.log(playVideos[selectedvideo]);

}
