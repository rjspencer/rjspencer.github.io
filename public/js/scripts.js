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

    var thumbs = document.getElementsByClassName('thumb');

    for(var i = 0; i < thumbs.length; i++) {
        var thumb = thumbs[i];
        var popup = thumb.parentNode.getElementsByClassName('popup')[0];

        thumb.addEventListener("click", function() {
            var popup = this.parentNode.getElementsByClassName('popup')[0];
            popup.className = "popup active";
        });
        popup.addEventListener("click", function() {
            this.className = "popup";
        });
    }
});
