$(document).ready(function(){
	load();
});

let load = function(){
	
	$("#btnExecutar").on('click', executar);
}

let executar = function(e){
	let input = $("#txtInput").val();
	let action = $("#ddlAction").val();
	let resultado = "";
	if(action == "1"){
		resultado = criptografar(input)
	}
	else{
		resultado = descriptografar(input)
	}

	$("#pnlResultado").text(resultado);
}
let criptografar = function(texto){
	let result = "";
	for(let caractere of texto.toLowerCase()){
		if(caractere == "a"){
			result += "ais";
		}
		else if(caractere == "e"){
			result += "enter";
		}
		else if(caractere == "i"){
			result += "inis";
		}
		else if(caractere == "o"){
			result += "omber";
		}
		else if(caractere == "u"){
			result += "ufter";
		}
		else{
			result += caractere;
		}
	}
	return result;
}
let descriptografar = function(texto){
	let result = texto;

	result = result.toLowerCase().replace(/ais/g,"a");
	result = result.toLowerCase().replace(/enter/g,"e");
	result = result.toLowerCase().replace(/inis/g,"i");
	result = result.toLowerCase().replace(/omber/g,"o");
	result = result.toLowerCase().replace(/ufter/g,"u");

	return result;
}