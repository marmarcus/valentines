var img = document.getElementById("cat");

document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "images/catimg1.jpg",
        "images/catimg2.jpeg",
        "images/catimg3.jpg",
        "images/catimg4.jpg",
        "images/catimg5.jpg"
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];

    img.src = randomImage;
});

const button = document.getElementById("no");
const secret = document.getElementById("hiddenmsg");
var i = 0;

button.addEventListener("mouseover", function() {
    if (button.getAttribute('type') === 'button') {
        var bodyWidth = document.body.clientWidth;
        var bodyHeight = document.body.clientHeight;
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var randomLeft = Math.floor(Math.random() * (bodyWidth - buttonWidth));
        var randomTop = Math.floor(Math.random() * (bodyHeight - buttonHeight));

        button.style.position = "absolute";
        button.style.left = randomLeft + "px";
        button.style.top = randomTop + "px";

        button.style.width = buttonWidth * .8 + "px";
        button.style.height = buttonHeight * .8 + "px";


        i++;

        if(i == 5) {
            secret.style.visibility = "visible";
            button.style.display = "none";
            img.src = "images/devilcat.webp";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("yes");
    const content = document.getElementById("question");
    const newContent = document.getElementById("saidyes");

    submitBtn.addEventListener("click", function() {
        content.style.display = "none";
        document.body.style.backgroundImage = "none";
        newContent.style.display = "block";
    });
});