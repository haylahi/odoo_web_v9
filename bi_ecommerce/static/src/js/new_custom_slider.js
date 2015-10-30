	$(document).ready(function() {

	
	$(".footer-deal").owlCarousel({
	autoPlay :true,
	stopOnHover : true,
	goToFirstSpeed : 2000,
	slideSpeed:1500,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"goDown",
	paginationNumbers:true
	});	

	var now = new Date();
	var current_year = now.getFullYear();
	var next_year = current_year + 1;

	var target_date = new Date("Jan 1, " + next_year).getTime();

	var days, hours, minutes, seconds;

	var $hours = document.getElementById("h");
	var $minutes = document.getElementById("m");
	var $seconds = document.getElementById("s");

	function update() {
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = parseInt(seconds_left / 86400);
	seconds_left = seconds_left % 86400;

	hours = parseInt(seconds_left / 500);
	seconds_left = seconds_left % 500;

	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);

	$hours.innerHTML = pad(hours, 2);
	$minutes.innerHTML = pad(minutes, 2);
	$seconds.innerHTML = pad(seconds, 2);
	}


	update();

	setInterval(update, 1000);

	function pad(num, size) {
	var s = num+"";
	while (s.length < size) s = "0" + s;
	return s;
	}		

	
	});

