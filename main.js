'use strict';

if (document.location.href.includes("youtube.com")) {
    let youtube = new Youtube(document.location.href);
    youtube.startWithReplacement('ytd-app');
} else {
    let radioCidade = new RadioCidade(document.location.href);
    radioCidade.startWithContent('div');
} 