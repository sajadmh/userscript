// ==UserScript==
// @name         Remove max-width on dLGDFK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces max-width on "dLGDFK" to "none !important"
// @author       You
// @match        https://*.beamery.com/*
// @grant        none
// ==/UserScript==

(function() {

    var insertStyle = document.createElement('style');
    insertStyle.innerHTML = `.dLGDFK {max-width: none !important; }`;
    document.head.appendChild(insertStyle);

let clickCounter = 0;
let timestamp = new Date().getTime();

setInterval(() => {
    var elements = document.getElementsByClassName("sc-bczRLJ sc-jqUVSM iVEVjY uUDij");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent === "Show") {
            var now = new Date().getTime();
            if (now - timestamp > 60000) {
                clickCounter = 0;
                timestamp = now;
            }
            console.log("clickCounter: ", clickCounter);
            console.log("timestamp: ", timestamp);
            if (clickCounter < 30) {
                elements[i].click();
                clickCounter++;
            }
        }
    }
}, 1000);

})();
