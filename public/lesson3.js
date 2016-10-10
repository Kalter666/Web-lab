function drawBoard() {
    $("#container").append('<table id="chessTable"></table>');
    $('#chessTable').append('<tbody id="chessboard"></tbody>');
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 0) {
                $('#chessboard').append('<tr id="' + j + '"></tr>');
                $('#' + j).append('<td id="' + (i + 1) + (j + 1) + '">' + (i + 1) + (j + 1) + '</td>');
            } else if (j == 0) {
                $('#' + j).append('<td id="' + (i + 1) + (j + 1) + '">' + (i + 1) + (j + 1) + '</td>');
            } else {
                $('#' + j).append('<td id="' + (i + 1) + (j + 1) + '">' + (i + 1) + (j + 1) + '</td>');
            }
        }
    }
}


var lifePoints = [[], [], [], [], [], [], [], [], [], [], [], []];

for (let i = 0; i < 12; i++){
    for (let j = 0; j < 12; j++){
        lifePoints[i][j] = false;
    }
}

function initLife() {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if ((j === 4) && (i === 4) || (j === 4) && (i===5) || (j === 5) && (i === 4) || (j === 5) && (i === 3) ||
                (j === 6) && (i === 3)) {
                $('#' + i + j).css('background-color', '#06FF00');
                lifePoints[i][j] = true;
            }
            else {
                lifePoints[i][j] = false;
            }
        }
    }
}

function life() {
    var newLife = lifePoints;
    var counterNeig = 0;
    for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
            if (lifePoints[i][j] === true) {
                if (lifePoints[i - 1][j] === true) counterNeig++;
                if (lifePoints[i + 1][j] === true) counterNeig++;
                if (lifePoints[i][j - 1] === true) counterNeig++;
                if (lifePoints[i][j + 1] === true) counterNeig++;
                if (lifePoints[i + 1][j + 1] === true) counterNeig++;
                if (lifePoints[i + 1][j - 1] === true) counterNeig++;
                if (lifePoints[i - 1][j + 1] === true) counterNeig++;
                if (lifePoints[i - 1][j - 1] === true) counterNeig++;
                if ((counterNeig == 2) || (counterNeig == 3)) {
                    newLife[i][j] = true;
                } else newLife[i][j] = false;
                counterNeig = 0;
            }
        }
    }
    lifePoints = newLife;
}

function reDraw() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (lifePoints[i][j] === true)
                $('#' + (i + 1) + (j + 1)).css('background-color', '#21FF00');
            else $('#' + (i + 1) + (j + 1)).css('background-color', 'white');
        }
    }
}

drawBoard();
initLife();

function zapusk() {
    life();
    reDraw();
}

setInterval(zapusk, 1000);