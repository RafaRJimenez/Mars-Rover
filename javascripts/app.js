var rover = {
    direction : 'N',
    x: 0,
    y: 0,
    travelLog: [],
    };

function turnLeft(rover){
	switch(rover.direction){
		case 'N':
			rover.direction='W';
			return ('Rover is now facing west');
			break;
		case 'W':
			rover.direction='S';
			return ('Rover is now facing south');
			break;
		case 'S':
			rover.direction='E';
			return ('Rover is now facing east');
			break;
		case 'E' :
			rover.direction='N';
			return ('Rover is now facing north');
			break;
	}
}


function turnRight(rover){
	switch(rover.direction){
		case 'N':
			rover.direction='E';
			return ('Rover is now facing east');
			break;
		case 'E':
			rover.direction='S';
			return ('Rover is now facing south');
			break;
		case 'S':
			rover.direction='W';
			return ('Rover is now facing west');
			break;
		case 'W' :
			rover.direction='N';
			return ('Rover is now facing north');
			break;
	}
}


function moveFordward(rover){
	if(rover.direction==='N'){
		rover.y= rover.y - 1;
		if(rover.y<0){
			rover.y=0;
		}else if(rover.y>9){
			rover.y=9;
		}
	}
	else if(rover.direction==='E'){
		rover.x= rover.x + 1;
		if(rover.x<0){
			rover.x=0;
		} else if (rover.x>9){
			rover.x=9;
		}
	}
	else if(rover.direction==='S'){
		rover.y= rover.y + 1;
		if(rover.y<0){
			rover.y=0;
		}else if(rover.y>9){
			rover.y=9;
		}
	}
	else {
		rover.x= rover.x - 1;
		if(rover.x<0){
			rover.x=0;
		} else if (rover.x>9){
			rover.x=9;
		}
	}
	console.log (rover.x + ',' + rover.y);
	
}

function movements(coordinates){
	for (var i = 0; i < coordinates.length ; i++){
		if(coordinates[i]==='r'){
			turnRight(rover);
		}
		if(coordinates[i]==='l'){
			turnLeft(rover);
		}
		if(coordinates[i]==='f'){
			moveFordward(rover);
		}
	}
}

// grioanrgnngnngnrjgnjdangnadnñ