'use strict';

class QuizTake {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    extract() {
        var url = document.location.href;
        var newWindow = window.open(url, 'Current Quiz', null, true);
        setTimeout(() => this.anonymize(newWindow), 1000);
    }

    embedButton() {
        let elTarget = document.querySelector("#content .quiz-header");
        let label = "Preparar avaliação para impressão (nova aba)";
        let elButton = this.buttonFactory(() => this.extract(), label)
        elTarget.prepend(elButton);
    }
}
