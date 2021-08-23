// Your code here
class Polygon {
  constructor(arrInt) {
    this.sides = arrInt;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }
    const sideA = this.sides[0];
    const sideB = this.sides[1];
    const sideC = this.sides[2];

    if (sideA + sideB < sideC || sideB + sideC < sideA || sideA + sideC < sideB) {
      return false;
    }

    return true;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {
      return false;
    }
    const sameSides = this.sides.filter(side => side === this.sides[0]);
    if (sameSides.length !== 4) {
      return false;
    }
    return true;
  }

  get area() {
    return Math.pow(this.sides[0], 2);
  } 
}