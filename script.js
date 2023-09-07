// define your images here
var images = [
 "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-2.jpg?raw=true",
  "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-17.jpg?raw=true",
  "https://github.com/GithubNou/website/blob/main/cedre_ultralowres_samifarra-8.jpg?raw=true"
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("img-load").innerHTML = image;

var encEmail = "ZW1haWxAYWRkcmVzcy5jb20=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));