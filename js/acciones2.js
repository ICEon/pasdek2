// JavaScript Document
$(document).ready(function(e) {

    $red=255;
	$green=35;
	$blue=35;
	$rango = 55;

//	hexString = yourNumber.toString(16);
	$categorias = 20;
	for ($i=0; $i<=$categorias; $i++)
	 {

		 $color = '#'+ $red.toString(16) + $green.toString(16) + $blue.toString(16);

		 if ($i==0)
		  {
		$cadena = '<a href="#" class="btn-opciones ui-btn ui-corner-all ui-icon-alert ui-btn-icon-right  ui-first-child" style="background-color:' + $color+ '">Todas</a>' ;	  
		  }
		 if ($i==1)
		  {
			$cadena +='<a href="#" class="btn-opciones ui-btn ui-corner-all ui-icon-star ui-btn-icon-right"  style="background-color:' + $color+ '">Favoritas</a>';  
		  }
		 if ($i> 1 && $i < $categorias)
		  {
		 $cadena += '<a href="#" class="btn-opciones ui-btn ui-corner-all ui-icon-star ui-btn-icon-right" style="background-color:' + $color +'">Categoria '+($i-1)+'</a>'
		  }
		 if ($red == 255 && $blue == 35 && $green <= 255)
		  {
			$green+= $rango;  
		  }
		 if ($red <= 255 && $blue == 35 && $green == 255)
		  {
			$red-= $rango;  
		  }
         if ($red == 35 && $blue >= 35 && $green == 255)
		  {
			$blue+= $rango;  
		  }
		 if ($red==35 && $green <= 255 && $blue==255)
		  {
			  $green -= $rango;
		  }
		 if ($red>=35 && $green ==35 && $blue==255)
		  {
			  $red += $rango;
		  }
		 if ($red==255 && $green == 35 && $blue<=255 && $blue>= 110)
		  {
			$blue -= $rango;
			if ($blue== 90)
			 {
				 $blue= 35;
			 }
		  }
		  
          
	 }
	$cadena += '<div class="ui-btn ui-corner-all ui-icon-star ui-btn-icon-right ui-last-child btn-opciones" style=" background-color:'+ $color+'">Categoria ' + ($i-2)+'</div>';
	$('#opciones div.ui-controlgroup-controls').append($cadena);
});