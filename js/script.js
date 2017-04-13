window.onload = function() {
	var x = document.getElementsByClassName("shrink")

	x[1].addEventListener("click", function() {
		[x[3], x[6], x[8]].forEach(function(i) {
			i.className += " color"
		})
	})

	x[4].addEventListener("click", function() {
		[x[1], x[5], x[6], x[8]].forEach(function(i) {
			i.className += " color"
		})
	})

	x[5].addEventListener("click", function() {
		[x[1], x[4], x[6], x[8]].forEach(function(i) {
			i.className += " color"
		})
	})

	x[6].addEventListener("click", function() {
		[x[1], x[3], x[8]].forEach(function(i) {
			i.className += " color"
		})
	})

	x[10].addEventListener("click", function() {
		[x[0], x[10], x[11], x[12]].forEach(function(i) {
			i == x[10] ? i.className += " color_three" : i.className += " color"
		})
	})

	x[11].addEventListener("click", function() {
		[x[0], x[10], x[12]].forEach(function(i) {
			i == x[10] ? i.className += " color_two" : i.className += " color"
		})
	})

	x[13].addEventListener("click", function() {
		[x[0], x[9], x[14]].forEach(function(i) {
			i == x[14] ? i.className += " color_two" : i.className += " color"
		})
	})

	x[14].addEventListener("click", function() {
		[x[0], x[9], x[13], x[14]].forEach(function(i) {
			i == x[14] ? i.className += " color_three" : i.className += " color"
		})
	})
}