let squareCont = document.querySelector(".box");
let triangleCont = document.querySelector(".box2");
let circleCont = document.querySelector(".box3");

class Square {
  constructor(width, height, bg) {
    this.width = width;
    this.height = height;
    this.background = bg;
    squareCont.style = `
    width:${this.width}px;
    height:${this.height}px;
    background:${this.background};

    `;
  }
}
class Triangle extends Square {
  constructor(width, height, borderL, borderR, borderB) {
    super(width, height);
    this.borderL = borderL;
    this.borderR = borderR;
    this.borderB = borderB;
    triangleCont.style = `
    width:${width};
    height:${height};
    border-left:${borderL}px solid transparent;
    border-right:${borderR}px solid transparent;
    border-bottom:${borderB}px solid red;`;
  }
}
class Circle extends Square {
  constructor(width, height, bg, border) {
    super(width, height, bg);
    this.border = border;
    circleCont.style = `
        width:${width}px;
        height:${height}px;
        background:${bg};
        border-radius:${this.border}px
        `;
  }
}
let circle = new Circle(100, 100, "blue", 180);
let triangle = new Triangle(0, 0, 60, 60, 100);
let square = new Square(100, 100, "red");
