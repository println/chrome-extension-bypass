'use strict';

class Quizzes {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    embedButton() {
        let elTargetAnchor = document.querySelector("#quiz_title");
        let elTarget = elTargetAnchor.parentNode;
        let label = "Anonimizar Avaliação";
        let elButton = this.buttonFactory(() => this.anonymize(window), label)
        elTarget.insertBefore(elButton, elTargetAnchor);
    }
}
