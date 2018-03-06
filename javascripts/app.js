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
			console.log ('Rover is now facing west');
			break;
		case 'W':
			rover.direction='S';
			console.log ('Rover is now facing south');
			break;
		case 'S':
			rover.direction='E';
			console.log ('Rover is now facing east');
			break;
		case 'E' :
			rover.direction='N';
			console.log ('Rover is now facing north');
			break;
	}
}


function turnRight(rover){
	switch(rover.direction){
		case 'N':
			rover.direction='E';
			console.log ('Rover is now facing east');
			break;
		case 'E':
			rover.direction='S';
			console.log ('Rover is now facing south');
			break;
		case 'S':
			rover.direction='W';
			console.log ('Rover is now facing west');
			break;
		case 'W' :
			rover.direction='N';
			console.log ('Rover is now facing north');
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
	rover.travelLog.push(rover.x + ',' + rover.y);
}

function movementsRover(coordinates){
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







var rover2 = {
    direction : 'S',
    x: 9,
    y: 9,
    travelLog2: [],
    };

function turnLeft(rover2){
	switch(rover2.direction){
		case 'N':
			rover2.direction='W';
			console.log ('Rover2 is now facing west');
			break;
		case 'W':
			rover2.direction='S';
			console.log ('Rover2 is now facing south');
			break;
		case 'S':
			rover2.direction='E';
			console.log ('Rover2 is now facing east');
			break;
		case 'E' :
			rover2.direction='N';
			console.log ('Rover2 is now facing north');
			break;
	}
}


function turnRight(rover2){
	switch(rover2.direction){
		case 'N':
			rover2.direction='E';
			console.log ('Rover2 is now facing east');
			break;
		case 'E':
			rover2.direction='S';
			console.log ('Rover2 is now facing south');
			break;
		case 'S':
			rover2.direction='W';
			console.log ('Rover2 is now facing west');
			break;
		case 'W' :
			rover2.direction='N';
			console.log ('Rover2 is now facing north');
			break;
	}
}


function moveFordward(rover2){
	if(rover2.direction==='N'){
		rover2.y= rover2.y - 1;
		if(rover2.y<0){
			rover2.y=0;
		}else if(rover2.y>9){
			rover2.y=9;
		}
	}
	else if(rover2.direction==='E'){
		rover2.x= rover2.x + 1;
		if(rover2.x<0){
			rover2.x=0;
		} else if (rover2.x>9){
			rover2.x=9;
		}
	}
	else if(rover2.direction==='S'){
		rover2.y= rover2.y + 1;
		if(rover2.y<0){
			rover2.y=0;
		}else if(rover2.y>9){
			rover2.y=9;
		}
	}
	else {
		rover2.x= rover2.x - 1;
		if(rover2.x<0){
			rover2.x=0;
		} else if (rover2.x>9){
			rover2.x=9;
		}
	}
	console.log (rover2.x + ',' + rover2.y);
	rover2.travelLog2.push(rover2.x + ',' + rover2.y);
}

function movementsRover2(coordinates){
	for (var i = 0; i < coordinates.length ; i++){
		if(coordinates[i]==='r'){
			turnRight(rover2);

		}
		if(coordinates[i]==='l'){
			turnLeft(rover2);
			
		}
		if(coordinates[i]==='f'){
			moveFordward(rover2);
			
		}

	}
}
 if (rover.x===rover2.x || rover2.x===rover.x){
 	rover.x=rover.x-1;
 	rover2.x=rover2.x-1;
 } else  if (rover.y===rover2.y || rover2.y===rover.y){
 	rover.y=rover.y-1;
 	rover2.y=rover2.y-1;
 }