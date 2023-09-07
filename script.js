var encEmail = "ZW1haWxAYWRkcmVzcy5jb20=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));