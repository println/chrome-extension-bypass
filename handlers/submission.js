'use strict';

class Submission {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    extract() {
        var url = document.getElementById("preview_frame").src;
        var newWindow = window.open(url, 'Test', null, true);
        setTimeout(() => this.anonymize(newWindow), 1000);
    }

    embedButton() {
        let elTarget = document.querySelector("#content>.submission-details-header");
        let label = "Extrair gabarito para impressão (nova aba)";
        let elButton = this.buttonFactory(() => this.extract(), label)
        elTarget.append(elButton);
    }
}
