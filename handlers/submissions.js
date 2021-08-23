'use strict';

class Submissions {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    onAfterLoaded(newWindow) {
        var isLoaded = false;
        newWindow.onload = () => {
            isLoaded = true;
            this.anonymize(newWindow);
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
                this.anonymize(newWindow);
            }

            if (times++ >= maxTimes) {
                window.console.log("Expires...");
                clearInterval(interval);
            }
        }, 500);
    }

    extract() {
        var url = document.getElementById("preview_frame").src;
        var newWindow = window.open(url, 'Test', null, true);
        setTimeout(() => this.onAfterLoaded(newWindow), 1000);
    }

    embedButton() {
        let elTarget = document.querySelector("#content>.submission-details-header");
        let label = "Extrair Prova";
        let elButton = this.buttonFactory(() => this.extract(), label)
        elTarget.append(elButton);
    }
}
