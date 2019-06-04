function calcularReciclagem () {
    var opcao = document.getElementById("inlineFormCustomSelectPref").selectedIndex;
    var quantidade = document.getElementById("valorPeso").value;

    switch (opcao) {
        case 1:              
            var resultado = quantidade * 0.59;
            document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 2:
            var resultado = quantidade * 0.9;
            document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 3:
            var resultado = quantidade * 0.58;
            document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 4:
        var resultado = quantidade * 4;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 5:
        var resultado = quantidade * 0.07;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));
        break;

        case 6:
        var resultado = quantidade * 1.5;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 7:
        var resultado = quantidade * 3;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 8:
        var resultado = quantidade * 0.5;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        case 9:
        var resultado = quantidade * 0.2;
        document.getElementById("Lucro").innerHTML = parseFloat(resultado.toFixed(2));;
        break;

        default:
        break;
    }

    	let i=2;

	
	$(document).ready(function(){
		var radius = 200;
		var fields = $('.itemDot');
		var container = $('.dotCircle');
		var width = container.width();
 radius = width/2.5;
 
		 var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			if(window.console) {
				console.log($(this).text(), x, y);
			}
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
		
		
		$('.itemDot').click(function(){
			
			var dataTab= $(this).data("tab");
			$('.itemDot').removeClass('active');
			$(this).addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+ dataTab).addClass('active');
			i=dataTab;
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-1)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-1)*36)+"deg)",
				"transition":"1s"
			});
			
			
		});
		
		setInterval(function(){
			var dataTab= $('.itemDot.active').data("tab");
			if(dataTab>6||i>6){
			dataTab=1;
			i=1;
			}
			$('.itemDot').removeClass('active');
			$('[data-tab="'+i+'"]').addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+i).addClass('active');
			i++;
			
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-2)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-2)*36)+"deg)",
				"transition":"1s"
			});
			
			}, 5000);
		
	});



}