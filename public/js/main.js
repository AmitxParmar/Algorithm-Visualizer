// importing functions
import { createBoard } from './createGrid.js';
import { setWallAttribute } from './wall.js';
import { dijkstra, speed } from './pathFindingAlgorithms/dijkstra.js';

//variables
var refreshbtn = document.querySelector('.refresh');
var startbtn = document.querySelector('.start');
var container = document.querySelector('.container');
// var speed_id = document.querySelector('#speed');
var algorithm = 'dijkstra';
export var mouseIsDown = false;

//Initializing eventListeners
refreshbtn.addEventListener('click', refresh);
startbtn.addEventListener('click', start);
// speed_id.addEventListener('click',speed)
container.addEventListener('click', function () {
	if (mouseIsDown) mouseIsDown = false;
	else mouseIsDown = true;
});
// container.addEventListener('mouseup', function(){mouseIsDown = false})
container.addEventListener('mouseover', setWallAttribute);

// speed
// export var time;
// var speed = document.querySelector('#speed');
// var speedval = document.querySelector('#speed').value;
// function speed(speedval){
// 	console.log(speedval);
// 	if(speedval==="fast") {
// 		time = 15;
// 	}
// 	else if(speedval==="normal") {
// 		time = 22;
// 	}
// 	else {
// 		time = 10;
// 	}
// }

// refresh function
function refresh() {
	container.addEventListener('click', setWallAttribute);
	container.addEventListener('mouseover', setWallAttribute);
	var btn = document.querySelector('.start');
	btn.style.visibility = 'visible';
	createBoard();
} // End refresh

// Start path-finding
function start() {
	if (algorithm === 'dijkstra') dijkstra();
} // End start

// Initialize
window.onload = () => {
	container.addEventListener('click', setWallAttribute);
	container.addEventListener('mouseover', setWallAttribute);
	document.querySelector('#speed').addEventListener('change', speed);
	createBoard();
};
