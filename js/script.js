window.onload = function() {

	var x = document.getElementsByClassName("shrink")
	var boxes = document.getElementsByClassName("box")
	var title = document.getElementsByClassName("titles")
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
			// x[8].style.display = 'flex'
			animate.eighth.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
			setTimeout(function() {
				x[8].style.width = "auto"
			}, 300);
		} else {
			animate.eighth.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
			setTimeout(function() {
  				x[8].style.width = "0px"
			}, 500);
		}
	})

	x[4].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.second.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
			setTimeout(function() {
				x[8].style.width = "auto"
				x[5].style.width = "auto"
			}, 300);
		} else {
			animate.second.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
			setTimeout(function() {
  				x[8].style.width = "0px"
				x[5].style.width = "0px"
			}, 500);
		}
	})

	x[5].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.third.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
			setTimeout(function() {
				x[8].style.width = "auto"
				x[4].style.width = "auto"
			}, 300);
		} else {
			animate.third.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
			setTimeout(function() {
  				x[8].style.width = "0px"
				x[4].style.width = "0px"
			}, 500);
		}
	})

	x[6].addEventListener("click", function() {
		style = window.getComputedStyle(x[1])
		if (style.getPropertyValue('opacity') == "0") {
			animate.first.forEach(function(i) {
				i.classList.remove('minimize_boxes')
				i.classList.add('expand_boxes')
			})
			setTimeout(function() {
				x[8].style.width = "auto"
			}, 300);
		} else {
			animate.first.forEach(function(i) {
				i.classList.remove('expand_boxes')
				i.classList.add('minimize_boxes')
			})
			setTimeout(function() {
  				x[8].style.width = "0px"
			}, 500);

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
			setTimeout(function() {
				x[0].style.width = "auto"
				x[12].style.width = "auto"
				x[11].style.height = "auto"
			}, 300);
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
			setTimeout(function() {
  				x[0].style.width = "0px"
				x[12].style.width = "0px"
				x[11].style.height = "0px"
			}, 500);
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
			setTimeout(function() {
				x[0].style.width = "auto"
				x[12].style.width = "auto"
				x[10].style.height = "auto"
			}, 300);
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
			x[0].style.width = "0px"
			x[12].style.width = "0px"
			x[10].style.height = "0px"
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
			setTimeout(function() {
				x[0].style.width = "auto"
				x[9].style.width = "auto"
				x[14].style.height = "auto"
			}, 200);
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
			setTimeout(function() {
				x[0].style.width = "0px"
				x[9].style.width = "0px"
				x[14].style.height = "0px"
			}, 600);
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
			setTimeout(function() {
				x[0].style.width = "auto"
				x[9].style.width = "auto"
				x[13].style.height = "auto"
			}, 200);
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
			setTimeout(function() {
				x[0].style.width = "0px"
				x[9].style.width = "0px"
				x[13].style.height = "0px"
			}, 500);
		}

		// animate.fifth.forEach(function(i) {
		// 	i == x[14] ? i.className += " minimize_three" : i.className += " minimize_boxes"
		// })
	})

	// titles[0].style.fontcolor = "blue"

	document.onmousemove = function() {
	  // var x = document.getElementByTagName("Body"[0])
	  var width = (document.body.clientWidth)/(252 - 23)
	  var height = document.body.clientHeight/(253 - 2)
	  var x = (parseInt(event.clientX/ width,10) + 23)/4+180  
	  var y = (parseInt(event.clientY/ height,10) + 23) * 1.3 - 30
	  // document.body.style.backgroundColor = "rgb(" + y/4 + ", " + x/4 + ", 80)"
	  // env[0].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.5)"
	  // env[1].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.5)"
	  // env[2].style.backgroundColor = "rgba(" + x + ", " + y + ", 240, 0.125)"

	  title[0].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[1].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[2].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[3].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[4].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[5].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[6].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	  title[7].style.color = "rgb(" + y + ", " + y + ", " + y +")"

	  boxes[0].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[1].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[2].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[3].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[4].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[5].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[6].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	  boxes[7].style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"


	  // boxes.forEach(function(i) {
	  // 	i.style.backgroundColor = "black" 
	  // })
	}

	// cross[0].addEventListener("click", function() {
	// 	lines[0].style.display = 'none'
	// 	lines[1].style.display = 'none'
	// })
}