			
	function ovulationCalculator() {
			var previuosMens = document.getElementById('previous_period').value; //date of previous menstruation
			var currentMens = document.getElementById('current_period').value; //date of current menstruation
			
			document.getElementById('last_ovulation').value = currentMens; // date of ovulation between previous menstruation and the current one
			document.getElementById('next_mens').value = currentMens; //value of next menstruation afeter the last one
			document.getElementById('next_ovulation').value = currentMens; //value of next ovulation after the last one
			document.getElementById('ovulation_window1').value = currentMens; //ovulation window btw the last mentruation and the current one
			document.getElementById('ovulation_window2').value = currentMens; //ovulation window btw the last mentruation and the current one
			document.getElementById('ovulation_window3').value = currentMens; //ovulation window btw the current mentruation and the next one
			document.getElementById('ovulation_window4').value = currentMens; //ovulation window btw the current mentruation and the next one
			document.getElementById('safe_period1').value = currentMens; 
			document.getElementById('safe_period2').value = currentMens;
			document.getElementById('safe_period3').value = currentMens;
			document.getElementById('safe_period4').value = currentMens;
									
			var date1 = new Date(previuosMens);
			var previous_date = date1.getTime();
			var date2 = new Date(currentMens);
			var current_date = date2.getTime();
						
			var date_diff = (current_date - previous_date);
			var seconds = (date_diff / 1000);
			var minutes = (seconds / 60);
			var hours = (minutes / 60);
			var days = (hours / 24);
			
		var cycle = document.getElementById('mCycle').innerHTML = days + " DAYS ";
		console.log(cycle);
		document.getElementById('ovulation_day').innerHTML = (days - 14); // day of ovulation between previous menstruation and the last one
		document.getElementById('last_ovulation').stepDown(14); // date of ovulation between previous menstruation and the last one
		document.getElementById('next_mens').stepUp(days); //date of next menstruation afeter the last one
		document.getElementById('next_ovulation').stepUp(days - 14); //date of next ovulation after the last one
		document.getElementById('ovulation_window1').stepDown(18); 
		document.getElementById('ovulation_window2').stepDown(14);
		document.getElementById('ovulation_window3').stepUp(days - 18);
		document.getElementById('ovulation_window4').stepUp(days - 14);
		document.getElementById('safe_period1').value = currentMens;
		document.getElementById('safe_period2').stepUp(9);
		document.getElementById('safe_period3').stepUp(15);
		document.getElementById('safe_period4').stepUp(37);	
	}