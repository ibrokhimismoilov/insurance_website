/*************************************************************************/
/******************************JQuery*************************************/
/*************************************************************************/


$(document).ready(function(){
//********************** section1

	// Sozlamalar bo'limi ko'rinmay turadi	
	$("#saytRangiBlock").hide();			
	
	// Sozlamalar bo'limi block bolsa none aks holda block
	$("#saytRangi").click(function() {
		$("#saytRangiBlock").toggle(400);
	});
	
	// Sayt rangi chorno beliy bo'ladi
	$("#saytOqQora").click(function() {
	 	$("#sayt").css({
			"filter" : "grayscale(1)",
		});
	});

	// sayt rangi svetnoy bo'ladi
	$("#saytRangli").click(function() {
		$("#sayt").css({
			"filter" : "grayscale(0)"
		});
	});
	

	// Rasm tugma bosilganga block bolsa none bo'ladi aks holda block
	var a = 0;
	$("#saytRasmlar").click(function() {
		if(a == 0){
			$("img").css({"display":"none"}); a = 1;	
		}
		else{
			$("img").css({"display":"block"}); a = 0;	
		}
	})


	// Refresh tugma bosilaganda
	$("#saytAvvalgi").click(function() {
		// Sayt rangi svetnoy bo'ladi
		$("#sayt").css({
			"filter" : "grayscale(0)"
		});
		
		// Rasmlar block bo'ladi
		$("img").css({"display":"block"});

		// Textlar font-size avvalgi holga qaytadi
		/*******************************section1*******************************/
			$("#header_tepa_right > p").css({"font-size":"12pt"/*12pt*/})
			$("#korinish > h5").css({"font-size":"12pt"/*12pt*/})
			$("#til > a").css({"font-size":"12pt"/*12pt*/})
			$("#header_orta_left > #header_orta_text > h1").css({"font-size":"45px"/*45px*/})
			$("#header_orta_left > #header_orta_text > h1 > span").css({"font-size":"55px"/*55px*/})
			$("#header_orta_left > #header_orta_text > h2").css({"font-size":"20px"/*20px*/})
			$("#nomer_ong > p").css({"font-size":"18px"/*18px*/})
			$("#nomer_ong > h2").css({"font-size":"25px"/*25px*/})
			$("#nomer_ong > h2 > span").css({"font-size":"35px"/*35px*/})
			$("#qidiruv > button > i").css({"font-size":"20px"/*20px*/})
			$("#header_menu > #header_menu_ichki > ul > li > a").css({"font-size":"12pt"/*12pt*/})

		/*******************************section2*******************************/
		
		/****************************slider-carusel****************************/

		/*******************************section3*******************************/
			
			$("#section3_ichki > #vidiStrahovaniya").css({"font-size":"30px"/*30px*/})
			$("#menular > .strahovaniya_menu > h3").css({"font-size":"20px"/*20px*/})
			$(".MenuBolimlari_tugmalari").css({"font-size":"20px"/*20px*/})

		/*******************************section4*******************************/

			$(".sec4Sarlovha").css({"font-size":"25px"/*25px*/})
			$("#Okompanii > p").css({"font-size":"17px"/*17px*/})
			$(".sec4Button_active, .sec4Button").css({"font-size":"20px"/*20px*/})
			$(".cards > p").css({"font-size":"15px"/*15px*/})
			$(".cards_sana > p").css({"font-size":"20px"/*20px*/})
			$(".cards_sana > p > span").css({"font-size":"30px"/*30px*/})
				
		/*******************************section5*******************************/

			$("#section5_ichki > #filiallar_chap > h3").css({"font-size":"20pt"/*20pt*/})
			$("#section5_ichki > #filiallar_chap > form > select").css({"font-size":"18px"/*18px*/})
			$("#filiallarHaqida > h6").css({"font-size":"14pt"/*14pt*/})
			$("#filiallarHaqida > a").css({"font-size":"14pt"/*14pt*/})
			$("#filiallar_ong h4").css({"font-size":"14pt"/*14pt*/})

		/*******************************section6*******************************/
			
			$("#section6_ichki > h3").css({"font-size":"28pt"/*28pt*/})

		/*******************************section7AndFooter*******************************/
			
			$("#strahvaniyaKompaniya > h3").css({"font-size":"20pt"/*20pt*/})
			$("#strahvaniyaKompaniya > h4").css({"font-size":"18pt"/*18pt*/})
			$("#strahvaniyaKompaniya > table p, a").css({"font-size":"13pt"/*13pt*/})
			$("#Navigatsiya > h3").css({"font-size":"20pt"/*20pt*/})		
			$("#Navigatsiya > #Shaxslar h4").css({"font-size":"13pt"/*13pt*/})
			$("#Navigatsiya > #Shaxslar ul li a").css({"font-size":"10pt"/*10pt*/})
			$("#otpravitSapsheniya > h3").css({"font-size":"20pt"/*20pt*/})
			$("#otpravitSapsheniya form input").css({"font-size":"12pt"/*12pt*/})
			$("#otpravitSapsheniya form textarea").css({"font-size":"12pt"/*12pt*/})
			$("footer > p").css({"font-size":"12pt"/*12pt*/})
	});
	
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
$("#saytAplus").click(function(){	
	/*******************************section1*******************************/
		$("#header_tepa_right > p").css({"font-size":"14pt"/*12pt*/})
		$("#korinish > h5").css({"font-size":"14pt"/*12pt*/})
		$("#til > a").css({"font-size":"14pt"/*12pt*/})
		$("#header_orta_left > #header_orta_text > h1").css({"font-size":"50px"/*45px*/})
		$("#header_orta_left > #header_orta_text > h1 > span").css({"font-size":"60px"/*55px*/})
		$("#header_orta_left > #header_orta_text > h2").css({"font-size":"25px"/*20px*/})
		$("#nomer_ong > p").css({"font-size":"23px"/*18px*/})
		$("#nomer_ong > h2").css({"font-size":"27px"/*25px*/})
		$("#nomer_ong > h2 > span").css({"font-size":"37px"/*35px*/})
		$("#qidiruv > button > i").css({"font-size":"25px"/*20px*/})
		// $("#header_menu > #header_menu_ichki > ul > li > a").css({"font-size":"12pt"/*12pt*/})

	/*******************************section2*******************************/
		
	/****************************slider-carusel****************************/

	/*******************************section3*******************************/
		
		$("#section3_ichki > #vidiStrahovaniya").css({"font-size":"35px"/*30px*/})
		$("#menular > .strahovaniya_menu > h3").css({"font-size":"25px"/*20px*/})
		$(".MenuBolimlari_tugmalari").css({"font-size":"25px"/*20px*/})

	/*******************************section4*******************************/

		$(".sec4Sarlovha").css({"font-size":"30px"/*25px*/})
		$("#Okompanii > p").css({"font-size":"23px"/*17px*/})
		$(".sec4Button_active, .sec4Button").css({"font-size":"25px"/*20px*/})
		$(".cards > p").css({"font-size":"20px"/*15px*/})
		$(".cards_sana > p").css({"font-size":"25px"/*20px*/})
		$(".cards_sana > p > span").css({"font-size":"35px"/*30px*/})

	/*******************************section5*******************************/

		$("#section5_ichki > #filiallar_chap > h3").css({"font-size":"23pt"/*20pt*/})
		$("#section5_ichki > #filiallar_chap > form > select").css({"font-size":"23px"/*18px*/})
		$("#filiallarHaqida > h6").css({"font-size":"16pt"/*14pt*/})
		$("#filiallarHaqida > a").css({"font-size":"16pt"/*14pt*/})
		$("#filiallar_ong h4").css({"font-size":"16pt"/*14pt*/})

	/*******************************section6*******************************/
		
		$("#section6_ichki > h3").css({"font-size":"33pt"/*28pt*/})

	/*******************************section7AndFooter*******************************/
		
		$("#strahvaniyaKompaniya > h3").css({"font-size":"22pt"/*20pt*/})
		$("#strahvaniyaKompaniya > h4").css({"font-size":"20pt"/*18pt*/})
		$("#strahvaniyaKompaniya > table p, a").css({"font-size":"15pt"/*13pt*/})
		$("#Navigatsiya > h3").css({"font-size":"22pt"/*20pt*/})		
		$("#Navigatsiya > #Shaxslar h4").css({"font-size":"15pt"/*13pt*/})
		$("#Navigatsiya > #Shaxslar ul li a").css({"font-size":"12pt"/*10pt*/})
		$("#otpravitSapsheniya > h3").css({"font-size":"22pt"/*20pt*/})
		$("#otpravitSapsheniya form input").css({"font-size":"14pt"/*12pt*/})
		$("#otpravitSapsheniya form textarea").css({"font-size":"14pt"/*12pt*/})
		$("footer > p").css({"font-size":"14pt"/*12pt*/})
	});

$("#saytA").click(function(){
	/*******************************section1*******************************/
		$("#header_tepa_right > p").css({"font-size":"12pt"/*12pt*/})
		$("#korinish > h5").css({"font-size":"12pt"/*12pt*/})
		$("#til > a").css({"font-size":"12pt"/*12pt*/})
		$("#header_orta_left > #header_orta_text > h1").css({"font-size":"45px"/*45px*/})
		$("#header_orta_left > #header_orta_text > h1 > span").css({"font-size":"55px"/*55px*/})
		$("#header_orta_left > #header_orta_text > h2").css({"font-size":"20px"/*20px*/})
		$("#nomer_ong > p").css({"font-size":"18px"/*18px*/})
		$("#nomer_ong > h2").css({"font-size":"25px"/*25px*/})
		$("#nomer_ong > h2 > span").css({"font-size":"35px"/*35px*/})
		$("#qidiruv > button > i").css({"font-size":"20px"/*20px*/})
		$("#header_menu > #header_menu_ichki > ul > li > a").css({"font-size":"12pt"/*12pt*/})

	/*******************************section2*******************************/
	
	/****************************slider-carusel****************************/

	/*******************************section3*******************************/
		
		$("#section3_ichki > #vidiStrahovaniya").css({"font-size":"30px"/*30px*/})
		$("#menular > .strahovaniya_menu > h3").css({"font-size":"20px"/*20px*/})
		$(".MenuBolimlari_tugmalari").css({"font-size":"20px"/*20px*/})

	/*******************************section4*******************************/

		$(".sec4Sarlovha").css({"font-size":"25px"/*25px*/})
		$("#Okompanii > p").css({"font-size":"17px"/*17px*/})
		$(".sec4Button_active, .sec4Button").css({"font-size":"20px"/*20px*/})
		$(".cards > p").css({"font-size":"15px"/*15px*/})
		$(".cards_sana > p").css({"font-size":"20px"/*20px*/})
		$(".cards_sana > p > span").css({"font-size":"30px"/*30px*/})
			
	/*******************************section5*******************************/

		$("#section5_ichki > #filiallar_chap > h3").css({"font-size":"20pt"/*20pt*/})
		$("#section5_ichki > #filiallar_chap > form > select").css({"font-size":"18px"/*18px*/})
		$("#filiallarHaqida > h6").css({"font-size":"14pt"/*14pt*/})
		$("#filiallarHaqida > a").css({"font-size":"14pt"/*14pt*/})
		$("#filiallar_ong h4").css({"font-size":"14pt"/*14pt*/})

	/*******************************section6*******************************/
		
		$("#section6_ichki > h3").css({"font-size":"28pt"/*28pt*/})

	/*******************************section7AndFooter*******************************/
		
		$("#strahvaniyaKompaniya > h3").css({"font-size":"20pt"/*20pt*/})
		$("#strahvaniyaKompaniya > h4").css({"font-size":"18pt"/*18pt*/})
		$("#strahvaniyaKompaniya > table p, a").css({"font-size":"13pt"/*13pt*/})
		$("#Navigatsiya > h3").css({"font-size":"20pt"/*20pt*/})		
		$("#Navigatsiya > #Shaxslar h4").css({"font-size":"13pt"/*13pt*/})
		$("#Navigatsiya > #Shaxslar ul li a").css({"font-size":"10pt"/*10pt*/})
		$("#otpravitSapsheniya > h3").css({"font-size":"20pt"/*20pt*/})
		$("#otpravitSapsheniya form input").css({"font-size":"12pt"/*12pt*/})
		$("#otpravitSapsheniya form textarea").css({"font-size":"12pt"/*12pt*/})
		$("footer > p").css({"font-size":"12pt"/*12pt*/})
});

$("#saytAminus").click(function(){
		
	/*******************************section1*******************************/

		$("#header_tepa_right > p").css({"font-size":"10pt"/*12pt*/})
		$("#korinish > h5").css({"font-size":"10pt"/*12pt*/})
		$("#til > a").css({"font-size":"10pt"/*12pt*/})
		$("#header_orta_left > #header_orta_text > h1").css({"font-size":"40px"/*45px*/})
		$("#header_orta_left > #header_orta_text > h1 > span").css({"font-size":"50px"/*55px*/})
		$("#header_orta_left > #header_orta_text > h2").css({"font-size":"15px"/*20px*/})
		$("#nomer_ong > p").css({"font-size":"13px"/*18px*/})
		$("#nomer_ong > h2").css({"font-size":"20px"/*25px*/})
		$("#nomer_ong > h2 > span").css({"font-size":"30px"/*35px*/})
		$("#qidiruv > button > i").css({"font-size":"15px"/*20px*/})
		$("#header_menu > #header_menu_ichki > ul > li > a").css({"font-size":"10pt"/*12pt*/})

	/*******************************section2*******************************/
		
	/****************************slider-carusel****************************/

	/*******************************section3*******************************/
		
		$("#section3_ichki > #vidiStrahovaniya").css({"font-size":"25px"/*30px*/})
		$("#menular > .strahovaniya_menu > h3").css({"font-size":"15px"/*20px*/})
		$(".MenuBolimlari_tugmalari").css({"font-size":"15px"/*20px*/})

	/*******************************section4*******************************/

		$(".sec4Sarlovha").css({"font-size":"20px"/*25px*/})
		$("#Okompanii > p").css({"font-size":"12px"/*17px*/})
		$(".sec4Button_active, .sec4Button").css({"font-size":"15px"/*20px*/})
		$(".cards > p").css({"font-size":"10px"/*15px*/})
		$(".cards_sana > p").css({"font-size":"15px"/*20px*/})
		$(".cards_sana > p > span").css({"font-size":"25px"/*30px*/})
		
	/*******************************section5*******************************/

		$("#section5_ichki > #filiallar_chap > h3").css({"font-size":"18pt"/*20pt*/})
		$("#section5_ichki > #filiallar_chap > form > select").css({"font-size":"13px"/*18px*/})
		$("#filiallarHaqida > h6").css({"font-size":"12pt"/*14pt*/})
		$("#filiallarHaqida > a").css({"font-size":"12pt"/*14pt*/})
		$("#filiallar_ong h4").css({"font-size":"12pt"/*14pt*/})

	/*******************************section6*******************************/
		
		$("#section6_ichki > h3").css({"font-size":"26pt"/*28pt*/})

	/*******************************section7AndFooter*******************************/
		
		$("#strahvaniyaKompaniya > h3").css({"font-size":"18pt"/*20pt*/})
		$("#strahvaniyaKompaniya > h4").css({"font-size":"16pt"/*18pt*/})
		$("#strahvaniyaKompaniya > table p, a").css({"font-size":"11pt"/*13pt*/})
		$("#Navigatsiya > h3").css({"font-size":"18pt"/*20pt*/})		
		$("#Navigatsiya > #Shaxslar h4").css({"font-size":"11pt"/*13pt*/})
		$("#Navigatsiya > #Shaxslar ul li a").css({"font-size":"8pt"/*10pt*/})
		$("#otpravitSapsheniya > h3").css({"font-size":"18pt"/*20pt*/})
		$("#otpravitSapsheniya form input").css({"font-size":"10pt"/*12pt*/})
		$("#otpravitSapsheniya form textarea").css({"font-size":"10pt"/*12pt*/})
		$("footer > p").css({"font-size":"10pt"/*12pt*/})
});


//****************************** section 3

	$("#leftMenu").css({"background":"linear-gradient(to bottom, #fafaaa, #fafafa)"});
	$("#rightMenuBolimlari").hide();
	$("#leftMenuBolimlari").show();
	
	$("#rightMenu").click(function() {
		$("#leftMenu").css({"background":"none"});
		$(this).css({"background":"linear-gradient(to bottom, #fafaaa, #fafafa)"});
		$("#leftMenuBolimlari").hide();
		$("#rightMenuBolimlari").show();
	});

	$("#leftMenu").click(function() {
		$("#rightMenu").css({"background":"none"});
		$(this).css({"background":"linear-gradient(to bottom, #fafaaa, #fafafa)"});
		$("#rightMenuBolimlari").hide();
		$("#leftMenuBolimlari").show();
	});

//****************************** section 4

	let sec4_eni = 270;
	let sec4_k = 4;

	$("#chap").click(function(){
		if(sec4_k == 0){
			$("#carusel_rolik").css({
				"transition-duration" : "0ms",
				"margin-left":"-1080px",
			})
			sec4_k = 4;
		}
		else{
			sec4_k--;
			$("#carusel_rolik").css({
				"transition-duration" : "300ms",
				"margin-left": ((-1) * (sec4_eni) * sec4_k) + "px",
			})
		}
	})

	$("#ong").click(function(){
		if(sec4_k == 8){
			$("#carusel_rolik").css({
				"transition-duration" : "0ms",
				"margin-left":"-1080px",
			})
			sec4_k = 4;
		}
		else{
			sec4_k++;
			$("#carusel_rolik").css({
				"transition-duration" : "300ms",
				"margin-left": ((-1) * (sec4_eni) * sec4_k) + "px",
			})
		}
	})



//--------------------------------------------------
//------------------------------------------section5
	$("#and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
	$("#andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
	$("#Sec5Viloyatlar").change(function(){
		// $("#filiallar_ong > div").css({"display","none"});
		var sec5 = $(this).val();
		if(sec5 == 1){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#farHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#far").show();
		}
		else if(sec5 == 2){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#andHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#and").show();
		}
		else if(sec5 == 3){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#namHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#nam").show();
		}
		else if(sec5 == 4){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#toshHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#tosh").show();
		}
		else if(sec5 == 5){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#gulHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#gul").show();
		}
		else if(sec5 == 6){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#jizHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#jiz").show();
		}
		else if(sec5 == 7){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#samHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#sam").show();
		}
		else if(sec5 == 8){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#qashHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#qash").show();
		}
		else if(sec5 == 9){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#surHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#sur").show();
		}
		else if(sec5 == 10){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#buhHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#buh").show();
		}
		else if(sec5 == 11){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#farHaqida").show();
			$("#nav, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#nav").show();
		}
		else if(sec5 == 12){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#farHaqida").show();
			$("#xor, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#xor").show();
		}
		else if(sec5 == 13){
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#qorHaqida").show();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
			$("#qor").show();
		}
		else{
			$("#farHaqida, #andHaqida, #toshHaqida, #namHaqida, #gulHaqida, #jizHaqida, #samHaqida, #qashHaqida, #surHaqida, #buhHaqida, #navHaqida, #xorHaqida, #qorHaqida").hide();
			$("#far, #and, #tosh, #nam, #gul, #jiz, #sam, #qash, #sur, #buh, #nav, #xor, #qor").hide();
		}
	})
})

