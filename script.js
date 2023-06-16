//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}

	get width(){
		return this._width
	}

	get height(){
		return this._height;
	}

	getArea(){
		return this._height * this._width
	}
}

class Square extends Rectangle{
	constructor(sq_s){
		super(sq_s,sq_s)
	}
	getPerimeter(){
		return 4*sq_s
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
