var timeConvert = function(num) {
	var hours = Math.floor(num/60);
	var minutes = num % 60;

	if(hours < 1){
		hours = 0;
	};

	console.log(hours);
	console.log(minutes);
	return hours + ':' + minutes;
}; 