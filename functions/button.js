'use strict';

function createButton(callback, label) {
    var elDiv = document.createElement("div");
    var elButton = document.createElement("button");

    elDiv.className = "button-container";
    elButton.className = "Button Button--primary";
    elButton.style.backgroundColor = "lime";
    elButton.style.color = "blue";
    elButton.setAttribute("type", "button");
    elButton.onclick = callback;
    elButton.textContent = label;
    elButton.id = "bypass-extractor";

    elDiv.append(elButton);

    return elDiv;
}
