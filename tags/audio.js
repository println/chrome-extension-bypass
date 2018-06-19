'use strict';

class Audio extends Tag {
    constructor(src) {
        super();
        this.src = src;
    }
    createTag() {
        let audio = document.createElement("audio");
        let source = document.createElement("source");
        source.src = this.src;        
        audio.setAttribute("controls", "controls");
        audio.setAttribute("autoplay", "true");
        source.setAttribute("type", "audio/mp4");
        audio.appendChild(source);
        return audio;
    }
}