'use strict';
var handler = null;

if (document.location.href.includes("submissions")) {
    handler = new Submissions(anonymize, createButton);
} else if (document.location.href.includes("quizzes")) {
    handler = new Quizzes(anonymize, createButton);
}

if(handler) {
    handler.embedButton();
}


