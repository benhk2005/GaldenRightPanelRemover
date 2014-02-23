// ==UserScript==
// @name       Remove Galden Right Panel
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Remove Galden Polymer and Gal Sound Panel
// @match      http://hkgalden.com/topics/*
// @match      https://hkgalden.com/topics/*
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

$('.col-xs-6.col-sm-3.sidebar-offcanvas').hide();
$('.col-xs-12.col-sm-9').css('width', '100%');