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

function anonymizeAsync(newWindow) {
    var isLoaded = false;
    newWindow.onload = () => {
        isLoaded = true;
        anonymize(newWindow);
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
            anonymize(newWindow);
        }

        if (times++ >= maxTimes) {
            window.console.log("Expires...");
            clearInterval(interval);
        }
    }, 500);
}
