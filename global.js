window.onload = function() {

  var showAbout = document.getElementById("about_link");
  var aboutBox = document.getElementById("about_link_box");
  var aboutInfo = document.getElementById("about");
  showAbout.addEventListener("click", function() {
    aboutInfo.style.display = "block";
    concertInfo.style.display = "none";
    albumInfo.style.display = "none";
  });
  showAbout.addEventListener("click", function() {
    aboutBox.className = "active";
    concertBox.className = "inactive";
    albumsBox.className = "inactive";
  });

  var showConcerts = document.getElementById("concerts_link");
  var concertBox = document.getElementById("concerts_link_box");
  var concertInfo = document.getElementById("concerts");
  showConcerts.addEventListener("click", function() {
    aboutInfo.style.display = "none";
    concertInfo.style.display = "block";
    albumInfo.style.display = "none";
  });
  showConcerts.addEventListener("click", function() {
    aboutBox.className = "inactive";
    concertBox.className = "active";
    albumsBox.className = "inactive";
  });

  var showAlbums = document.getElementById("albums_link");
  var albumsBox = document.getElementById("albums_link_box")
  var albumInfo = document.getElementById("discography");
  showAlbums.addEventListener("click", function() {
    aboutInfo.style.display = "none";
    concertInfo.style.display = "none";
    albumInfo.style.display = "block";
  });
  showAlbums.addEventListener("click", function() {
    aboutBox.className = "inactive";
    concertBox.className = "inactive";
    albumsBox.className = "active";
  });

  
  // function dummyFunction(){
  //   showAbout.style.fontWeight = "900";
  // }
  //
  // function show(elements) {
  //   elements.style.display = "block";
  //
  // } //end of showInfo function

} //end of on.load