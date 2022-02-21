function changeNavBar(){
 const x = document.getElementById("nav");
if (x.className === "nav") {
 x.className += " responsive";
} else {
 x.className = "nav";
}
}
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('prtcls', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
