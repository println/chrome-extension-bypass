'use strict';

class Iframe extends Tag{
    constructor(src, width, height){
        super();
        this.src = src;
        this.width = width;
        this.height = height;
    }
    createTag() {
        let iframe = document.createElement("iframe");
        iframe.src = this.src;
        iframe.setAttribute("width", this.width);
        iframe.setAttribute("height", this.height);
        iframe.setAttribute("frameborder", "0");
        return iframe;
    }
}