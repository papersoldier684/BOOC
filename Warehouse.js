//順序hen重要
var audio = new Audio('Æsir - CHAOS + V.mp3');
audio.play();
//撥放音樂

let box = document.createElement('div');
box.style="display:flex; justify-content:center";
document.body.appendChild(box);
//新增一個元素，名為box，使用flex，將style設為center

let btpause = document.createElement('button');
btpause.style.width = 100;
btpause.style.height = 20;
btpause.innerHTML = "暫停";
box.appendChild(btpause);
//新建一個按鈕，名為btpause，設定寬與高、顯示內容，放置到box

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
//新增一個變數playstatus = 1，設定btpause的活動監聽，當click，如果=1，切換顯示內容為播放，不是的話則顯暫停



document.addEventListener("keydown", logKey => {
  if (logKey.isComposing || logKey.keyCode === 70) {
	warehouse.ctx.fillStyle = "rgba(100,200,200,0.9)";
	warehouse.ctx.fillRect(102/*從左至右的距離*/,662/*從上至下的距離*/, 196/*寬*/, 36/*高*/);
  }
  else  if (logKey.isComposing || logKey.keyCode === 71) {
	warehouse.ctx.fillStyle = "rgba(100,200,200,0.9)";
	warehouse.ctx.fillRect(402,662, 196, 36);
  }
  else if (logKey.isComposing || logKey.keyCode === 72) {
	warehouse.ctx.fillStyle = "rgba(100,200,200,0.9)";
	warehouse.ctx.fillRect(702,662, 196, 36);
  }
  else if (logKey.isComposing || logKey.keyCode === 74) {
	warehouse.ctx.fillStyle = "rgba(100,200,200,0.9)";
	warehouse.ctx.fillRect(1002,662, 196, 36);
  }
});
//新增活動監聽，按下指定按鍵，在指定位置顯示指定顏色色塊

document.addEventListener("keyup", logKey => {
  if (logKey.isComposing || logKey.keyCode === 70) {
	warehouse.ctx.clearRect(102/*從左至右的距離*/,662/*從上至下的距離*/, 196/*寬*/, 36/*高*/);
  }
  else if (logKey.isComposing || logKey.keyCode === 71) {
	warehouse.ctx.clearRect(402,662, 196, 36);
  }
  else if (logKey.isComposing || logKey.keyCode === 72) {
	warehouse.ctx.clearRect(702,662, 196, 36);
  }
  else if (logKey.isComposing || logKey.keyCode === 74) {
	warehouse.ctx.clearRect(1002,662, 196, 36);
  }
});
//新增活動監聽，放開指定按鍵，在指定位置清除色塊

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
	
	warehouse.ctx.lineWidth = 3;//線條粗細
	warehouse.ctx.strokeStyle = "#193C63";//顏色
	for (var i = 0; i < 4; i++) {
			warehouse.ctx.strokeRect
			(100/*從左至右的距離*/ + 300/*間隔*/ * i,
			 660/*從上至下的距離*/, 200/*寬*/, 40/*高*/);
		}
	//打擊鍵	
	
	warehouse.ctx.strokeStyle = "#193C63";//顏色
	warehouse.ctx.moveTo(20, 640);//線的開始點
	warehouse.ctx.lineTo(1260, 640);//線的結束點
	warehouse.ctx.stroke();
	//打擊線
	
	
}
