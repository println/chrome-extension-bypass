'use strict';
var handler = null;

if (document.location.href.includes("submissions")) {
    handler = new Submission(anonymizeAsync, createButton);
} else if (document.location.href.match(/quizzes\/.+\/take/)) {
    handler = new QuizTake(anonymizeAsync, createButton);
} else if (document.location.href.includes("quizzes")) {
    handler = new Quiz(anonymize, createButton);
}

if (handler) {
    handler.embedButton();
}
