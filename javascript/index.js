// Here we're going to move the active class between the slides. You can do this however you want, but for brevity I'm using JQuery.


//  $.getJSON( "videodata.json", function( json ) {
  //  console.log( "JSON Data received, name is " + json.videos);
// });

//var data = JSON.parse(videos);



// Get all the slides
var slides = $('.slide');

var selectedimg = 0;

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

    selectedimg += 1;
    videoslide(selectedimg);
  }

  // Previous function
  if (button.attr('id') == 'previous') {
    // Move the last slide before the first so the user can keep going backwards
    slides.first().before(slides.last());
    // Move active class to the left
    selectedimg -= 1;
    videoslide(selectedimg);
  }
});

var requestURL = 'http://i392713.hera.fhict.nl/slider/videodata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var data = request.response;
  videodata(data);
  //showHeroes(data);
}

var videos = [];

function videodata(jsonObj) {
  var video = jsonObj['videos']
  // var videos = [];

  for (var i = 0; i < video.length; i++) {
      //console.log( "JSON Data received, name is " + video[i].name);

     videos.push(video[i].thumbnail);
  }
   console.log(videos);
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

  console.log(selectedimg);


  var volgende = selectedimg + 1;
  var vorige = selectedimg - 1;

  console.log(vorige);
    console.log(volgende);

  newimg.src = videos[selectedimg];
  previmg.src = videos[vorige];
  nextimg.src = videos[volgende];
}
