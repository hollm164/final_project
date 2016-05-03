var buildings = [];

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
	rect(450,105,400,600,170);

//shirt
	fill(0);
	rect(400,430,500,300,140);
	textSize(50);
	fill("#EB8306");
	text("S",700,550);
	text("F",735,575);

	fill("#5525C2");
	rect(518,515,90,54,5);

	fill(255);
	textSize(24);
	text("NYU",525,540);
	text("2018",545,560);

//face
	fill("#DCB886");
	ellipse(650,300,290,300);

//dimples
	fill("#CFA974");
	ellipse(605,370,30,30);
	ellipse(695,370,30,30);

	fill("#DCB886");
	ellipse(610,373,38,40);
	ellipse(690,373,38,40);

//lips
	fill("#CF9574");
	ellipse(640,375,50,35);
	ellipse(660,375,50,35);
	ellipse(650,380,70,35);
	triangle(605,370,622,363,621,390);
	triangle(695,370,678,363,681,388);

//eyebrows
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
	ellipse(590,287,65,40);
	ellipse(710,287,65,40);

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
	ellipse(650,330,25,20);
	ellipse(633,327,15,15);
	ellipse(667,327,15,15);

	fill("#DCB886")
	ellipse(650,325,25,20);
	ellipse(633,322,15,15);
	ellipse(667,322,15,15);






}
