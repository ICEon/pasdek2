// JavaScript Document

$(document).ready(function(e) {
	
document.addEventListener("deviceready", onDeviceReady, false);
});


function onDeviceReady() {
	$('#titulon').on('click', function(){
		alert ("quien");
	});
	
	alert ("here");
	$('#btnEnviar').on('click', function() {
	alert ("click");
		var  fdatos = "tipo=" +  $('#tipoIncidente').val() + ", dsc=" + $('#descripcionIncidente').val();
		$.ajax({
			url: "http://192.168.1.104/recibir/recibir.php",
			data: fdatos,
			type: "POST", 
			error: function(e){
			 alert ('Error en el envio' + e);
			}, 
success: function(respuesta){
alert (respuesta);	
}
		});		
	});
	
  }