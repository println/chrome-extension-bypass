'use strict';

class Bypass {
    constructor(url) {
        this.url = url;
    }

    getParam(param) {
        let params = (new URL(this.url)).searchParams;
        return params.get(param);
    }   

    getIframe() { };

    startWithNewChild(selector) {
        let element = getElement(selector);
        element.appendChild(this.getIframe());
    }

    startWithReplacement(selector) {
        let element = getElement(selector);
        let parent = element.parentElement;
        parent.replaceChild(this.getIframe(), element);
    }

    startWithContent(selector) {
        let element = getElement(selector);
        element.innerHTML = '';
        element.appendChild(this.getIframe());
    }
}

function getElement(selector) {
    return document.body.querySelector(selector);
}