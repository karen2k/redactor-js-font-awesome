Redactor-awesome
================

<a href="http://fontawesome.io" target="_blank">Awesome icons font</a> for awesome <a href="http://imperavi.com/redactor" target="_blank">Redactor.js</a>.

<img src="https://raw.github.com/karen2k/redactor-js-font-awesome/master/screenshot.png">


Implementation
==============

<h3>Initialization</h3>

```javascript
$(document).ready(function(){
	$('textarea').redactor({
		focus: true,
		plugins: ['fontcolor', 'awesome', 'fontsize']
	});
});
```

<h3>CSS files</h3>

```html
<link rel="stylesheet" type="text/css" href="http://imperavi.com/js/redactor/redactor.css">
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="awesome/redactor-awesome.css">
```

<h3>JavaScript files</h3>

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="http://imperavi.com/js/redactor/redactor.js"></script>
<script src="redactor-plugins/fontsize.js"></script>
<script src="redactor-plugins/fontcolor.js"></script>
<script src="awesome/redactor-awesome.js"></script>
```
