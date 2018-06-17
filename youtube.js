'use strict';

const PLAYLIST_SRC = 'https://www.youtube.com/embed/videoseries?list=';
const VIDEO_SRC = 'https://www.youtube.com/embed/';
const AUTOPLAY_PARAM = 'autoplay=1';


class Youtube extends Bypass {

    constructor(url) {        
        super(url);
        
        if(!url.includes("youtube.com/watch")){
            throw new Error("URL["+url+"] is not a valid Youtube Url.");
        }
    }

    getIframe() {
        let src;
        if (isPlaylist(this.url)) {
            src = PLAYLIST_SRC + this.getParam('list') + '&' + AUTOPLAY_PARAM ;
            console.log("Playlist:", src) ;
        } else {
            src = VIDEO_SRC + this.getParam('v') + '?' + AUTOPLAY_PARAM;
            console.log("Video:", src);
        }
        let iframe = this.createIframe(src, 640, 360);
        iframe.setAttribute("allowfullscreen", "allowfullscreen");
        return iframe;
    }
}

function isPlaylist(url) {
    return url.includes("list=");
}