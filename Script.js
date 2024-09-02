var move = 1;
var play = true;

function findwinner() {
var winner = "";
var board = [];
$('table tr').each(function(i) {
board[i] = [];
$(this).find('td').each(function(j) {
    board[i][j] = $(this).text();
});
});

for(var i=0; i<3; i++) {
if(board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
    winner = board[i][0];
}
}

for(var i=0; i<3; i++) {
if(board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
    winner = board[0][i];
}
}

if(board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
winner = board[0][0];
}

if(board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
winner = board[0][2];
}

return winner;
}

$('table tr td').click(function () {
if ($(this).text() === "" && play) {
if ((move % 2) === 1) {
    $(this).text("X").css('color', 'red');
} else {
    $(this).text("O").css('color', 'blue');
}
move++;
try {
    var winner = findwinner();
    if (winner != "") {
        $('body').append('<div class = "Winner"><span>Winner</span> ' + winner + '</div><button onclick="location.reload()" class="btn">Play Again</button>');
        var btn = $(document).find('.btn');
        $(btn).show();
        play = false;
    } else if (move > 9) {
        $('body').append('<div class = "Draw"><span>Draw</span></div><button class="btn" onclick="location.reload()">Play Again</button>');
        var btn = $(document).find('.btn');
        $(btn).show();
        play = false;
    }
} catch(err) {
    console.log(err.message);
}
}
});
