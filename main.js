'use strict';

function anonymizerTest(newWindow) {
    let popupQuestions = newWindow.document.getElementById("questions");
    let popupWrapper = newWindow.document.getElementById("wrapper");
    let popupMain = newWindow.document.getElementById("main");
    popupWrapper.prepend(popupQuestions);
    popupMain.remove();
}

function onAfterLoaded(newWindow) {
    var isLoaded = false;
    newWindow.onload = () => {
        isLoaded = true;
        anonymizerTest(newWindow);
    }

    var times = 0;
    var maxTimes = 10;
    var interval = setInterval(() => {
        if (isLoaded) {
            window.console.log("Discard Compatibility...");
            clearInterval(interval);
        } else if (newWindow.document.readyState == "complete") {
            window.console.log("Apply Compatibility...");
            clearInterval(interval);
            anonymizerTest(newWindow);
        }

        if (times++ >= maxTimes) {
            window.console.log("Expires...");
            clearInterval(interval);
        }
    }, 500);
}

function extract() {
    var url = document.getElementById("preview_frame").src;
    var newWindow = window.open(url, 'Test', null, true);
    setTimeout(() => onAfterLoaded(newWindow), 1000);
}

function embedExtractButton() {
    var elContainer = document.querySelector("#content>.submission-details-header");
    var elDiv = document.createElement("div");
    var elButton = document.createElement("button");

    elDiv.className = "button-container";
    elButton.className = "Button Button--primary";
    elButton.setAttribute("type", "button");
    elButton.onclick = () => extract();
    elButton.textContent = "Extrair Prova";
    elButton.id = "bypass-extractor";

    elDiv.append(elButton);
    elContainer.append(elDiv);
}

embedExtractButton();



