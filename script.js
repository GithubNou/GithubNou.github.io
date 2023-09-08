// define your images here
var images = [
  "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-2.jpg?raw=true",
  "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-17.jpg?raw=true",
  "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-8.jpg?raw=true"
];

// initialize the index of the current image
var currentIndex = Math.floor(Math.random() * images.length);

// function to change the image to the next one
function changeImage() {
  // increment the index
  currentIndex++;
  
  // if the index exceeds the length of the images array, reset it to 0
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  
  // get the next image URL based on the current index
  var nextImage = images[currentIndex];
  
  // make the URL into a proper image tag
  var image = "<img src='" + nextImage + "'>";
  
  // update the image in the div
  document.getElementById("img-load").innerHTML = image;
}

// add event listener to the image element
document.getElementById("img-load").addEventListener("click", changeImage);

// display the initial random image
var randomImage = images[currentIndex];
var image = "<img src='" + randomImage + "'>";
document.getElementById("img-load").innerHTML = image;

var encEmail = "ZW1haWxAYWRkcmVzcy5jb20=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
