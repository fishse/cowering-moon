let moveX, moveY;
let one; //sketch - add file first!
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;
let eleven;
let twelve;
let thirteen;
let fourteen;
let fifteen;
let sixteen;
let seventeen;
let eighteen;
function setup() {
    createCanvas(800, 800);
    imageMode(CENTER);
    noStroke();
    noCursor();
}
function preload() {
    one = loadImage("one.png");
    two = loadImage("two.png");
    three = loadImage("three.png");
    four = loadImage("four.png");
    five = loadImage("five.png");
    six = loadImage("six.png");
    seven = loadImage("seven.png");
    eight = loadImage("eight.png");
    nine = loadImage("nine.png");
    ten = loadImage("ten.png");
    eleven = loadImage("eleven.png");
    twelve = loadImage("twelve.png");
    thirteen = loadImage("thirteen.png");
    fourteen = loadImage("fourteen.png");
    fifteen = loadImage("fifteen.png");
    sixteen = loadImage("sixteen.png");
    seventeen = loadImage("seventeen.png");
    eighteen = loadImage("eighteen.png");
}
function draw() {
    background(255);
    if (mouseY < height / 18) {
        image(one, moveX, moveY);
    } else if (mouseY < (2 * height) / 18) {
        image(two, moveX, moveY);
    } else if (mouseY < (3 * height) / 18) {
        image(three, moveX, moveY);
    } else if (mouseY < (4 * height) / 18) {
        image(four, moveX, moveY);
    } else if (mouseY < (5 * height) / 18) {
        image(five, moveX, moveY);
    } else if (mouseY < (6 * height) / 18) {
        image(six, moveX, moveY);
    } else if (mouseY < (7 * height) / 18) {
        image(seven, moveX, moveY);
    } else if (mouseY < (8 * height) / 18) {
        image(eight, moveX, moveY);
    } else if (mouseY < (9 * height) / 18) {
        image(nine, moveX, moveY);
    } else if (mouseY < (10 * height) / 18) {
        image(ten, moveX, moveY);
    } else if (mouseY < (11 * height) / 18) {
        image(eleven, moveX, moveY);
    } else if (mouseY < (12 * height) / 18) {
        image(twelve, moveX, moveY);
    } else if (mouseY < (13 * height) / 18) {
        image(thirteen, moveX, moveY);
    } else if (mouseY < (14 * height) / 18) {
        image(fourteen, moveX, moveY);
    } else if (mouseY < (15 * height) / 18) {
        image(fifteen, moveX, moveY);
    } else if (mouseY < (16 * height) / 18) {
        image(sixteen, moveX, moveY);
    } else if (mouseY < (17 * height) / 18) {
        image(seventeen, moveX, moveY);
    } else if (mouseY < (18 * height) / 18) {
        image(eighteen, moveX, moveY);
    }
}
function mouseMoved() {
    // image 1
    moveX = mouseX;
    moveY = mouseY;
}