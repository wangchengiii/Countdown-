//大概差不多9个左右的事件实现
function addHour(){
	var getHour = document.getElementById("hour");
	if(getHour.innerText >= 0 && getHour.innerText <= 8){
		getHour.innerText++;
		getHour.innerText = "0" + getHour.innerText; 
	}else{
		getHour.innerText++;
	}
	if(getHour.innerText >24){
		getHour.innerText = '00';
	}
}
function subHour(){
	var getHour = document.getElementById("hour");
	if(getHour.innerText <= 10 && getHour.innerText > 0){
		getHour.innerText--;
		getHour.innerText = "0" + getHour.innerText; 
	}else{
		getHour.innerText--;
	}
	if(getHour.innerText < 0){
		getHour.innerText = '24';
	}
}
function addMinute(){
	var getMinute = document.getElementById("minute");
	if(getMinute.innerText >= 0 && getMinute.innerText <= 8){
		getMinute.innerText++;
		getMinute.innerText = "0" + getMinute.innerText; 
	}else{
		getMinute.innerText++;
	}
	if(getMinute.innerText >60){
		getMinute.innerText = '00';
	}
}
function subMinute(){
	var getMinute = document.getElementById("minute");
	if(getMinute.innerText > 0 && getMinute.innerText <= 10){
		getMinute.innerText--;
		getMinute.innerText = "0" + getMinute.innerText; 
	}else{
		getMinute.innerText--;
	}
	if(getMinute.innerText < 0){
		getMinute.innerText = '60';
	}
}
function addSecond(){
	var getSecond = document.getElementById("second");
	if(getSecond.innerText >= 0 && getSecond.innerText <= 8){
		getSecond.innerText++;
		getSecond.innerText = "0" + getSecond.innerText; 
	}else{
		getSecond.innerText++;
	}
	if(getSecond.innerText > 60){
		getSecond.innerText = '00';
	}
}
function subSecond(){
	var getSecond = document.getElementById("second");
	if(getSecond.innerText > 0 && getSecond.innerText <= 10){
		getSecond.innerText--;
		getSecond.innerText = "0" + getSecond.innerText; 
	}else{
		getSecond.innerText--;
	}
	if(getSecond.innerText < 0){
		getSecond.innerText = '60';
	}
}
//重置函数的实现
function reset(){
	var start = document.getElementById('start');
	start.innerHTML = '开始倒数';
	document.getElementById("wrap").style.display = 'none';
	document.getElementById("hour").innerText = '00';
	document.getElementById("minute").innerText = '00';
	document.getElementById("second").innerText = '00';
	document.getElementById("minsecond").innerText = '00';
}
function starts(){
	var start = document.getElementById('start');
	var getHour = document.getElementById("hour");
	var getMinute = document.getElementById("minute");
	var getSecond = document.getElementById("second");
	var getMinsecond = document.getElementById("minsecond");
	var timer = window.setInterval(function(){
		document.getElementById("hour").innerText = getHour.innerText;
		document.getElementById("minute").innerText = getMinute.innerText;
		document.getElementById("second").innerText = getSecond.innerText;
		document.getElementById("minsecond").innerText = getMinsecond.innerText;
		if(getMinsecond.innerText == '00' && getSecond.innerText == '00'
			&& getMinute.innerText == '00' && getHour.innerText == '00'){
			start.innerHTML = '开始倒数';
			document.getElementById("wrap").style.display = 'none';
		}else{
			document.getElementById("wrap").style.display = 'block';
			start.innerText = '暂停';
			if(start.innerText == '暂停'){
				start.onclick = function(){
					start.innerText = '继续';
					clearInterval(timer);
					stop();
					if(start.innerText == '继续'){
						start.onclick = function(){
							start.innerText = '暂停';
							starts();
						}
					}
				}	
			}
		}
		
	if(getMinsecond.innerText <= 0){
		getMinsecond.innerText = '99';
		if(getSecond.innerText <= 0){
			if(getMinute.innerText <=0){
				if(getHour.innerText <=0){
					start.innerHTML = '开始倒数';
					clearInterval(timer) ;
					getMinsecond.innerText = '00';
					document.getElementById("wrap").style.display = 'none';
				}else{
					getMinute.innerText = '59';
					getSecond.innerText = '59'
					getHour.innerText--;
					if(getHour.innerText <=9){
						getHour.innerText = "0" + getHour.innerText;
					}
				}
			}else{
				getSecond.innerText = '59';
				getMinute.innerText--;
				if(getMinute.innerText <=9){
				getMinute.innerText = "0" + getMinute.innerText;
			}
		}
		}else{
			getSecond.innerText--;
			if(getSecond.innerText <=9){
				getSecond.innerText = "0" + getSecond.innerText;
			}
		}	
	}else{
		getMinsecond.innerText--;
		if (getMinsecond.innerText <= 9) 
			getMinsecond.innerText = "0" + getMinsecond.innerText;
	}
},10)
}
function stop(){
	var getHour = document.getElementById("hour");
	var getMinute = document.getElementById("minute");
	var getSecond = document.getElementById("second");
	var getMinsecond = document.getElementById("minsecond");
	document.getElementById("hour").innerText = getHour.innerText;
	document.getElementById("minute").innerText = getMinute.innerText;
	document.getElementById("second").innerText = getSecond.innerText;
	document.getElementById("minsecond").innerText = getMinsecond.innerText;
}