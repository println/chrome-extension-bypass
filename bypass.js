'use strict';

class Bypass {
    constructor(url) {
        this.url = url;
    }

    getParam(param) {
        let params = (new URL(this.url)).searchParams;
        return params.get(param);
    }

    createIframe(src, width, height) {
        let iframe = document.createElement("iframe");
        iframe.src = src;
        iframe.setAttribute("width", width);
        iframe.setAttribute("height", height);
        iframe.setAttribute("frameborder", "0");
        return iframe;
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

    StartWithContent(selector) {
        let element = getElement(selector);
        element.innerHTML = '';
        element.appendChild(this.getIframe());
    }
}

function getElement(selector) {
    return document.body.querySelector(selector);
}