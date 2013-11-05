// //declare the class nav-top as a variable that we want to observe (so we can change it's data state)
// var navTop = document.querySelector('.nav-top');
// var navBtn = document. querySelector ('.nav-btn');

// //observe the class nav-button and in the event of a click, perform a programmed action (x)


// document.querySelector('.nav-btn').addEventListener('click', function (x) {
// 	x.preventDefault();

// 	if (navTop.getAttribute('data-state') == 'expanded') {
// 		navTop.setAttribute('data-state', 'collapsed');
// 		navBtn.setAttribute('data-state', 'disengaged');
// 	} else {
// 		navTop.setAttribute('data-state', 'expanded');
// 		navBtn.setAttribute('data-state', 'engaged');
// 		}

// });



"use strict";
var closeNav, insideNav, navBtn, navLinks, navTop, openNav, toggleNav, waitToCloseNav;

navTop = $('.nav-top');

navBtn = $('.nav-btn');

navLinks = $('.nav-top a');

insideNav = false;

openNav = function() {
  navTop.setAttribute('data-state', 'expanded');
  return navBtn.setAttribute('data-state', 'engaged');
};

closeNav = function() {
  navTop.setAttribute('data-state', 'collapsed');
  return navBtn.setAttribute('data-state', 'disengaged');
};

toggleNav = function() {
  if (navTop.getAttribute('data-state') === 'expanded') {
    return closeNav();
  } else {
    return openNav();
  }
};

waitToCloseNav = function() {
  return setTimeout(function() {
    if (!insideNav) {
      return closeNav();
    }
  }, 100);
};

navBtn.on('click', function(e) {
  e.preventDefault();
  return toggleNav();
});

navBtn.on('focus', function(e) {
  insideNav = true;
  return openNav();
});

navBtn.on('blur', function(e) {
  insideNav = false;
  return waitToCloseNav();
});

navLinks.on('focus', function(e) {
  insideNav = true;
  return openNav();
});

navLinks.on('blur', function(e) {
  insideNav = false;
  return waitToCloseNav();
});
