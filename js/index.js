function main(p) {
    p.size(window.innerWidth,window.innerHeight);

    with (p) {
        var x = 10;
        var draw = function() {
            noStroke();
            background(0, 0, 0);

            fill(255, 0, 115);
            rect(x, 200, 100, 20);
            rect(x + 15, 178, 70, 40);

            fill(77, 66, 66);
            ellipse(x + 25, 221, 24, 24);
            ellipse(x + 75, 221, 24, 24);

            x += 0.5;
        };
    }
}

var canvas = document.getElementById("canvas1");
var p = new Processing(canvas, main);

document.addEventListener('DOMContentLoaded', function () {
    var closeBtn =document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            p.exit();
            window.close();
        });
    }
});
