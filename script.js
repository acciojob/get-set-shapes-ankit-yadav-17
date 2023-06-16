//complete this code
class Rectangle {
	constructor(rect_w,rect_h){
		this._rect_w = rect_w;
		this._rect_h = rect_h;
	}

	get width(){
		return this._rect_w
	}

	get height(){
		return this._rect_h;
	}

	getArea(){
		return this._rect_w * this._rect_h
	}
}

class Square extends Rectangle{
	constructor(sq_s){
		super(sq_s,sq_s)
	}

	getArea(){
		return sq_s* sq_s
	}
	getPerimeter(){
		return 4*sq_s
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
