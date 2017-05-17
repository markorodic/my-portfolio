window.onload = function() {

	//Variables
	var sides = document.getElementsByClassName("side")
	var areas = document.getElementsByClassName("area")
	var boxes = document.getElementsByClassName("box")
	var parent = document.getElementsByClassName('container')[0]
	var title = document.getElementsByClassName('titles')
	var body = document.getElementsByClassName('bodyText')
	var env = document.getElementsByClassName("mail")

	function hideTitles(result) {
		var count = 0
		while (count < 8) {
			title[count].style.display = result
			count++
		}
	}

	function showBodyText(box, result) {
		boxIndex = Object.keys(whichBox).indexOf(box)
		body[boxIndex].style.display = result
	}

	//Boxes
	var whichBox = {
		one: boxes[0],
		two: boxes[1],
		three: boxes[2],
		four: boxes[3],
		five: boxes[4],
		six: boxes[5],
		seven: boxes[6],
		eight: boxes[7]
	}


	//Which to open and close
	var change = {
		one: [sides[1], areas[1], areas[2]],
		two: [sides[1], areas[0], areas[2], boxes[2]],
		three: [sides[1], areas[0], areas[2], boxes[1]],
		four: [sides[1], areas[0], areas[1]],
		five: [sides[0], areas[4], boxes[5]],
		six: [sides[0], areas[4], boxes[4]],
		seven: [sides[0], areas[3], boxes[7]],
		eight: [sides[0], areas[3], boxes[6]]
	}

	// Fade boxes in
	// function fadedIn(){
	// 	Object.values(whichBox).forEach(function(box) {
	// 		var boxName = box.className.split(' ')[0]
	// 		box.classList.add('fade-in-' + boxName)
	// 	})
	// }

	// fadedIn()

	//Open and close methods
	function minimize(element) {
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		// if (navigator.userAgent.indexOf("Safari") != 100) {
			element.classList.remove('expand')
			element.classList.add('minimize')
		} else {
			element.style.flexBasis = "0%"
			element.style.flexGrow = "0"
			element.style.opacity = "0"
		}
	}

	function expand(element) {
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			element.classList.remove('minimize')
			element.classList.add('expand')
		} else {
			element.style.flexBasis = "100%"
			element.style.flexGrow = "1"
			element.style.opacity = "1"
		}
	}

	//Boolean of whether it is opened or closed
	function closedBoxOnThe(whichSide) {
		if (whichSide == 'left') {
			var style = window.getComputedStyle(sides[1])
			return style.getPropertyValue('opacity') == "1"
		} else {
			var style = window.getComputedStyle(sides[0])
			return style.getPropertyValue('opacity') == "1"
		}
	}

	//Which side of the container is the box
	function boxSide(boxName) {
		(boxName == 'one') || (boxName == 'two') || (boxName == 'three') || (boxName == 'four') ? side = 'left' : side = 'right'
		return side
	}

	//Open the box
	function openBox(boxName) {
		var side = boxSide(boxName)
		if (closedBoxOnThe(side)) {
			change[boxName].forEach(function(section) {
				minimize(section)
			})
			hideTitles('none')
			showBodyText(boxName, 'flex')
		} else {
			change[boxName].forEach(function(section) {
				expand(section)
			})
			setTimeout(function() {
				hideTitles('flex')
			}, 350)
			showBodyText(boxName, 'none')
		}
	}

	//Listen for clicks and send the correct box to the openBox method
	parent.addEventListener('click', function(e) {
		if (e.target !== e.currentTarget) {
			var clickedItem = e.target.className.split(" ")[0]
			openBox(clickedItem)
		}
	})

	// Change box color on mousemove
	// document.onmousemove = function() {
	//   var width = (document.body.clientWidth)/(252 - 23)
	//   var height = document.body.clientHeight/(253 - 2)
	//   var x = (parseInt(event.clientX/ width,10) + 23)/4+180  
	//   var y = (parseInt(event.clientY/ height,10))/2 + 120
	//   var x1 = 200 - (parseInt(event.clientX/ width,10) + 23)
	//   var y2 = 200 - (parseInt(event.clientY/ height,10) + 2)/2
	  
	//   env[0].style.backgroundColor = "rgba(" + x1 + ", " + y2 + ", 220, 0.5)"
	//   env[1].style.backgroundColor = "rgba(" + x1 + ", " + y2 + ", 220, 0.5)"
	//   env[2].style.backgroundColor = "rgba(" + x1 + ", " + y2 + ", 220, 0.125)"

	//   var count = 0
	//   while (count < 8) {
	//   	body[count].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	// 	count++
	//   }

	//   var count = 0
	//   while (count < 8) {
	//   	title[count].style.color = "rgb(" + y + ", " + y + ", " + y +")"
	// 	count++
	//   }

	//   var boxArray = Object.keys(whichBox).map(function(key) {
 //      	return whichBox[key]
	//   })

	//   boxArray.forEach(function(box) {
	//   	console.log('body')
	//   	box.style.backgroundColor = "rgb(" + x + ", " + x + ", " + x +")"
	//   })
	// }
}