var buildings = [];

var nextButton;

//building object

function building(x,y,c,w,h){
	this.x = x;
	this.y = y;
	this.c = c;
	this.w = w;
	this.h = h;
	this.drawBuilding = function(){
		fill(this.c);
		rect(this.x, this.y, this.w, this.h,4);

	}
};

function setup(){
	createCanvas(1300,600);
	background("#7DDCF3");

//create next button
nextButton = createButton('NEXT');
nextButton.position(1200,550);
nextButton.mousePressed(changeScene);

//forloop for skyline
	for (var i=0; i<15; i++){
		buildings.push (new building(random(10,1200), random(50,440),
		"#9FA2A4", random(100,200),height*i));
	}

}

function draw(){
	noStroke();

//skyline
for (var i=0; i < buildings.length; i++){
	buildings[i].drawBuilding()
}


//Jane
//hair
	fill("#2E0A07");
	rect(450,105,400,600,175);

//shirt
	fill(0);
	rect(400,420,500,300,140);

//SF emblem
	textSize(50);
	fill("#EB8306");
	text("S",730,560);
	text("F",740,584);

//NYU sticker
	fill("#5525C2");
	rect(518,515,90,54,5);

	fill(255);
	textSize(24);
	text("NYU",525,540);
	text("2018",545,560);

//face
	fill("#DCB886");
	ellipse(650,300,280,300);

//lips
	fill("#CF9574");
	ellipse(640,375,50,35);
	ellipse(660,375,50,35);
	ellipse(650,380,70,35);
	triangle(605,370,622,363,621,390);
	triangle(695,370,678,363,681,388);

//eyebrows
	noStroke();
	fill("#2E0A07");
	ellipse(585,255,85,40);
	ellipse(715,255,85,40);

	fill("#DCB886");
	ellipse(585,264,100,45);
	ellipse(715,264,100,45);

//eyes
	fill(0);
	ellipse(590,280,60,40);
	ellipse(710,280,60,40);

	fill("#DCB886");
	ellipse(593,287,65,40);
	ellipse(707,287,65,40);

	fill("#513A19");
	ellipse(590,273,20,20);
	ellipse(710,273,20,20);

	fill(0);
	ellipse(590,273,15,15);
	ellipse(710,273,15,15);

	triangle(550,270,568,267,560,278);
	triangle(730,268,748,267,740,279);

//nose
	fill("#CFA974");
	ellipse(633,327,20,20);
	ellipse(667,327,20,20);
	ellipse(650,325,30,30);

	fill("#DCB886")
	ellipse(633,322,20,20);
	ellipse(667,322,20,20);
	ellipse(654,320,30,30);

	textSize(30);
	fill("#32AFDE");
	text("Once upon a time there was a girl named Jane.", 330,40);


//text bubble
if(mouseIsPressed){
	fill(255);
	ellipse(730,350,20,20);
	ellipse(780,320,30,30);
	ellipse(850,275,40,40);
	ellipse(930,210,100,100);
	ellipse(980,240,100,100);
	ellipse(1050,235,100,100);
	ellipse(920,150,100,100);
	ellipse(970,120,100,100);
	ellipse(1030,125,100,100);
	ellipse(1070,180,100,100);
	ellipse(1000,180,100,100);

	textSize(20);
	fill("#9FA2A4");
	text("Hi I'm Jane!",940,130);
	text("I'm from San Francisco",895,160);
	text("and I moved to New",900,190);
	text("York City to attend", 905,220);
	text("NYU.",975,250);

	}

}

function mouseReleased(){
	background("#7DDCF3");

}

//if you click next button
function changeScene(){
	fill(0);
	rect(0,0,1300,600);

	}
