var material = false;
var body = document.getElementsByTagName('body')[0];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("style-toggle").addEventListener("click", function() {
        console.log("toggle");
        if(!material) {
            body.className = "material"
            material = true;
        } else {
            body.className = "";
            material = false;
        }
    });
});
