// window.onload function() {
//
  showAbout = document.getElementById("about_link");
  aboutInfo = document.getElementById("about");
  showAbout.addEventListener("click", dummyFunction)
  // showAbout.addEventListener("click", show(aboutInfo));
  
  showConcerts = document.getElementById("concerts_link");
  concertInfo = document.getElementById("concerts");
  showConcerts.addEventListener("click", show(concertInfo));
  
  showAlbums = document.getElementById("albums_link");
  albumInfo = document.getElementById("discography");
  showAlbums.addEventListener("click", show(albumInfo));
  
  
  function dummyFunction(){
    showAbout.style.fontWeight = "900";
  }
  
  // function show(elements) {
  //   elements.style.display = "block";
  //
  // } //end of showInfo function
  //
// } //end of on.load