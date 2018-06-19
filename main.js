'use strict';

const TARGET = 'td.bodyData';

if (document.location.href.includes("youtube.com")) {
    let youtube = new Youtube(document.location.href);
    youtube.startWithReplacement(TARGET);
} else {
    let radioCidade = new RadioCidade(document.location.href);
    radioCidade.startWithReplacement(TARGET);
} 