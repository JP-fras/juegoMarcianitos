// main.js
let player1, player2;
let globos = [];
let turn = 1;
let globoImg, playerImg;

function preLoad() {
    globoImg = loadImage("res/g.png");
    playerImg = loadImage("res/ali.png");
}

function setup() {
    preLoad();
    createCanvas(800, 600);
    player1 = new Player(0, 500, playerImg);
    player2 = new Player(700, 500, playerImg);
}

function draw() {
    background(220);
    player1.show();
    player2.show();

    for(let globo of globos) {
        globo.update();
        globo.show();
    }

    let x2 = mouseX;
    let y2 = mouseY;
    dibujarFlecha(0, 559, x2, y2);

}

class Player {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }

    show() {
        image(this.img, this.x, this.y, 100, 100);
    }
}


class Globo {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }

    update() {
        this.y -= 1;
    }

    show() {
        image(this.img, this.x, this.y, 100, 100);
    }
}


function dibujarFlecha(x1, y1, x2, y2) {
    stroke(0);
    strokeWeight(4);
    line(x1, y1, x2, y2);

   
    let angle = atan2(y2 - y1, x2 - x1);

    
    let headSize = 10;

    let arrowX1 = x2 - headSize * cos(angle + PI / 6);
    let arrowY1 = y2 - headSize * sin(angle + PI / 6);
    let arrowX2 = x2 - headSize * cos(angle - PI / 6);
    let arrowY2 = y2 - headSize * sin(angle - PI / 6);

    fill(0);
    noStroke();
    triangle(x2, y2, arrowX1, arrowY1, arrowX2, arrowY2);
}

function keyPressed() {
    if (key === 'g') {
        if(turn === 1) {
            globos.push(new Globo(player1.x, player2.y, globoImg));
            turn = 2;
        } else {
            globos.push(new Globo(player2.x, player2.y, globoImg));
            turn = 1;
        }
    }
}


