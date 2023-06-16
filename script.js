//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	getArea(){
		return this.height*this.width
	}
}

class Square extends Rectangle{
	getPerimeter(){
		return 2*(this.width + this.height)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
