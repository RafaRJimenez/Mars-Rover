var rover = {
    direction : "N",
    x: 0,
    y: 0,
    travelLog: [],
    };



function turnLeft(rover){
	switch(rover.direction) {
	case 'N' :
	rover.direction = 'W'; 
	return (" Rover is now facing West");
 	break;
 	case 'W' :
	rover.direction = 'S'; 
	return (" Rover is now facing south");
 	break;
 	case 'S' :
	rover.direction = 'E'; 
	return (" Rover is now facing East");
 	break;
	default:
		rover.direction = "N";
		return (" Rover is now facing North");

 }
 // console.log("turnLeft was called!"); Esto no tira why?????
}

function turnRight(rover){
	  	switch(rover.direction) {
		case 'N' :
		rover.direction = 'E'; 
		return (" Rover is now facing East");
	 	break;
	 	case 'E' :
		rover.direction = 'S'; 
		return (" Rover is now facing south");
	 	break;
	 	case 'S' :
		rover.direction = 'W'; 
		return (" Rover is now facing West");
	 	break;
		default:
			rover.direction = "N";
			return (" Rover is now facing North");

	 }
}

function moveForward(rover){
	if (rover.direction == "N") {
		rover.y -=1;
	}
	else if (rover.direction == "W") {
		rover.x -=1;
	}
	else if (rover.direction == "S") {
		rover.y +=1;
	}
	else {
		rover.x +=1;
	}


	if (rover.x == -1){
		rover.x = 0;
	} else if (rover.y == -1){
		rover.y = 0;
	}

	if (rover.x == 10){
		rover.x = 9;
	} else if (rover.y == 10){
		rover.y = 9;
	}

	rover.travelLog.push(rover.x+"-"+ rover.y);
  console.log(rover.x + "-" + rover.y);
}


function path(coordinates){
	for (i=0; i<coordinates.length; i++){
		if (coordinates[i] == "l"){
			turnLeft(rover);
		} else if (coordinates[i] == "r"){
			turnRight(rover);
		} else if (coordinates[i] == "f"){
			moveForward(rover);
		}
	}
}