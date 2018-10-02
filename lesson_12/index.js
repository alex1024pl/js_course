'use strict'
	calculate();
	let history = [];
	history.push(num12);
	console.log(history);

	function calculate(){
		let num12;
		num12 = prompt('please choose the formula (1 or 2)');
		let one = '1111';
				if (num12 === 'exit'){
				return 1;
			}
				else if (num12 == '2') {
					twoform();
				}  
					else if (num12 == '1') {
						oneform();
						
					} 
						else if (num12 !== '1' || '2') {
							calculate();
						}
									
									
	}

			function oneform(){
				let k = prompt('choose k (y=kx+b)');if (k === 'exit'){return 1;}
				let x = prompt('choose x (y=kx+b)');if (x === 'exit'){return 1;}
			 	let b = prompt('choose b (y=kx+b)');if (b === 'exit'){return 1;}

					alert (k*x+parseInt(b));
			 		calculate();
			}


			function twoform(){
				let x = prompt('choose x (y=x^2)');if (x === 'exit'){return 1;}
			 		alert (x/2);
			 		calculate();
			}

			

// -----------------------analyzing data--------------------------------------
