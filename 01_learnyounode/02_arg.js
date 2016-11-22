
function addNumbers(){
	argvArray = process.argv;
	var sum = 0;

	for(var i=2;i <argvArray.length; i++){
		sum += Number(argvArray[i]);
	}

	console.log(sum);
}

addNumbers();