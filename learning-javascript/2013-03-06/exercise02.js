
for(var i=1; i<=10; i++){
	var riga = "";
	for(var j=1; j<=10; j++){
		var valore = i*j;
		riga = riga + " " + valore;
		if(j<10)
		riga = riga + ",";
	}
	console.log(riga);
};
