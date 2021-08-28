'use strict';

class QuizTake {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    embedButton() {
        let elTarget = document.querySelector("#content .quiz-header");
        let label = "Preparar avaliação para impressão";
        let elButton = this.buttonFactory(() => this.anonymize(window), label)
        elTarget.prepend(elButton);
    }
}
