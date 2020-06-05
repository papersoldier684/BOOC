//順序hen重要
var audio = new Audio('Æsir - CHAOS + V.mp3');
audio.play();
//

let box = document.createElement('div');
box.style="display:flex; justify-content:center";
document.body.appendChild(box);

let btpause = document.createElement('button');
btpause.style.width = 100;
btpause.style.height = 20;
btpause.innerHTML = "暫停";
box.appendChild(btpause);

var playstatus = 1;
btpause.addEventListener("click",()=>{
	if(playstatus == 1)
	{
		btpause.innerHTML = "播放";
		audio.pause();
		playstatus = 0;
	}else{
		btpause.innerHTML = "暫停";
		audio.play();
		playstatus = 1;
	}
});


let scorevalues = 0;
let combovalues = 0;
let text1 = document.createElement('h1');
let SC = document.createTextNode
	('Score:'+scorevalues+'　Combo:'+combovalues);
text1.appendChild(SC);
document.body.appendChild(text1); 
/*
設定變數(分數)scorevalues = 0 & (連擊數)combovalues = 0
新增元素h1(標題)，名為text1
新增文字，名為SC，內容為分數跟連擊數
SC放至h1裡
h1放至body裡
顯示出來為Score:0 Combo:0
*/

let canvas = document.createElement('canvas');
let ctx = canvas.getContext("2d");
canvas.width=1280;
canvas.height=720;
canvas.style.background = "url('./v.jpg')";
/*
新增元素canvas(畫布)，名為canvas，設定寬&高
將背景更改為自訂圖片
*/

let mainwindow = document.createElement('mainwindow');
mainwindow.appendChild(canvas);
document.querySelector('html').style.display = 'flex';
document.querySelector('html').style.justifyContent = 'center';
document.body.appendChild(mainwindow);
/*
新增元素，名為mainwindow
gamecanvas，放至mainwindow裡
將html格式改為置中
mainwindow，放至body裡
*/

warehouse(canvas,ctx);
//執行warehouse函數

function warehouse(x,y) {
	warehouse.canvas = x;
	warehouse.ctx = y;
	
	warehouse.keys = [70,71,72,74];
	
	warehouse.ctx.lineWidth = 3;//線條粗細
	warehouse.ctx.strokeStyle = "#193C63";//顏色
	for (var i = 0; i < 4; i++) {
			warehouse.ctx.strokeRect
			(100/*從左至右的距離*/ + 300/*間隔*/ * i,
			 660/*從上至下的距離*/, 200/*寬*/, 40/*高*/);
		}
	//打擊鍵	
	
	warehouse.ctx.strokeStyle = "#193C63";//顏色
	warehouse.ctx.moveTo(20, 640);//開始
	warehouse.ctx.lineTo(1260, 640);//結束
	warehouse.ctx.stroke();
	//打擊線
}

/*
var song;
var button;

function music() {
	song= loadSound("Æsir - CHAOS + V.mp3",loaded);
	button = createButton("播放");
	button.mousePressed(touchplaying);
	console.log("2");
}

function touchplaying() {
	song.play();
		console.log("2");
}
*/