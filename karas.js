this.instance = {};
$(document).ready(function(){
	load();
});

let load = function(){
	
	let params = new URLSearchParams(window.location.search);
	console.log(params);
	this.instance.type = 1;

	if(params.get("type")){
		this.instance.type = params.get("type");
		$("#pnlResultado").attr("title", this.instance.type).css("border", "1px solid red");
	}

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

	return criptografarTexto(this.instance.type, texto);
	
}
let criptografarTexto = function(type, text){

	if(type == 2){
		let result = criptografarVogais(text);	
		result = criptografarTenisPolar(result);
		return result;
	}

	return criptografarVogais(text);	
	
}
let criptografarTenisPolar = function(texto){
	let result = "";
	for(let caractere of texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")){
		if(caractere == "t"){
			result += "p";
		}
		else if(caractere == "e"){
			result += "o";
		}
		else if(caractere == "n"){
			result += "l";
		}
		else if(caractere == "i"){
			result += "a";
		}
		else if(caractere == "s"){
			result += "r";
		}
		else if(caractere == "p"){
			result += "t";
		}
		else if(caractere == "o"){
			result += "e";
		}
		else if(caractere == "l"){
			result += "n";
		}
		else if(caractere == "a"){
			result += "i";
		}
		else if(caractere == "r"){
			result += "s";
		}
		
		else{
			result += caractere;
		}
	}
	return result;
}
let criptografarVogais = function(text){
	let result = "";
	for(let caractere of text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")){
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
	return descriptografarTexto(this.instance.type, texto);
}
let descriptografarTexto = function(type, texto){
	if(type == 2){
		let result = descriptografarTenisPolar(texto);
		result = descriptografarVogais(result);
		return result;
	}

	return descriptografarVogais(texto);
}
let descriptografarTenisPolar = function(texto){
	let result = '';

	for(let caractere of texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")){
		if(caractere == "t"){
			result += "p";
		}
		else if(caractere == "e"){
			result += "o";
		}
		else if(caractere == "n"){
			result += "l";
		}
		else if(caractere == "i"){
			result += "a";
		}
		else if(caractere == "s"){
			result += "r";
		}
		else if(caractere == "p"){
			result += "t";
		}
		else if(caractere == "o"){
			result += "e";
		}
		else if(caractere == "l"){
			result += "n";
		}
		else if(caractere == "a"){
			result += "i";
		}
		else if(caractere == "r"){
			result += "s";
		}
		else{
			result += caractere;
		}
	}

	return result;
}
let descriptografarVogais = function(texto){
	let result = texto;

	result = result.toLowerCase().replace(/ais/g,"a");
	result = result.toLowerCase().replace(/enter/g,"e");
	result = result.toLowerCase().replace(/inis/g,"i");
	result = result.toLowerCase().replace(/omber/g,"o");
	result = result.toLowerCase().replace(/ufter/g,"u");

	return result;
}