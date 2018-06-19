
class RadioCidade extends Bypass {

    constructor(url) {        
        super(url);
        
        if(!url.includes("radiocidade.fm")){
            throw new Error("URL["+url+"] is not a valid Radio Cidade Url.");
        }
    }

    getIframe() {
        return new Audio('http://14073.live.streamtheworld.com/RADIOCIDADEAAC.aac').createTag();
    }
}
