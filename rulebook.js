var ball = document.getElementById("ball");
var one = document.getElementById("rulebook");
var rules = document.getElementById("rulebook2rules");
var map = document.getElementById("rulebook3map");
var four = document.getElementById("rulebook4antegria");
var five = document.getElementById("rulebook5arstotzka");
var six = document.getElementById("rulebook6impor");
var seven = document.getElementById("rulebook7kolechia");
var eight = document.getElementById("rulebook8obristan");
var nine = document.getElementById("rulebook9republia");
var ten = document.getElementById("rulebook10unitedfed");
var booth = document.getElementById("rulebook11booth");
var last = document.getElementById("rulebook12last");
var docs = document.getElementById("rulebook13docs");
var id= document.getElementById("rulebook14id");
var entry= document.getElementById("rulebook15entry");

var body = document.getElementById("base");
var loading = document.getElementById("cover");
var numeros = document.getElementById("chargenum");
var reglas = document.getElementById("chargerules");
var shad = document.getElementById("shadow");

var day = 1;


function hide2(){
	body.style.content = "all"
	one.style.display = "block";
	rules.style.display = "block";
	map.style.display = "block";
	four.style.display = "block";
	five.style.display = "block";
	six.style.display = "block";
	seven.style.display = "block";
	eight.style.display = "block";
	nine.style.display = "block";
	ten.style.display = "block";
	booth.style.display = "block";
	last.style.display = "block";
	docs.style.display = "block";
	id.style.display = "block";
	entry.style.display = "block";

	setTimeout(() => {  hide3(); }, 150);
}
function hide3(){
	numeros.style.display = "none";
	reglas.style.display = "none";
	pageone();
	uno();
	ball.style.display = "block";
	loading.style.display = "none";
}
function plus(){
	conta(true);
}
function minus(){
	conta(false);
}


function pageone(){
	hide();
	one.style.display = "block";
}
function pagetwo(){
	
	hide();
	rules.style.display = "block";
}
function pagethree(){
	
	hide();
	map.style.display = "block";
}
function pagefour(){
	
	hide();
	four.style.display = "block";
}
function pagefive(){
	
	hide();
	five.style.display = "block";
}
function pagesix(){
	
	hide();
	six.style.display = "block";
}
function pageseven(){
	
	hide();
	seven.style.display = "block";
}
function pageeight(){
	
	hide();
	eight.style.display = "block";
}
function pagenine(){
	
	hide();
	nine.style.display = "block";
}
function pageten(){
	
	hide();
	ten.style.display = "block";
}
function pagebooth(){
	
	hide();
	booth.style.display = "block";
}
function pagelast(){
	
	hide();
	last.style.display = "block";
}
function pagedocs(){
	
	hide();
	docs.style.display = "block";
}
function pageid(){
	
	hide();
	id.style.display = "block";
}
function pageentry(){
	
	hide();
	entry.style.display = "block";
}
function hide(){
	one.style.display = "none";
	rules.style.display = "none";
	map.style.display = "none";	
	four.style.display = "none";	
	five.style.display = "none";	
	six.style.display = "none";	
	seven.style.display = "none";	
	eight.style.display = "none";	
	nine.style.display = "none";	
	ten.style.display = "none";	
	booth.style.display = "none";	
	last.style.display = "none";	
	docs.style.display = "none";
	id.style.display = "none";
	entry.style.display = "none";
}
function shaders(){
	shad.style.boxShadow = "10px 10px 1px 2px black"
	ball.onmouseup = function(){
		shad.style.boxShadow = "0px 0px 0px 0px black"
	};

}