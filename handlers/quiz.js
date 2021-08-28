'use strict';

class Quiz {
    constructor(anonymizeFn, buttonFactoryFn) {
        this.anonymize = anonymizeFn;
        this.buttonFactory = buttonFactoryFn;
    }

    embedButton() {
        let elTargetAnchor = document.querySelector("#quiz_title");
        let elTarget = elTargetAnchor.parentNode;
        let label = "Preparar gabarito para impressão";
        let elButton = this.buttonFactory(() => this.anonymize(window), label)
        elTarget.insertBefore(elButton, elTargetAnchor);
    }
}
