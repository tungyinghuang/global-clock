let c1,c2

function setup() {
	createCanvas(500, 500);
	background(100);
	c1=color('#FFD169')
	c2=color('#E85670')
	
}

function draw() {
	
	//background 
	fill(255,255,255,10)
	rect(0,0,width,height)
	
	let s=second()
	let m=minute()
	let h=hour()
  let firsthour=(h-8)+(m/60)+(s/3600) //GMT-12
	if(firsthour<0){
	firsthour=firsthour+24
	}//GMT-12
	
	//rest of time(gradient color)
	setgradient(0, 0, c1, c2)
	setgradient(0, 100, c1, c2)
	setgradient(0, 200, c1, c2)
	setgradient(0, 300, c1, c2)
	setgradient(0, 400, c1, c2)

	

	//past of time(white)
	for(var i=0;i<width;i=i+100){
		for(var j=0;j<height;j=j+100){
			
			var addtime=i/100//+0-5hr
			var local_hour1=addtime+firsthour //1st row
			var local_hour2=addtime+firsthour+5 //2nd row
			var local_hour3L=addtime+firsthour+10 //3rd left row
			var local_hour3R=addtime+firsthour+9 //3rd right row
			var local_hour4=addtime+firsthour+14 //4th row
			var local_hour5=addtime+firsthour+19 //5th row
			
			if(local_hour1>=24){
			local_hour1=local_hour1-24
			}
			if(local_hour2>=24){
			local_hour2=local_hour2-24
			}
			if(local_hour3L>=24){
			local_hour3L=local_hour3L-24
			}
			if(local_hour3R>=24){
			local_hour3R=local_hour3R-24
			}
			if(local_hour4>=24){
			local_hour4=local_hour4-24
			}
			if(local_hour5>=24){
			local_hour5=local_hour5-24
			}
			
			var timebar1=map(local_hour1,0,24,0,99)
			var timebar2=map(local_hour2,0,24,0,99)
			var timebar3L=map(local_hour3L,0,24,0,99)
			var timebar3R=map(local_hour3R,0,24,0,99)
			var timebar4=map(local_hour4,0,24,0,99)
			var timebar5=map(local_hour5,0,24,0,99)

			
			fill(255)
			noStroke()
			textSize(20)
			if(j<100){
			rect(i,j,100,timebar1)
			fill(0,50)
			text(addtime-12,i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(90)
					 text(floor(local_hour1),i,j+80)
				}
			}
			else if(j<200){
			rect(i,j,100,timebar2)
			fill(0,50)
			text(addtime-7,i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(80)
					 text(floor(local_hour2),i,j+80)
				}
			}
			else if(j<300&&i<200){
			rect(i,j,100,timebar3L)
			fill(0,50)
			text(addtime-2,i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(80)
					 text(floor(local_hour3L),i,j+80)
				}
			}
			else if(j<300&&i<300){
			fill(255,255,255)
			rect(i,j,100,100)
			}//center 
			
			else if(j<300&&i>=300){
			rect(i,j,100,timebar3R)
			fill(0,50)	
			text('+'+(addtime-3),i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(80)
					 text(floor(local_hour3R),i,j+80)
				}				
			}
			else if(j<400){
			rect(i,j,100,timebar4)
			fill(0,50)
			text('+'+(addtime+2),i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(80)
					 text(floor(local_hour4),i,j+80)
				}				
			}
			else if(j<=500){
			rect(i,j,100,timebar5)
			fill(0,50)
			text('+'+(addtime+7),i,j+100)
				if(i<mouseX&&
					 mouseX<100+i&&
					 j<mouseY&&
					 mouseY<j+100){
					 fill(0)
					 textSize(80)
					 text(floor(local_hour5),i,j+80)
				}
			}
			
		}
		
	}

	//current time at center
	fill(0)
	textSize(15)
	text('Current Time',205,230)
	textSize(30)
	text(m,210,280)
	text(':',245,280)
  text(s, 260, 280)
	
}

//gradient color function
function setgradient(x, y, c1, c2){
	noFill()
	for (let i = y; i <= y + 100; i++) {
      let inter = map(i, y, y+100, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, width, i)
		
	}

}