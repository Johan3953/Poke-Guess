var caught = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var seen = 0;
var win = 0;
var lose = 0;

$("#pokedex").text(caught);

$(".ball").on("click", function () {
    seen += Math.floor((Math.random() * 12) + 1);
    alert("You caught " + seen + " Pokemon");

    if (seen === caught) {
        alert("You caught them all! You're the very best!");
        win++;
        console.log("Battles Won: " + win);
        // window.location.reload();
        startgame();

    } else if (seen >= caught) {
        alert("You can't catch more than " + caught + " You don't have enough badges.");
        lose++;
        console.log("Battles Lost: " + lose);
        // window.location.reload();
        startgame();

    }
});

function startgame() {
    caught = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    seen = 0;
    win = 0;
    lose = 0;
    $("#pokedex").text(caught);
}