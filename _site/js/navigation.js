//declare the class nav-top as a variable that we want to observe (so we can change it's data state)
var navTop = document.querySelector('.nav-top');
var navBtn = document. querySelector ('.nav-btn');

//observe the class nav-button and in the event of a click, perform a programmed action (x)


document.querySelector('.nav-btn').addEventListener('click', function (x) {
	x.preventDefault();

	if (navTop.getAttribute('data-state') == 'expanded') {
		navTop.setAttribute('data-state', 'collapsed');
		navBtn.setAttribute('data-state', 'disengaged');
	} else {
		navTop.setAttribute('data-state', 'expanded');
		navBtn.setAttribute('data-state', 'engaged');
		}

});
