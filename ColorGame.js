var squares=Array.from(document.querySelectorAll(".square"));
var colorDisplay=document.querySelector("#colorDisplay");
var resultInfo=document.querySelector("#resultInfo");
var resetBtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var h1=document.querySelector("h1");
var numOfColors=6;
var colors=[];
var selectedIdx;
var gameOver=false;

reset();

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfColors=3;
	reset();
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfColors=6;
	reset();
});

resetBtn.addEventListener("click", reset);

function reset(){
	gameOver=false;
	resetBtn.textContent="New colors";
	colors=generateRandomColors(numOfColors);
	selectedIdx=Math.floor(Math.random()*colors.length);
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=colors[selectedIdx];
	resultInfo.textContent="";
	generateSquares();
}


function generateSquares(){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		if(i>=numOfColors){
				squares[i].style.display="none";
		}
		squares[i].addEventListener("click",function(){
			if (selectedIdx==squares.indexOf(this)){
				resultInfo.textContent="Correct!";
				gameOver=true;
				h1.style.backgroundColor=colors[selectedIdx];
				resetBtn.textContent="Play again";
				for(var j=0; j<squares.length; j++){
					squares[j].style.backgroundColor=colors[selectedIdx];
				}
			}else{
				if(!gameOver){
					this.style.backgroundColor="rgb(50,50,50)";
					resultInfo.textContent="Try again!"
				}
			}
		})
	}
}

function generateRandomColors(num){
	var arr=[];
	for (var i=0; i<num; i++){
		arr[i]="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
	}
	return arr;
}