var rover = {
    direction : "N",
    x: 0,
    y: 0,
    travelLog: [],
    };

function TurnLeft(rover){
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
		default :
			rover.direction='N';
			return ('Rover is now facing north');
	}
}


function TurnRight(rover){
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
		default :
			rover.direction='N';
			return ('Rover is now facing north');
	}
}


function moveFordward(rover){
	if(rover.direction='N'){
		rover.y= rover.y - 1;
	}
	else if(rover.direction='E'){
		rover.x= rover.x + 1;
	}
	else if(rover.direction='S'){
		rover.y= rover.y + 1;
	}
	else {
		rover.x= rover.x - 1;
	}
	console.log (rover.x + ',' + rover.y);
	
}

