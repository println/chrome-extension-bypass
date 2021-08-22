'use strict';

function extract() {
    var popup = window.open ('/', 'Test');
    popup.close();

    var url = document.getElementById("preview_frame").src;
    popup = window.open (url, 'Test');

    popup.onload = () => {
        let popupQuestions = popup.document.getElementById("questions");
        let popupWrapper = popup.document.getElementById("wrapper");
        let popupMain = popup.document.getElementById("main");
        popupWrapper.prepend(popupQuestions);
        popupMain.remove();
    }
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



