var pri = document.getElementById("primero");
var seg = document.getElementById("segundo");
var contador = 1;

var b4 = document.getElementById("button4");
var p4 = document.getElementById("pointer4");
var b5 = document.getElementById("button5");
var p5 = document.getElementById("pointer5");

var booth_l = document.getElementById("pagel10");
var booth_r = document.getElementById("pager11");
var last_l = document.getElementById("pagel11");
var docs_r = document.getElementById("pager12");
var docs_l = document.getElementById("pagel12");
var id_l = document.getElementById("pagel13");
var id_r = document.getElementById("pager13");
var entry_r = document.getElementById("pager14");
var entry_l = document.getElementById("pagel14");

var d3 = document.getElementById("doc3");
var d4 = document.getElementById("doc4");
var d5 = document.getElementById("doc5");
var d6 = document.getElementById("doc6");

var r1 = document.getElementById("rule1");
var r2 = document.getElementById("rule2");
var r3 = document.getElementById("rule3");
var r4 = document.getElementById("rule4");


function conta(contadorn){
	if (contadorn) {
		contador++;
	}else{
		contador--;
	}
	if (contador > 31) {
		contador = 1;
	}
	if (contador < 1) {
		contador = 31;
	}
	console.log(contador);
	sort(contador);
}
function askday(){
	return(contador);
}
function sort(contador){

	switch (contador){
		case 0:
			conta(true);
			break;
		case 1: 
			uno();
			break;
		case 2: 
			dos();
			break;
		case 3: 
			tres();
			break;
		case 4: 
			cuatro();
			break;
		case 5: 
			cinco();
			break;
		case 6: 
			seis();
			break;
		case 7: 
			siete();
			break;
		case 8: 
			ocho();
			break;
		case 9: 
			nueve();
			break;
		case 10: 
			diez();
			break;
		case 11: 
			once();
			break;
		case 12: 
			doce();
			break;
		case 13: 
			trece();
			break;
		case 14: 
			catorce();
			break;
		case 15: 
			quince();
			break;
		case 16: 
			dieciseis();
			break;
		case 17: 
			diecisiete();
			break;
		case 18: 
			dieciocho();
			break;
		case 19: 
			diecinueve();
			break;
		case 20: 
			veinte();
			break;
		case 21: 
			veintiuno();
			break;
		case 22: 
			veintidos();
			break;
		case 23: 
			veintitres();
			break;
		case 24: 
			veinticuatro();
			break;
		case 25: 
			veinticinco();
			break;
		case 26: 
			veintiseis();
			break;
		case 27: 
			veintisiete();
			break;
		case 28: 
			veintiocho();
			break;
		case 29: 
			veintinueve();
			break;
		case 30: 
			treinta();
			break;
		case 31: 
			treintaiuno();
			break;
		case 32:
			conta(false);
			break;
	}
}
function none(){

}
function uno(){
	pri.style.backgroundImage = "url(ppimg/days/none.png)";
	seg.style.backgroundImage = "url('ppimg/days/1.png')";
	r2.style.backgroundImage = "url('ppimg/rules/rule2.png')";

	b4.style.background = "rgb(228,230,189)";
	p4.style.background = "rgb(228,230,189)";
	b5.style.background = "rgb(228,230,189)";
	p5.style.background = "rgb(228,230,189)";
	b4.onclick = none;
	p4.onclick = none;

	pageone();
}
function dos(){
	pri.style.backgroundImage = "url(ppimg/days/none.png)";
	seg.style.backgroundImage = "url('ppimg/days/2.png')";
	r2.style.backgroundImage = "url('ppimg/rules/rule3.png')";
	r3.style.backgroundImage = "url('ppimg/rules/rule0.png')";

	pageone();
}
function tres(){
	pri.style.backgroundImage="url(ppimg/days/none.png)";
	seg.style.backgroundImage = "url('ppimg/days/3.png')";
	r2.style.backgroundImage = "url('ppimg/rules/rule3.png')";
	r3.style.backgroundImage = "url('ppimg/rules/rule4.png')";
	r4.style.backgroundImage = "url('ppimg/rules/rule0.png')";

	b4.style.background = "rgb(228,230,189)";
	p4.style.background = "rgb(228,230,189)";
	b4.onclick = none;
	p4.onclick = none;

	last_l.onclick = pagebooth;
	booth_r.onclick = pagelast;

	pageone();
}
function cuatro(){
	pageone();
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/4.png')";
	r3.style.backgroundImage = "url('ppimg/rules/rule5.png')";
	r4.style.backgroundImage = "url('ppimg/rules/rule6.png')";

	b4.style.background = "";
	p4.style.background = "rgb(148,150,123)";
	b4.onclick = pagedocs;
	p4.onclick = pagedocs;
	d3.style.background = "rgb(228,230,189)";
	d4.style.background = "rgb(228,230,189)";
	d5.style.background = "rgb(228,230,189)";
	d6.style.background = "rgb(228,230,189)";

	booth_r.onclick = pagedocs;
	last_l.onclick = pageentry;
	docs_l.onclick = pagebooth;
	docs_r.onclick = pageid;
	id_r.onclick = pageentry;
	id_l.onclick = pagedocs;
	entry_l.onclick = pageid;
	entry_r.onclick = pagelast;
}
function cinco(){
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/5.png')";
	
	b4.onclick = none;
	p4.onclick = none;
	d3.style.background = "";
	d4.style.background = "";
	d5.style.background = "";
	d6.style.background = "";

	pageone();
}

function seis(){
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/6.png')";
}
function siete(){
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/7.png')";
}
function ocho(){
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/8.png')";
}
function nueve(){
	pri.style.backgroundImage = "url('ppimg/days/none.png')";
	seg.style.backgroundImage = "url('ppimg/days/9.png')";
}


function diez(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/0.png')";
}
function once(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/1.png')";
}
function doce(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/2.png')";
}
function trece(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/3.png')";
}
function catorce(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/4.png')";
}
function quince(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/5.png')";
}
function dieciseis(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/6.png')";
}
function diecisiete(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/7.png')";
}
function dieciocho(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/8.png')";
}
function diecinueve(){
	pri.style.backgroundImage = "url('ppimg/days/1.png')";
	seg.style.backgroundImage = "url('ppimg/days/9.png')";
}


function veinte(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/0.png')";
}
function veintiuno(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/1.png')";
}
function veintidos(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/2.png')";
}
function veintitres(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/3.png')";
}
function veinticuatro(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/4.png')";
}
function veinticinco(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/5.png')";
}

function veintiseis(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/6.png')";
}
function veintisiete(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/7.png')";
}
function veintiocho(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/8.png')";
}
function veintinueve(){
	pri.style.backgroundImage = "url('ppimg/days/2.png')";
	seg.style.backgroundImage = "url('ppimg/days/9.png')";
}


function treinta(){
	pri.style.backgroundImage = "url('ppimg/days/3.png')";
	seg.style.backgroundImage = "url('ppimg/days/0.png')";
}
function treintaiuno(){
	pri.style.backgroundImage = "url('ppimg/days/3.png')";
	seg.style.backgroundImage = "url('ppimg/days/1.png')";
}