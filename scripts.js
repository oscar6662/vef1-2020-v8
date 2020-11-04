	/**
	* Verkefni 8 – Caesar dulmál með vefviðmóti
	*
	* Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
	* Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
	*/
	
	/**
	* Kóðar streng með því að hliðra honum um n stök.
	*
	* @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
	* @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
	* @param {string} alphabet Stafróf sem afkóða á út frá
	* @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
	*/
	function encode(str, n, LETTERS) {
		var result = "";
		for(let i = 0; i<str.length; i++){
			result += LETTERS[(LETTERS.indexOf(str[i])+parseInt(n))%LETTERS.length]; 
		}
		str=result;
	return str;
	}
	
	/**
	* Afkóðar streng með því að hliðra honum um n stök.
	*
	* @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
	* @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
	* @param {string} alphabet Stafróf sem afkóða á út frá
	* @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
	*/
	function decode(str, n, LETTERS) {
		var result = "";	
		for(let i = 0; i<str.length; i++){
			result += LETTERS[(((LETTERS.indexOf(str[i])-parseInt(n))%(LETTERS.length))+(LETTERS.length))%(LETTERS.length)]; 
		}
		str=result;
	return str;
	}
	
	let LETTERS = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
	
	// Default type, uppfært af radio input
	let type2 = 'encode';
	
	// Default hliðrun, uppfært af "shift"
	let n = 3;
	
	let str = "";
	
	document.getElementById("shiftValue").innerHTML=n;
	
	function shiftamount(newVal){
		document.getElementById("shiftValue").innerHTML=newVal;
		n = newVal;
		if(str == ""){
			document.getElementById("result").innerHTML="No string has been inputed";
		}else{
			for(let i = 0;i<str.length;i++){
				if(LETTERS.includes(str[i])==false){
					document.getElementById("result").innerHTML='Þú gafst upp stafi sem ekki er hægt að kóða: '+str[i]+'. Reyndu aftur.';
				}else{
					if(type2=='encode'){
						document.getElementById("result").innerHTML=encode(str,n,LETTERS);
					}else{
						document.getElementById("result").innerHTML=decode(str,n,LETTERS);
					}	
				}		
			}
		}
	}	
	
	const source = document.getElementById('string');
	
	const string = function(theThing) {
		str = theThing.target.value;
		if(str == ""){
			document.getElementById("result").innerHTML="There isn't a string to play with anymore";
		}else{
			for(let i = 0;i<str.length;i++){
				if(LETTERS.includes(str[i])==false){
					document.getElementById("result").innerHTML='Þú gafst upp stafi sem ekki er hægt að kóða: '+str[i]+'. Reyndu aftur.';
				}else{
					if(type2=='encode'){
						document.getElementById("result").innerHTML=encode(str,n,LETTERS);
					}else{
						document.getElementById("result").innerHTML=decode(str,n,LETTERS);
					}
				}
			}
		}
	}
	
	source.addEventListener('input', string);
	source.addEventListener('change', string); 
	
	
	const source2 = document.getElementById('alphabet');
	
	const alphabet = function(theAlphabet) {
		LETTERS = theAlphabet.target.value;
		document.getElementById("shift").setAttribute("max", LETTERS.length);
		
		if(type2=='encode'){
			document.getElementById("result").innerHTML=encode(str,n,LETTERS);
		}else{
			document.getElementById("result").innerHTML=decode(str,n,LETTERS);
			}
		}
	
	source2.addEventListener('input', alphabet);
	source2.addEventListener('change', alphabet); 
	
	function what(myRadio) {
		type2 = myRadio.value;
		if(type2=='encode'){
			document.getElementById("result").innerHTML=encode(str,n,LETTERS);
		}else{
			document.getElementById("result").innerHTML=decode(str,n,LETTERS);
			}
	}

	
	// Default hliðrun, uppfært af "shift"	
	const Caesar = (() => {
		// Default stafróf, uppfært þegar slegið inn í "alphabet"
		let alphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
		
		// Default type, uppfært af radio input
		let type = 'encode';
		
		// Default hliðrun, uppfært af "shift"
		let shift = 3;
		function init(el) {
		// Setja event handlera á viðeigandi element
		}
		return {
			init,
		};
	})();
	
	document.addEventListener('DOMContentLoaded', () => {
	const ceasarForm = document.querySelector('.ceasar');
	
	Caesar.init(ceasarForm);
	});
	