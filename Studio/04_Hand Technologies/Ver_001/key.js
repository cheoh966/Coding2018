'use strict';

var keyCodes = {

  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  
};

var body = document.querySelector('body');

body.onkeydown = function (e) {
  if ( !e.metaKey ) {
    e.preventDefault();
  }

  document.querySelector('.keycode-display').innerHTML = e.keyCode;
  document.querySelector('.text-display').innerHTML =
    keyCodes[e.keyCode] || "huh? Let me know what browser and key this was. <a href=\"https://github.com/wesbos/keycodes/issues/new?title=Missing keycode "+e.keyCode+"&body=Tell me what key it was or even better, submit a Pull request!\">Submit to Github</a>";
};

