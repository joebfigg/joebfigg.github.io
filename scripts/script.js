/* change nav on scroll */
$(document).ready(function () { $(window).scroll(function () { if ($(document).scrollTop() > 100) { $("nav").addClass("scrolled"); } else { $("nav").removeClass("scrolled"); } }); }); 
$(document).ready(function () { $(window).scroll(function () { if ($(document).scrollTop() > 100) { $("nav").addClass("navbar-dark"); } else { $("nav").removeClass("navbar-dark"); } }); });



/* mastery bar */

$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});


function heroSelector() {
    
    var wix = document.getElementById("wix1");
    var jum = document.getElementById("jumbo");
    
    if (wix.classList.contains("d-none")) {
      wix.classList.remove("d-none");
      wix.classList.add("d-block");
      
      jum.classList.remove("d-block");
      jum.classList.add("d-none");
        
    } else {
      wix.classList.remove("d-block");
      wix.classList.add("d-none");
      
      jum.classList.remove("d-none");
      jum.classList.add("d-block");
    }
    
}

function deckSelector() {
    
    var grid = document.getElementById("gridDeck");
    var mosaic = document.getElementById("mosaicDeck");
    
    if (grid.classList.contains("d-none")) {
      grid.classList.remove("d-none");
      grid.classList.add("d-block");
      
      mosaic.classList.remove("d-block");
      mosaic.classList.add("d-none");
        
    } else {
      grid.classList.remove("d-block");
      grid.classList.add("d-none");
      
      mosaic.classList.remove("d-none");
      mosaic.classList.add("d-block");
    }
    
}


function gridSelector(source) {

  var items = document.getElementsByClassName("cardCol");
    
  if (source.id == "34"){
      for (var i=0; i < items.length; i++) {
        items[i].classList.remove("col-sm-6");
        items[i].classList.remove("col-sm-12");
        items[i].classList.add("col-sm-3");
      }      
  } else if (source.id == "26") {
      for (var i=0; i < items.length; i++) {
        items[i].classList.remove("col-sm-3");
        items[i].classList.remove("col-sm-12");
        items[i].classList.add("col-sm-6");
      }  
  } else {
      for (var i=0; i < items.length; i++) {
        items[i].classList.remove("col-sm-6");
        items[i].classList.remove("col-sm-3");
        items[i].classList.add("col-sm-12");
      }  
  }   
    
}






function yellowTheme() {

var element1 = document.getElementById("hero");
var element2 = document.getElementById("wix1");
var element3 = document.getElementById("wix2");
var element4 = document.getElementById("wix3");

element1.classList.add("headYellow");
element1.classList.remove("headRed","headPurple");

element2.classList.add("subYellow1");
element2.classList.remove("subRed1","subPurple1");

element3.classList.add("subYellow2");
element3.classList.remove("subRed2","subPurple2");
    
element4.classList.add("subYellow3");
element4.classList.remove("subRed3","subPurple3");     
    
}

function purpleTheme() {

var element1 = document.getElementById("hero");
var element2 = document.getElementById("wix1");
var element3 = document.getElementById("wix2");
var element4 = document.getElementById("wix3");

element1.classList.add("headPurple");
element1.classList.remove("headRed","headYellow");

element2.classList.add("subPurple1");
element2.classList.remove("subRed1","subYellow1");

element3.classList.add("subPurple2");
element3.classList.remove("subRed2","subYellow2");
    
element4.classList.add("subPurple3");
element4.classList.remove("subRed3","subYellow3");      
    
}


function redTheme() {

var element1 = document.getElementById("hero");
var element2 = document.getElementById("wix1");
var element3 = document.getElementById("wix2");
var element4 = document.getElementById("wix3");

element1.classList.add("headRed");
element1.classList.remove("headPurple","headYellow");

element2.classList.add("subRed1");
element2.classList.remove("subPurple1","subYellow1");

element3.classList.add("subRed2");
element3.classList.remove("subPurple2","subYellow2");
    
element4.classList.add("subRed3");
element4.classList.remove("subPurple3","subYellow3");    
    
}


