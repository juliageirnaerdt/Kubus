
var slides = $('.slide');

var selectedimg = 0;
var videos = [];

// Move the last slide before the first so the user is able to immediately go backwards
slides.first().before(slides.last());

$('button').on('click', function() {
  // Get all the slides again
  slides = $('.slide');
  // Register button
  var button = $(this);
  // Register active slide
  var activeSlide = $('.active');

  // Next function
    if (button.attr('id') == 'next') {
      // Move first slide to the end so the user can keep going forward
      slides.last().after(slides.first());
      // Move active class to the right

        if (selectedimg == videos.length - 1) {
             selectedimg = 0;
             videoslide(selectedimg);
          } else {
            selectedimg += 1;
            videoslide(selectedimg);
          }
        console.log(selectedimg);
  }

  // Previous function
  if (button.attr('id') == 'previous') {
    // Move the last slide before the first so the user can keep going backwards
    slides.first().before(slides.last());
    // Move active class to the left
    if (selectedimg == 0) {
         selectedimg = videos.length - 1;
         videoslide(selectedimg);
      } else {
        selectedimg -= 1;
        videoslide(selectedimg);
      }
    console.log(selectedimg);
  }

});

var requestURL = 'videodata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var data = request.response;
  videodata(data);
}



function videodata(jsonObj) {
  var video = jsonObj['videos']

  for (var i = 0; i < video.length; i++) {


     videos.push(video[i].thumbnail);
  }

   videoslide();
}

function videoslide(){
  var img = document.getElementById('test');
  var newimg = new Image;
  newimg.onload = function(){
  img.src = this.src;
  }

  var prevImg = document.getElementById('prev');
  var previmg = new Image;
  previmg.onload = function(){
  prevImg.src = this.src;
  }

    var nextImg = document.getElementById('next');
    var nextimg = new Image;

    nextimg.onload = function(){
    nextImg.src = this.src;
    }

  var volgende = selectedimg + 1;
  var vorige = selectedimg - 1;

  newimg.src = videos[selectedimg];
  previmg.src = videos[vorige];
  nextimg.src = videos[volgende];
}
