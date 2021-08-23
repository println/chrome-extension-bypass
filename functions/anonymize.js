'use strict';

function anonymize(newWindow) {
    newWindow.document.body.prepend(newWindow.document.getElementById("questions"));
    newWindow.document.getElementById("application").remove();

    newWindow.document.querySelectorAll(".answer").forEach(n => {
        n.style.opacity = 1;
        n.classList.remove("wrong_answer");
    });

    newWindow.document.querySelectorAll(".correct_answer").forEach(n => {
        n.style.backgroundColor = '#0080204f';
        n.querySelector("input").checked = "true";
    })

    newWindow.document.querySelectorAll(".answer_arrow").forEach(n => n.remove());

    newWindow.document.querySelectorAll(".question").forEach(n => n.style.width = '95%');
}
