/* Script to inject the javascript file into the page */
var s1 = document.createElement('script');
var s2 = document.createElement('script');
s1.src = chrome.extension.getURL('sites/itau_pin.js');
s2.src = chrome.extension.getURL('sites/itau.js');
s1.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s1);
(document.head||document.documentElement).appendChild(s2);
