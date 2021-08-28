'use strict';

function anonymize(newWindow) {
    let removeGeneralUserInfo = () => {
        newWindow.document.body.prepend(newWindow.document.getElementById("questions"));
        newWindow.document.getElementById("application").remove();
    };

    let removeUserAnswers = () => {
        newWindow.document.querySelectorAll(".answer").forEach(el => {
            el.style.opacity = 1;
            el.classList.remove("wrong_answer");
        });
        newWindow.document.querySelectorAll(".user_points").forEach(el => {
            let elSpan = el.querySelector(".points");
            let score = elSpan.innerText.replace(/[\D\s]+/, '');
            el.innerText = score;
            el.append(elSpan);
        })
        newWindow.document.querySelectorAll(".answer_arrow").forEach(el => el.remove());
    };

    let formatAnswers = () => {
        newWindow.document.querySelectorAll(".correct_answer").forEach(el => {
            el.style.backgroundColor = '#0080204f';
            el.querySelector("input").checked = "true";
        });
        newWindow.document.querySelectorAll(".question").forEach(el => el.style.width = '95%');
    };

    removeGeneralUserInfo();
    removeUserAnswers();
    formatAnswers();
}
