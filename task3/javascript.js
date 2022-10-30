let x = 0,
	y = 0,
	maxX,
	maxY,
	upDown = 1,
	leftRight = 1;

function setDimension() {
    maxX = window.innerWidth-50;
    if (x>maxX) {
        x=maxX
    }
    maxY = window.innerHeight-50;
    if (x>maxX) {
        x=maxX
    }
}

function move (){
	if(x>maxX || x<0){ 
		leftRight=-leftRight
	}
	if(y>maxY || y<0){ 
		upDown=-upDown
	}
	x = x + (12*leftRight)
	y = y + (12*upDown)
	
    ball.style.top = y + 'px'
	ball.style.left = x + 'px'
}

function startMoving(){
	setDimension()
	setInterval(move, 10)

}