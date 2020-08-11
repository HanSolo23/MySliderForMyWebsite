var mainSlider = document.querySelector('.slider');
var sliderItems = mainSlider.children;
var arrows = document.querySelector('.arrows');
var previous = arrows.querySelector('.prev');
var next = arrows.querySelector('.next');
var up = arrows.querySelector('.up');
var down = arrows.querySelector('.down');

var allImages = function(item) {
	var elements = [];
	for (var i = 0; i < item.length; i++) {
		var element = item[i].children;
		elements.push(element);
	}
	return elements;
};

var settings = {
	width: 370,
	height: 426,
	margin: 20
};

var leftPosition = function(item, index){
	var leftPoint = (settings.width + settings.margin) * index + 'px';
	return item.style.left = leftPoint;
};

var topPosition = function(item, index) {
	var topPoint = (settings.height + settings.margin) * index + 'px';
	return item.style.top = topPoint; 
};

for (var i = 0; i < sliderItems.length; i++) {
	leftPosition(sliderItems[i], i);
};

for (var j = 0; j < allImages(sliderItems).length; j++) {
	for (var b = 0; b < allImages(sliderItems)[j].length; b++) {
		topPosition(allImages(sliderItems)[j][b], b);
	};	
};

var row = 0;
next.addEventListener('click', function(evt) {
	evt.preventDefault;
	row -= settings.width + settings.margin;
	var goTo = row + 'px';
	mainSlider.style.left = goTo;
	if (-row === (sliderItems.length - 2) * (settings.width + settings.margin)) {
		next.classList.add('disable');
	};
	if (row !== settings.width + settings.margin) {
		previous.classList.remove('disable');
	};
});

previous.addEventListener('click', function(evt) {
	evt.preventDefault;
	row += settings.width + settings.margin;
	var goTo = row + 'px';
	mainSlider.style.left = goTo;
	if (row === settings.width + settings.margin) {
		previous.classList.add('disable');
	};
	if (-row !== ((sliderItems.length - 2) * (settings.width + settings.margin))) {
		next.classList.remove('disable');
	};
});

var column = 0;
up.addEventListener('click', function(evt) {
	evt.preventDefault;
	column += settings.height + settings.margin;
	var goTo = column + 'px';
	mainSlider.style.top = goTo;
	if (column === settings.height + settings.margin) {
		up.classList.add('disable');
	};
	for (var j = 0; j < allImages(sliderItems).length; j++) {
		for (var b = 0; b < allImages(sliderItems)[j].length; b++) {
			if (-column !== (allImages(sliderItems)[j].length + 1) * (settings.height + settings.margin)) {
				down.classList.remove('disable');
				
			};
		};	
	};
});

down.addEventListener('click', function(evt) {
	evt.preventDefault;
	column -= settings.height + settings.margin;
	var goTo = column + 'px';
	mainSlider.style.top = goTo;
	for (var j = 0; j < allImages(sliderItems).length; j++) {
		for (var b = 0; b < allImages(sliderItems)[j].length; b++) {
			if (-column === (allImages(sliderItems)[j].length + 1) * (settings.height + settings.margin)) {
				down.classList.add('disable');
				
			};
		};	
	};
	if (column !== settings.height + settings.margin) {
		up.classList.remove('disable');
	};
});
/*var sliderGoing = function(item) {
	var go = 0;
	if (item === 'next') {
		item.addEventListener('click', function(evt) {
		
		
		
		})
	}
}*/