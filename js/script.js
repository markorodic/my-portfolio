window.onload = function() {

	var x = document.getElementsByClassName("shrink")
	var cross = document.getElementsByClassName("cross")
	var lines = document.getElementsByClassName("line")
	var env = document.getElementsByClassName("mail")

	animate = {
		first: [x[1], x[3], x[8]],
		second: [x[1], x[5], x[6], x[8]],
		third: [x[1], x[4], x[6], x[8]],
		fourth: [x[0], x[10], x[12]],
		fifth: [x[0], x[9], x[13], x[14]],
		sixth: [x[0], x[9], x[14]],
		seventh: [x[0], x[10], x[11], x[12]],
		eighth: [x[3], x[6], x[8]]
	}

	function createDiv(parent) {
		// var div = document.createElement("div")
		// var line = document.createElement("div")
		// var lineTwo = document.createElement("div")
		// parent.appendChild(div)
		// div.appendChild(line)
		// div.appendChild(lineTwo)
		// div.className = "cross"
		// div.className= "line"
		// div.className= "lineTwo"
	}

	x[1].addEventListener("click", function() {
		style = window.getComputedStyle(x[3])
		if (style.getPropertyValue('opacity') == "0") {
			animate.eighth.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
		} else {
			animate.eighth.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
		}
	})

	x[4].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.second.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
		} else {
			animate.second.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
		}
	})

	x[5].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.third.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
		} else {
			animate.third.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
		}
	})

	x[6].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.first.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
		} else {
			animate.first.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
		}
	})

	x[10].addEventListener("click", function() {
		x[10].style.opacity = "1"
		style = window.getComputedStyle(x[0])
		if (style.getPropertyValue('opacity') == "0") {
			animate.seventh.forEach(function(i) {
				if (i == x[10]) {
					i.classList.remove('minimize_boxes_three')
					i.classList.remove('minimize_boxes_two')
					i.classList.add('expand_boxes_three')
				} else {
					i.classList.remove('minimize_boxes')
					i.classList.add('expand_boxes')
				}
			})
		} else {
			animate.seventh.forEach(function(i) {
				if (i == x[10]) {
					i.classList.remove('expand_boxes_two')
					i.classList.remove('expand_boxes_three')
					i.classList.add('minimize_boxes_three')
				} else {
					i.classList.remove('expand_boxes')
					i.classList.add('minimize_boxes')
				}
			})
		}
	})

	x[11].addEventListener("click", function() {
		style = window.getComputedStyle(x[0])
		if (style.getPropertyValue('opacity') == "0") {
			animate.fourth.forEach(function(i) {
				if (i == x[10]) {
					i.classList.remove('minimize_boxes_two')
					i.classList.remove('minimize_boxes_three')
					i.classList.add('expand_boxes_two')
				} else {
					i.classList.remove('minimize_boxes')
					i.classList.add('expand_boxes')
				}
			})
		} else {
			animate.fourth.forEach(function(i) {
				if (i == x[10]) {
					i.classList.remove('expand_boxes_two')
					i.classList.remove('expand_boxes_three')
					i.classList.add('minimize_boxes_two')
				} else {
					i.classList.remove('expand_boxes')
					i.classList.add('minimize_boxes')
				}
			})
		}
	})

	x[13].addEventListener("click", function() {

		style = window.getComputedStyle(x[0])
		if (style.getPropertyValue('opacity') == "0") {
			animate.sixth.forEach(function(i) {
				if (i == x[14]) {
					i.classList.remove('minimize_boxes_two')
					i.classList.remove('minimize_boxes_three')
					i.classList.add('expand_boxes_two')
				} else {
					i.classList.remove('minimize_boxes')
					i.classList.add('expand_boxes')
				}
			})
		} else {
			animate.sixth.forEach(function(i) {
				if (i == x[14]) {
					i.classList.remove('expand_boxes_two')
					i.classList.remove('expand_boxes_three')
					i.classList.add('minimize_boxes_two')
				} else {
					i.classList.remove('expand_boxes')
					i.classList.add('minimize_boxes')
				}
			})
		}

		// animate.sixth.forEach(function(i) {
		// 	i == x[14] ? i.className += " minimize_boxes_two" : i.className += " minimize_boxes"
		// })
	})

	x[14].addEventListener("click", function() {
		x[14].style.opacity = "1"
		var style = window.getComputedStyle(x[0])
		if (style.getPropertyValue('opacity') == "0") {
			animate.fifth.forEach(function(i) {
				if (i == x[14]) {
					i.classList.remove('minimize_boxes_two')
					i.classList.remove('minimize_boxes_three')
					i.classList.add('expand_boxes_three')
				} else {
					i.classList.remove('minimize_boxes')
					i.classList.add('expand_boxes')
				}
			})
		} else {
			animate.fifth.forEach(function(i) {
				if (i == x[14]) {
					i.classList.remove('expand_boxes_two')
					i.classList.remove('expand_boxes_three')
					i.classList.add('minimize_boxes_three')
				} else {
					i.classList.remove('expand_boxes')
					i.classList.add('minimize_boxes')
				}
			})
		}

		// animate.fifth.forEach(function(i) {
		// 	i == x[14] ? i.className += " minimize_three" : i.className += " minimize_boxes"
		// })
	})

	document.onmousemove = function() {
	  // var x = document.getElementByTagName("Body"[0])
	  var width = (document.body.clientWidth)/(252 - 23)
	  var height = document.body.clientHeight/(253 - 2)
	  var x = (parseInt(event.clientX/ width,10) + 23)
	  var y = (parseInt(event.clientY/ height,10) + 2)
	  // document.body.style.backgroundColor = "rgb(" + y/4 + ", " + x/4 + ", 80)"
	  env[0].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.5)"
	  env[1].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.5)"
	  env[2].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.125)"
	}

	env.addEventListener("click", function() {
		
	})

	// cross[0].addEventListener("click", function() {
	// 	lines[0].style.display = 'none'
	// 	lines[1].style.display = 'none'
	// })
}