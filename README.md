# Website Performance Optimization portfolio project

Just go to [https://simonstu.github.io/](https://simonstu.github.io/) to see the optimized portfolio in action

# Optimizations

## index.html
* inline css instead of a separate file
* add media query for the print css file
* removed loading of the google web font

## views/js/main.js
* optimized updatePosition function
** faster element selection by using _document.getElementsByClassName_ instead of _document.querySelectorAll_
** only animate the pizza items that are visible on the screen
** optimized the calculation of the new item position, i.e. removed the _scrollTop_ request out of the for-loop
* optimized changePizzaSizes function
** replaced _determineDx function_ with a simple switch to get a percentage value for the new pizza width
** removed _document.querySelectorAll(".randomPizzaContainer")_ out of the for-loop
* corrected the issues listed by jshint

# Grunt
Used grunt (see _package.json_ and _Gruntfile.js_) to check the js-files with _jshint_ and minimize them with _uglify_